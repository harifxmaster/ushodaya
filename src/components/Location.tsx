"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

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

// Jobs Array
const jobs: Job[] = [
  {
    title: "Sales Executive",
    tags: ["2-5 Years", "Hyderabad"],
    shortDesc:
      "Responsible for driving sales, building client relationships, and achieving revenue targets...",
    details: {
      responsibility:
        "Identify and generate new business opportunities by reaching out to potential clients. Build and maintain strong client relationships. Understand customer needs and present appropriate solutions. Meet and exceed sales targets. Prepare sales reports and collaborate with internal teams to ensure customer satisfaction.",
      specification: [
        "Proven experience in sales (2–5 years).",
        "Strong communication, negotiation, and interpersonal skills.",
        "Ability to build and maintain client relationships.",
        "Goal-oriented and self-motivated to achieve targets.",
        "Knowledge of CRM tools and sales reporting.",
        "Willingness to travel within assigned territory.",
      ],
      type: "Full-time",
      mode: "On-site",
      salary: "Competitive + Incentives",
      experience: "2–5 years",
      location: "Hyderabad",
    },
  },
  {
    title: "Front End Developer",
    tags: ["2-5 Years", "Hyderabad"],
    shortDesc:
      "Responsible for building responsive and user-friendly web interfaces using modern frontend technologies...",
    details: {
      responsibility:
        "Develop and maintain responsive web interfaces using HTML, CSS, and JavaScript frameworks. Collaborate with designers and backend developers to deliver high-quality, user-friendly applications. Optimize applications for maximum performance and scalability. Ensure cross-browser compatibility and adherence to accessibility standards. Participate in code reviews and follow best practices for clean, maintainable code.",
      specification: [
        "2–5 years of proven experience in frontend development.",
        "Strong proficiency in HTML, CSS, and JavaScript (ES6+).",
        "Hands-on experience with React.js (preferred) or other modern frameworks like Angular/Vue.",
        "Experience with responsive design and CSS frameworks (Tailwind, Bootstrap).",
        "Familiarity with API integration (REST/GraphQL).",
        "Knowledge of version control systems (Git/GitHub).",
        "Understanding of performance optimization and accessibility best practices.",
        "Strong problem-solving skills and teamwork abilities.",
      ],
      type: "Full-time",
      mode: "On-site",
      salary: "Competitive / Industry Standard",
      experience: "2–5 years",
      location: "Hyderabad",
    },
  },
  {
    title: "Technical SEO Manager",
    tags: ["10-15 Years", "Hyderabad"],
    shortDesc:
      "Lead and manage all aspects of technical SEO, ensuring websites are optimized for search engines, speed, and scalability...",
    details: {
      responsibility:
        "Develop and implement advanced technical SEO strategies to maximize organic search visibility. Conduct technical audits of websites to identify crawl issues, indexing problems, site speed issues, and schema markup optimization. Collaborate with development teams to ensure SEO best practices are implemented in new code and site architecture. Monitor and analyze site performance using tools such as Google Search Console, Screaming Frog, Ahrefs, and SEMrush. Stay updated with algorithm changes and SEO trends, providing actionable insights to stakeholders. Lead and mentor SEO specialists and collaborate with cross-functional teams (Content, Product, Engineering) to achieve KPIs.",
      specification: [
        "10–15 years of proven experience in Technical SEO with leadership responsibilities.",
        "Deep understanding of search engine algorithms, ranking factors, and site architecture best practices.",
        "Proficiency with SEO tools like Google Search Console, Ahrefs, SEMrush, Screaming Frog, and GA4.",
        "Strong knowledge of HTML, CSS, JavaScript rendering, and web technologies.",
        "Experience in managing site migrations, canonicalization, structured data, and hreflang implementation.",
        "Hands-on expertise in page speed optimization and Core Web Vitals improvements.",
        "Ability to lead SEO audits, create roadmaps, and work with engineering teams for implementation.",
        "Excellent analytical, problem-solving, and leadership skills.",
        "Strong communication and stakeholder management abilities.",
      ],
      type: "Full-time",
      mode: "On-site",
      salary: "Competitive / Industry Standard",
      experience: "10–15 years",
      location: "Hyderabad",
    },
  },
  {
    title: "Senior QA Manager",
    tags: ["7-15 Years", "Hyderabad"],
    shortDesc:
      "Lead the Quality Assurance team to ensure software products meet the highest standards of reliability, performance, and user satisfaction...",
    details: {
      responsibility:
        "Define and drive the overall QA strategy, ensuring alignment with product and business goals. Lead and mentor a team of QA engineers, providing technical guidance and fostering career growth. Establish best practices for test automation, performance testing, and CI/CD integration. Collaborate with product managers, developers, and stakeholders to ensure quality is embedded throughout the development lifecycle. Conduct risk analysis and implement mitigation strategies to reduce defects in production. Ensure compliance with industry standards and regulatory requirements. Continuously improve QA processes, tools, and metrics for efficiency and scalability.",
      specification: [
        "7–15 years of experience in Quality Assurance, with at least 3+ years in a leadership/management role.",
        "Strong understanding of QA methodologies, tools, and processes (manual and automation).",
        "Experience with test automation frameworks (Selenium, Cypress, Playwright, or similar).",
        "Knowledge of CI/CD pipelines, version control (Git), and DevOps practices.",
        "Experience with performance and load testing tools (JMeter, Locust, etc.).",
        "Ability to manage multiple projects, prioritize tasks, and ensure on-time delivery.",
        "Strong problem-solving skills with attention to detail and analytical thinking.",
        "Excellent leadership, communication, and stakeholder management skills.",
        "Experience in Agile/Scrum development environments.",
        "Knowledge of cloud platforms (AWS, Azure, GCP) is a plus.",
      ],
      type: "Full-time",
      mode: "On-site",
      salary: "Competitive / Industry Standard",
      experience: "7–15 years",
      location: "Hyderabad",
    },
  },
];

export default function Location() {
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    resume: File | null;
    location: string;
    experience: string;
  }>({
    name: "",
    email: "",
    resume: null,
    location: "",
    experience: "",
  });

  // Debug: Log Supabase URL on component mount
  useEffect(() => {
    console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log(
      "Supabase Client URL:",
      (supabase as unknown as { supabaseUrl?: string }).supabaseUrl
    );
  }, []);

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

      // Validate file size (5MB max)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (formData.resume.size > maxSize) {
        alert("Resume file size should be less than 5MB.");
        return;
      }

      const fileExt = formData.resume.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`; // Changed: removed "resumes/" prefix since bucket is already "resumes"

      console.log("Uploading resume to bucket 'resumes' with path:", filePath);

      // Convert File to ArrayBuffer for better cross-environment compatibility
      const arrayBuffer = await formData.resume.arrayBuffer();

      // Try to upload the file
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, arrayBuffer, {
          cacheControl: "3600",
          upsert: false,
          contentType: formData.resume.type,
        });

      if (uploadError) {
        console.error("Upload error details:", uploadError);
        console.error("Upload error name:", uploadError.name);
        console.error("Upload error message:", uploadError.message);
        console.error("Upload error status:", (uploadError as { statusCode?: number }).statusCode);
        console.error("Full error object:", JSON.stringify(uploadError, null, 2));
        throw new Error(`Resume upload failed: ${uploadError.message || 'Unknown error'}`);
      }

      console.log("Upload successful:", uploadData);

      const { data: publicUrlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      const resumeUrl = publicUrlData.publicUrl;
      console.log("Resume URL:", resumeUrl);

      const applicationData = {
        name: formData.name,
        email: formData.email,
        location: formData.location,
        experience: formData.experience,
        job_title: selectedJob.title,
        resume_url: resumeUrl,
      };

      console.log("Inserting application:", applicationData);

      const { data: insertData, error: insertError } = await supabase
        .from("applications")
        .insert([applicationData])
        .select();

      if (insertError) {
        console.error("Insert error details:", insertError);
        throw new Error(`Database insert failed: ${insertError.message}`);
      }

      console.log("Application inserted successfully:", insertData);
      alert(`✅ Application submitted successfully for ${selectedJob.title}!`);

      setShowModal(false);
      setFormData({
        name: "",
        email: "",
        resume: null,
        location: "",
        experience: "",
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      console.error("❌ Error submitting application:", errorMessage, err);
      alert(
        `Failed to submit application: ${errorMessage}\n\nPlease check the console for more details.`
      );
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
              className={`p-4 border rounded-lg cursor-pointer shadow-sm transition ${
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
                    className="text-xs font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-md"
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
            <h2 className="text-xl font-bold text-blue-900">
              {selectedJob.title}
            </h2>
            <div className="flex gap-2 my-2 flex-wrap">
              {selectedJob.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-md"
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
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
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
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition shadow-md"
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
