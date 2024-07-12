import mongoose from "mongoose";
export default async function handler(req, res) {
  try {
    // Check the database connection status
    const isConnected = mongoose.connection.readyState === 1;

    if (isConnected) {
      res.status(200).json({
        success: true,
        message: "skill-connect API is healthy and working!",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: "Connected",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "skill-connect API is healthy, but MongoDB connection failed",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: "Disconnected",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: "Error",
    });
  }
}
