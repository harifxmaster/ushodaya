"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

// Types
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

// Jobs array
const jobs: Job[] = [
  {
    title: "Full Stack Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc: "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular...",
    details: {
      responsibility: "Designing and implementing user interfaces using modern web technologies.",
      specification: [
        "Proficiency in front-end technologies like HTML, CSS, and JavaScript (React or Angular).",
        "Proficiency in back-end technologies like Node.js, Python, Ruby, or Java.",
      ],
      type: "Full-time",
      mode: "Hybrid",
      salary: "Industry standard",
      experience: "Minimum 3 years",
      location: "Chennai, Madurai, Coimbatore",
    },
  },
  {
    title: "React Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc: "Primary Responsibility: Designing and implementing user interfaces...",
    details: null,
  },
  {
    title: "Flutter Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc: "Primary Responsibility: Designing and implementing mobile apps using Flutter and Dart...",
    details: null,
  },
  {
    title: "PHP Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc: "Primary Responsibility: Developing and maintaining server-side applications using PHP...",
    details: null,
  },
  {
    title: "MERN Stack Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc: "Primary Responsibility: Developing full-stack applications using MongoDB, Express, React, and Node.js...",
    details: null,
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

  // Handle form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "resume" && files) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!formData.resume) {
        alert("Please upload a resume before submitting.");
        return;
      }

      // 1. Upload resume
      const fileExt = formData.resume.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("job-resumes")
        .upload(filePath, formData.resume);

      if (uploadError) throw uploadError;

      // 2. Get public URL
      const { data: publicUrlData } = supabase.storage
        .from("job-resumes")
        .getPublicUrl(filePath);

      const resumeUrl = publicUrlData.publicUrl;

      // 3. Insert into database
      const { error: insertError } = await supabase.from("applications").insert([
        {
          name: formData.name,
          email: formData.email,
          location: formData.location,
          experience: formData.experience,
          resume_url: resumeUrl,
          job_title: selectedJob.title,
        },
      ]);

      if (insertError) throw insertError;

      alert(`✅ Application submitted successfully for ${selectedJob.title}!`);

      // Reset form
      setShowModal(false);
      setFormData({
        name: "",
        email: "",
        resume: null,
        location: "",
        experience: "",
      });
    } catch (err: any) {
      console.error("❌ Error submitting:", err instanceof Error ? err.message : JSON.stringify(err));
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white p-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Panel */}
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
              <p className="text-sm text-gray-600 line-clamp-2">{job.shortDesc}</p>
            </div>
          ))}
        </div>

        {/* Right Panel */}
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
                <h3 className="font-semibold mt-4">Primary Responsibility:</h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">{selectedJob.details.responsibility}</p>

                <h3 className="font-semibold mt-4">Job Specification:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                  {selectedJob.details.specification.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>

                <div className="mt-4 text-sm text-gray-700 space-y-1">
                  <p><strong>Employment Type:</strong> {selectedJob.details.type}</p>
                  <p><strong>Workplace Type:</strong> {selectedJob.details.mode}</p>
                  <p><strong>Salary:</strong> {selectedJob.details.salary}</p>
                  <p><strong>Experience Required:</strong> {selectedJob.details.experience}</p>
                  <p><strong>Job Location:</strong> {selectedJob.details.location}</p>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-semibold mt-4">Short Description:</h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">{selectedJob.shortDesc}</p>
                <p className="mt-4 text-gray-500 italic">Detailed job description will be updated soon.</p>
              </>
            )}
          </div>

          {/* Apply Now Button */}
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

            <h2 className="text-xl font-bold text-blue-900 mb-4">Apply for {selectedJob.title}</h2>

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
