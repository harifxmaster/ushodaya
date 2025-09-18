"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

// Job Types
type JobDetails = {
  responsibility: string;
  specification: string[];
  type: string;
  mode: string;
  salary: string;
  experience: string;
  location: string;
};

type Job = {
  title: string;
  tags: string[];
  shortDesc: string;
  details: JobDetails | null;
};

// Sample Jobs (with full content from screenshot)
const jobs: Job[] = [
  {
    title: "Full Stack Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Designing and implementing user interfaces, backend systems, APIs, and databases to deliver scalable applications...",
    details: {
      responsibility:
        "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases and APIs using technologies such as Node.js, Python, Ruby, or Java. Designing, implementing, and managing databases (SQL or NoSQL) to ensure data integrity and efficient retrieval. Using version control systems like Git to manage code changes and collaborate with other developers. Implementing security best practices to protect applications from vulnerabilities and threats. Automating deployment processes and managing CI/CD pipelines to streamline development and release cycles. Working with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality software.",
      specification: [
        "Proficiency in front-end technologies HTML, CSS, JavaScript frameworks like React or Angular.",
        "Proficiency in back-end technologies Node.js, Python, Ruby, Java, etc.",
        "Experience in designing and managing databases (SQL and NoSQL).",
        "Proficiency in schema design and query optimization.",
        "Strong knowledge of version control systems, particularly Git.",
        "Expertise in managing and collaborating on code repositories.",
        "Knowledge of web security best practices.",
        "Experience with performance optimization techniques.",
        "Excellent collaboration skills for working effectively in a team environment.",
        "Ability to communicate technical concepts to non-technical stakeholders.",
      ],
      type: "Full-time",
      mode: "Hybrid",
      salary: "Commensurate with experience and skills",
      experience: "Minimum 3 Years",
      location: "Chennai, Madurai, Coimbatore",
    },
  },
  {
    title: "React Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Designing and implementing user interfaces using React and related JavaScript frameworks...",
    details: {
      responsibility:
        "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
      specification: [],
      type: "Full-time",
      mode: "Hybrid",
      salary: "Industry Standard",
      experience: "3+ years",
      location: "Chennai, Madurai",
    },
  },
  {
    title: "Flutter Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Designing and implementing user interfaces for cross-platform mobile apps using Flutter...",
    details: {
      responsibility:
        "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
      specification: [],
      type: "Full-time",
      mode: "Hybrid",
      salary: "Industry Standard",
      experience: "3+ years",
      location: "Chennai, Madurai",
    },
  },
  {
    title: "Php Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Building dynamic server-side applications using PHP frameworks...",
    details: {
      responsibility:
        "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
      specification: [],
      type: "Full-time",
      mode: "Hybrid",
      salary: "Industry Standard",
      experience: "3+ years",
      location: "Chennai, Madurai",
    },
  },
  {
    title: "Mern Stack Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Building scalable applications using MongoDB, Express.js, React, and Node.js...",
    details: {
      responsibility:
        "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
      specification: [],
      type: "Full-time",
      mode: "Hybrid",
      salary: "Industry Standard",
      experience: "3+ years",
      location: "Chennai, Madurai",
    },
  },
];

export default function Location() {
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null as File | null,
    location: "",
    experience: "",
  });

  // Handle Form Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "resume" && files) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit Application
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!formData.resume) {
        alert("Please upload a resume before submitting.");
        return;
      }

      // 1. Upload resume to Supabase Storage
      const fileExt = formData.resume.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, formData.resume);

      if (uploadError) throw uploadError;

      // 2. Get public URL of uploaded resume
      const { data: publicUrlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      const resumeUrl = publicUrlData.publicUrl;

      // 3. Insert application into Applications table
      const { error: insertError } = await supabase
        .from("Applications")
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            location: formData.location,
            experience: formData.experience,
            job_title: selectedJob.title,
            resume_url: resumeUrl,
            created_at: new Date().toISOString(),
          },
        ]);

      if (insertError) throw insertError;

      alert(`✅ Application submitted successfully for ${selectedJob.title}!`);

      // Reset Form
      setShowModal(false);
      setFormData({
        name: "",
        email: "",
        resume: null,
        location: "",
        experience: "",
      });
    } catch (err: any) {
      console.error(
        "❌ Error submitting:",
        err instanceof Error ? err.message : JSON.stringify(err)
      );
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white p-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Job List */}
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedJob(job)}
              className={`p-4 border rounded-lg cursor-pointer transition ${
                selectedJob.title === job.title
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <h3 className="text-lg font-bold text-blue-900">{job.title}</h3>
              <div className="flex gap-2 my-2 flex-wrap">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {job.shortDesc}
              </p>
            </div>
          ))}
        </div>

        {/* Job Details & Apply Button */}
        <div className="border rounded-lg p-6 shadow-sm flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <h2 className="text-xl font-bold text-blue-900">{selectedJob.title}</h2>
            <div className="flex gap-2 my-2 flex-wrap">
              {selectedJob.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition"
                >
                  {tag}
                </span>
              ))}
            </div>

            {selectedJob.details ? (
              <>
                <h3 className="font-semibold mt-4">Responsibilities</h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {selectedJob.details.responsibility}
                </p>

                {selectedJob.details.specification.length > 0 && (
                  <>
                    <h3 className="font-semibold mt-4">Job Specifications</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                      {selectedJob.details.specification.map((spec, idx) => (
                        <li key={idx}>{spec}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <p className="mt-4 text-gray-500 italic">
                Detailed job description will be updated soon.
              </p>
            )}
          </div>

          <div className="mt-6 justify-center flex">
            <button
              onClick={() => setShowModal(true)}
              className="w-40 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold text-blue-900 mb-4">
              Apply for {selectedJob.title}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
