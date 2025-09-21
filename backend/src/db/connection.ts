import { connect, disconnect } from "mongoose";

// Temporary debug line - add this
console.log("MongoDB URL:", process.env.MONGODB_URL ? "Found" : "Not found");
console.log("Full URL (first 20 chars):", process.env.MONGODB_URL?.substring(0, 20));

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("Successfully connected to MongoDB!"); // Add success message
  } catch (error) {
    console.log("Full connection error:", error); // Show full error instead of just error
    throw new Error("Could not Connect To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };