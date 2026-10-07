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
  email: string; // ✅ Added email field
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
    title: "Full Stack Developer (SEO Stack)",
    tags: ["5-6 Years", "Hyderabad", "Full Stack / SEO"],
    shortDesc:
      "Architect, develop, and optimize high-performance, scalable web platforms with strong full-stack and technical SEO expertise...",
    details: {
      responsibility:
        "Architect, develop, and maintain high-performance full-stack web applications using modern frameworks (Next.js, React, Node.js, TypeScript). Implement technical SEO best practices, server-side rendering (SSR), static site generation (SSG), dynamic sitemaps, structured schema data, and canonical tag structures. Optimize Core Web Vitals, page rendering performance, caching strategies, and CDN integration for maximum search engine indexability and user experience. Design robust RESTful and GraphQL APIs, integrate third-party services, and manage scalable databases. Collaborate with SEO managers, UI/UX designers, and product teams to turn technical strategies into high-impact code. Establish code quality, automated testing, and CI/CD deployment pipelines.",
      specification: [
        "5–6 years of hands-on full stack web development experience.",
        "Strong proficiency in JavaScript/TypeScript, React, Next.js, Node.js, and Express.",
        "Deep expertise in Technical SEO from a development perspective (SSR, metadata handling, robots.txt, schema markup, OpenGraph, crawl optimization).",
        "Proven track record of optimizing Core Web Vitals (LCP, FID/INP, CLS) and site speed.",
        "Proficiency with relational and NoSQL databases (PostgreSQL, MySQL, MongoDB).",
        "Experience with version control (Git), Docker, cloud platforms (AWS, Vercel, GCP), and CI/CD workflows.",
        "Strong analytical mindset, problem-solving skills, and ability to lead architectural decisions.",
      ],
      type: "Full-time",
      mode: "On-site / Hybrid",
      salary: "Competitive / Industry Standard",
      experience: "5–6 years",
      location: "Hyderabad",
      email: "hr@ushodayaservices.com",
    },
  },
  {
    title: "Field Sales - BharatCover",
    tags: ["2-4 Years", "Hyderabad", "Field Sales"],
    shortDesc:
      "Drive on-ground business development, merchant onboarding, and strategic partner acquisitions for BharatCover across assigned territories...",
    details: {
      responsibility:
        "Drive direct field sales, merchant acquisitions, and retail partner onboarding for BharatCover. Conduct daily on-ground visits, pitching BharatCover's comprehensive protection and insurance solutions to potential clients and channel partners. Build and nurture strong, long-lasting business relationships with retail networks, distributors, and merchants. Achieve and exceed monthly and quarterly sales targets, client acquisition quotas, and revenue benchmarks. Gather on-ground market feedback, competitor insights, and merchant requirements to share with product and operations teams. Maintain timely sales reporting, lead pipelines, and visit records in CRM tools.",
      specification: [
        "2–4 years of proven field sales / direct B2B/B2C sales experience (Fintech, Insurance, Telecom, or Retail FMCG preferred).",
        "Outstanding interpersonal, presentation, negotiation, and relationship-building skills.",
        "Highly goal-driven, self-motivated, and target-oriented work ethic.",
        "Fluency in local languages (Telugu, Hindi, English).",
        "Familiarity with CRM tools, mobile field tracking, and daily sales report mechanisms.",
        "Willingness to travel extensively within assigned territory with a valid two-wheeler and driving license.",
      ],
      type: "Full-time",
      mode: "On-site / Field",
      salary: "Competitive + Attractive Incentives",
      experience: "2–4 years",
      location: "Hyderabad",
      email: "hr@ushodayaservices.com",
    },
  },
  {
    title: "Content Writer",
    tags: ["1-3 Years", "Hyderabad", "Content & SEO"],
    shortDesc:
      "Craft engaging, SEO-optimized articles, web copy, case studies, and brand stories that resonate with audience needs and boost organic visibility...",
    details: {
      responsibility:
        "Research, write, and edit compelling, error-free content for blogs, landing pages, case studies, newsletters, and marketing collateral. Collaborate with the SEO and marketing teams to integrate target keywords, search intent, and meta descriptions naturally into copy. Write engaging scripts for video content, social media posts, and product explainers. Maintain a consistent brand voice, tone, and editorial standards across all communication channels. Conduct thorough competitive research and topic analysis to produce original, high-value industry content. Monitor content performance metrics and update existing content to maintain relevancy and search ranking.",
      specification: [
        "1–3 years of professional content writing or copywriting experience.",
        "Exceptional command of written English with impeccable grammar, syntax, and proofreading skills.",
        "Solid understanding of SEO copywriting principles, keyword placement, and search intent.",
        "Ability to simplify complex technical or business concepts into engaging, clear, and reader-friendly copy.",
        "Portfolio of published articles, blog posts, or web content showcasing versatile writing styles.",
        "Familiarity with CMS platforms (WordPress/Ghost) and SEO tools is an advantage.",
      ],
      type: "Full-time",
      mode: "On-site",
      salary: "Competitive / Industry Standard",
      experience: "1–3 years",
      location: "Hyderabad",
      email: "hr@ushodayaservices.com",
    },
  },
  {
    title: "Social Media Executive - BharatCover",
    tags: ["1-2 Years", "Hyderabad", "Social Media"],
    shortDesc:
      "Manage, create, and scale vibrant social media campaigns, visual content, and community engagement for BharatCover across all digital platforms...",
    details: {
      responsibility:
        "Plan, develop, and execute creative social media campaigns across Instagram, LinkedIn, YouTube, Facebook, and Twitter/X for BharatCover. Create engaging visual content, short-form reels, informative carousels, and stories in coordination with graphic designers and video editors. Actively engage with followers, respond to comments and DMs, and build an active online community around BharatCover. Track weekly and monthly social media KPIs (reach, engagement, conversion rates, follower growth) and prepare performance reports. Stay ahead of social media trends, viral formats, memes, and industry developments to capitalize on real-time marketing opportunities. Coordinate with the performance marketing team for paid campaign creatives and promotional boosts.",
      specification: [
        "1–2 years of experience managing social media handles for brands or agencies.",
        "Strong creative copywriting skills tailored for social media hooks and captions.",
        "Proficiency with Canva, Adobe Creative Suite, or video editing tools (CapCut/Premiere) is a strong plus.",
        "Hands-on experience with social media management and scheduling tools (Buffer, Hootsuite, Meta Business Suite).",
        "Keen eye for design, typography, brand aesthetics, and viral content formats.",
        "Passion for community engagement, brand storytelling, and data-backed content optimization.",
      ],
      type: "Full-time",
      mode: "On-site",
      salary: "Competitive / Industry Standard",
      experience: "1–2 years",
      location: "Hyderabad",
      email: "hr@ushodayaservices.com",
    },
  },
];

export default function Location() {
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0]);
  const [showModal, setShowModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
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

    if (!formData.resume) {
      alert("Please upload a resume before submitting.");
      return;
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024;
    if (formData.resume.size > maxSize) {
      alert("Resume file size should be less than 10MB.");
      return;
    }

    setIsUploading(true);

    try {
      console.log("Uploading resume to Supabase Storage...");

      const fileExt = formData.resume.name.split(".").pop() || "pdf";
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(fileName, formData.resume);

      if (uploadError) {
        throw new Error(`Failed to upload resume: ${uploadError.message}`);
      }

      const { data: publicUrlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(fileName);

      const resumeUrl = publicUrlData.publicUrl;
      console.log("Resume uploaded successfully:", resumeUrl);

      const applicationData = {
        name: formData.name,
        email: formData.email,
        location: formData.location,
        experience: formData.experience,
        job_title: selectedJob.title,
        resume_url: resumeUrl,
        // ✅ Send to the job's designated email
        to_email: selectedJob.details?.email,
      };

      console.log("Submitting application:", applicationData);

      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit application");
      }

      console.log("Application submitted successfully:", result.data);
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
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main id="open-positions" className="min-h-screen bg-white pt-10 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center scroll-mt-24">
      {/* Section Header Title */}
      <div className="max-w-4xl w-full text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061047] tracking-tight">
          Explore Open Positions
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
          Find the role that fits your ambition. Work alongside passionate engineers, designers, and strategists on high-impact projects.
        </p>
      </div>

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

        {/* Job Details Panel */}
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
                {/* Job Meta Info */}
                <div className="grid grid-cols-2 gap-3 mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Type</p>
                    <p className="text-sm font-semibold text-gray-800">{selectedJob.details.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Mode</p>
                    <p className="text-sm font-semibold text-gray-800">{selectedJob.details.mode}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Experience</p>
                    <p className="text-sm font-semibold text-gray-800">{selectedJob.details.experience}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Salary</p>
                    <p className="text-sm font-semibold text-gray-800">{selectedJob.details.salary}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Location</p>
                    <p className="text-sm font-semibold text-gray-800">{selectedJob.details.location}</p>
                  </div>

                  {/* ✅ Email field displayed here */}
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Apply via Email</p>
                    <a
                      href={`mailto:${selectedJob.details.email}`}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline break-all"
                    >
                      {selectedJob.details.email}
                    </a>
                  </div>
                </div>

                <h3 className="font-semibold mt-4">Responsibilities</h3>
                <p className="text-sm text-gray-900 mt-2 leading-relaxed">
                  {selectedJob.details.responsibility}
                </p>

                {selectedJob.details.specification.length > 0 && (
                  <>
                    <h3 className="font-semibold mt-4">Job Specifications</h3>
                    <ul className="list-disc list-inside text-sm text-gray-900 mt-2 space-y-1">
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

          {/* Apply Button */}
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

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold text-blue-900 mb-1">
              Apply for {selectedJob.title}
            </h2>

            {/* ✅ Show the job email in modal too */}
            {selectedJob.details?.email && (
              <p className="text-xs text-gray-500 mb-4">
                Applications will be sent to:{" "}
                <span className="font-semibold text-blue-600">
                  {selectedJob.details.email}
                </span>
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full !bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full !bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Upload Resume (PDF, DOC, DOCX) <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="w-full !bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-900 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Current Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Hyderabad, India"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full !bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="experience"
                  placeholder="e.g. 2 years / Fresher"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full !bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isUploading}
                className="w-full bg-blue-600 text-white py-2.5 rounded-md font-semibold hover:bg-blue-700 transition shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed text-sm mt-2"
              >
                {isUploading ? "Uploading..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}