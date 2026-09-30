import BlogPageClient from "@/components/BlogPageClient";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs & Insights | Ushodaya Services",
  description:
    "Explore expert perspectives, IT consulting trends, cloud strategies, agile software development, QA automation, and digital marketing guides by Ushodaya Services.",
};

export default function BlogsPage() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading insights...</div>}>
        <BlogPageClient />
      </Suspense>
      <Footer />
    </>
  );
}

