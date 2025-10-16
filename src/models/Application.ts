import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
  name: string;
  email: string;
  location: string;
  experience: string;
  job_title: string;
  resume_url: string;
  createdAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    experience: {
      type: String,
      required: [true, "Experience is required"],
      trim: true,
    },
    job_title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    resume_url: {
      type: String,
      required: [true, "Resume URL is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Application ||
  mongoose.model<IApplication>("Application", ApplicationSchema);
