import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

// Global variable for reuse across hot reloads in dev
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectdDB(): Promise<{
  conn: typeof mongoose | null;
  error?: string;
}> {
  if (cached.conn) {
    return { conn: cached.conn };
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongooseInstance) => mongooseInstance)
      .catch((err) => {
        console.error("Mongoose connection failed:", err);
        return null;
      });
  }

  cached.conn = await cached.promise;

  if (!cached.conn) {
    return { conn: null, error: "Failed to connect to MongoDB" };
  }

  return { conn: cached.conn };
}
