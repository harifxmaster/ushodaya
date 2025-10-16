import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, location, experience, job_title, resume_url } = body;

    // Validate required fields
    if (!name || !email || !location || !experience || !job_title || !resume_url) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Create new application
    const application = await Application.create({
      name,
      email,
      location,
      experience,
      job_title,
      resume_url,
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("API Error:", err.message);
      return NextResponse.json(
        { success: false, error: err.message },
        { status: 500 }
      );
    }
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
