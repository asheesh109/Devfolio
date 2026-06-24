import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!global.mongoose) {
  global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

const VisitorSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const Visitor =
  mongoose.models.Visitor ||
  mongoose.model("Visitor", VisitorSchema);

export default async function handler(req, res) {
  try {
    await connectDB();

    // Ensure single visitor counter document exists
    let visitorDoc = await Visitor.findOne({ key: "main_counter" });

    if (!visitorDoc) {
      visitorDoc = await Visitor.create({
        key: "main_counter",
        count: 580, // Put your current count here
      });
    }

    if (req.method === "POST") {
      const updatedDoc = await Visitor.findOneAndUpdate(
        { key: "main_counter" },
        { $inc: { count: 1 } },
        { new: true }
      );

      return res.status(200).json({
        count: updatedDoc.count,
      });
    }

    if (req.method === "GET") {
      return res.status(200).json({
        count: visitorDoc.count,
      });
    }

    return res.status(405).json({
      error: "Method not allowed",
    });
  } catch (error) {
    console.error("Visitor API Error:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
}