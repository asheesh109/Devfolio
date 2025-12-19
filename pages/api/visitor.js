import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Prevent multiple connections in dev
if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (global.mongoose.conn) return global.mongoose.conn;

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGODB_URI);
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

// Inline schema (NO models folder)
const VisitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

// Reuse model if already compiled
const Visitor =
  mongoose.models.Visitor || mongoose.model("Visitor", VisitorSchema);

export default async function handler(req, res) {
  await connectDB();

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

  return res.status(405).end();
}
