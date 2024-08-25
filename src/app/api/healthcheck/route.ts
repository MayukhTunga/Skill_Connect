import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Named export for the GET method
export async function GET() {
  try {
    // Check the database connection status
    const isConnected = mongoose.connection.readyState === 1;

    if (isConnected) {
      return NextResponse.json(
        {
          success: true,
          message: "skill-connect API is healthy and working!",
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
          database: "Connected",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message:
            "skill-connect API is healthy, but MongoDB connection failed",
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
          database: "Disconnected",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: "Error",
      },
      { status: 500 }
    );
  }
}
