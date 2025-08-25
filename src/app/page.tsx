"use client";

 // optional, if you want blogs preview
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Foundation from "../components/Foundation";

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
      <Foundation />

      {/* Services Section */}
      <Services />

      {/* Partners Section */}
      <Partners />

      {/* Latest Blogs (Optional preview) */}
      {/* <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Latest Blogs
        </h2>

      </section> */}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
