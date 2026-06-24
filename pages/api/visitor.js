import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// In-memory fallback storage if MongoDB fails
let inMemoryCount = 0;
let mongoConnected = false;

// Prevent multiple connections in dev
if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (!MONGODB_URI) {
    console.warn("MONGODB_URI is not defined. Using in-memory storage.");
    return null;
  }

  try {
    if (global.mongoose.conn) return global.mongoose.conn;

    if (!global.mongoose.promise) {
      global.mongoose.promise = mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        retryWrites: true,
      });
    }

    global.mongoose.conn = await global.mongoose.promise;
    mongoConnected = true;
    console.log("✓ MongoDB connected successfully");
    return global.mongoose.conn;
  } catch (error) {
    console.warn("MongoDB connection failed, using in-memory storage:", error.message);
    mongoConnected = false;
    return null;
  }
}

// Inline schema (NO models folder)
const VisitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

// Reuse model if already compiled
let Visitor;
try {
  Visitor = mongoose.models.Visitor || mongoose.model("Visitor", VisitorSchema);
} catch (e) {
  console.warn("Could not initialize Visitor model:", e.message);
}

export default async function handler(req, res) {
  try {
    await connectDB();

    if (mongoConnected && Visitor) {
      // Use MongoDB
      if (req.method === "POST") {
        const doc = await Visitor.findOneAndUpdate(
          {},
          { $inc: { count: 1 } },
          { new: true, upsert: true }
        );
        return res.status(200).json({ count: doc.count });
      }

      if (req.method === "GET") {
        const doc = await Visitor.findOne({});
        return res.status(200).json({ count: doc?.count || 0 });
      }
    } else {
      // Use in-memory fallback
      if (req.method === "POST") {
        inMemoryCount++;
        return res.status(200).json({ count: inMemoryCount });
      }

      if (req.method === "GET") {
        return res.status(200).json({ count: inMemoryCount });
      }

      return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    console.error("Visitor API error:", error);
    // For GET requests, still return the current count
    if (req.method === "GET") {
      return res.status(200).json({ count: inMemoryCount });
    }
    // Still return the in-memory count as fallback
    return res.status(200).json({ 
      count: inMemoryCount,
      note: "Using fallback storage"
    });
  }
}
