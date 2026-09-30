import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

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

    const { data, error } = await supabase
      .from("applications")
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          location: location.trim(),
          experience: experience.trim(),
          job_title: job_title.trim(),
          resume_url: resume_url.trim(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      data,
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
