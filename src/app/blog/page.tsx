import BlogPageClient from "@/components/BlogPageClient";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Insights | Ushodaya Services",
  description:
    "Explore expert perspectives, IT consulting trends, cloud strategies, agile software development, QA automation, and digital marketing guides by Ushodaya Services.",
};

export default function BlogsPage() {
  return (
    <>
      <BlogPageClient />
      <Footer />
    </>
  );
}
