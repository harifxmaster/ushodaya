"use client";
import { useState } from "react";

const jobs = [
  {
    title: "Full Stack Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
    details: {
      responsibility: `Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases, and APIs using technologies such as Node.js, Python, Ruby, or Java. Designing, implementing, and managing databases (SQL or NoSQL) to ensure data integrity and efficient retrieval. Using version control systems (Git) to manage code changes and collaborate with other developers. Implementing security best practices to protect applications from vulnerabilities and threats. Automating development processes and managing CI/CD pipelines to streamline deployment and release cycles. Working with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality software.`,
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
      salary: "Industry standard",
      experience: "Minimum 3 years",
      location: "Chennai, Madurai, Coimbatore",
    },
  },
  {
    title: "React Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular...",
    details: null,
  },
  {
    title: "Flutter Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular...",
    details: null,
  },
  {
    title: "Php Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular...",
    details: null,
  },
  {
    title: "Mern Stack Developer",
    tags: ["Mid-Level", "Chennai", "Madurai"],
    shortDesc:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular...",
    details: null,
  },
];

export default function Location() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <main className="min-h-screen bg-white p-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Panel (Job List) */}
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
                    className="text-xs bg-gray-200 px-2 py-1 rounded-md"
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

        {/* Right Panel (Job Details) */}
        <div className="border rounded-lg p-6 shadow-sm flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <h2 className="text-xl font-bold text-blue-900">
              {selectedJob.title}
            </h2>
            <div className="flex gap-8 my-2 flex-wrap">
              {selectedJob.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-200 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {selectedJob.details ? (
              <>
                <h3 className="font-semibold mt-4">Primary Responsibility:</h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {selectedJob.details.responsibility}
                </p>

                <h3 className="font-semibold mt-4">Job Specification:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                  {selectedJob.details.specification.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>

                <div className="mt-4 text-sm text-gray-700 space-y-1">
                  <p>
                    <strong>Employment Type:</strong>{" "}
                    {selectedJob.details.type}
                  </p>
                  <p>
                    <strong>Workplace Type:</strong> {selectedJob.details.mode}
                  </p>
                  <p>
                    <strong>Salary:</strong> {selectedJob.details.salary}
                  </p>
                  <p>
                    <strong>Experience Required:</strong>{" "}
                    {selectedJob.details.experience}
                  </p>
                  <p>
                    <strong>Job Location:</strong>{" "}
                    {selectedJob.details.location}
                  </p>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-semibold mt-4">Short Description:</h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {selectedJob.shortDesc}
                </p>
                <p className="mt-4 text-gray-500 italic">
                  Detailed job description will be updated soon.
                </p>
              </>
            )}
          </div>

          {/* Apply Now Button */}
          <div className="mt-6 justify-center">
            <button className="w-40 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
