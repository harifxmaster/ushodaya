"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
  },
};

const iconWrapperClass =
  "flex-shrink-0 w-14 h-14 bg-[var(--brand)]/10 text-[var(--brand)] rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:text-white";

interface ContactProps {
  isStandalone?: boolean;
}

export default function Contact({ isStandalone = false }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Something went wrong. Please try again later.");
    }
  };

  const paddingTop = isStandalone ? "pt-32 md:pt-40" : "pt-12 md:pt-16";

  return (
    <section id="contact" className={`${paddingTop} pb-20 md:pb-32 px-6 bg-white min-h-screen`}>
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--primary)] mb-6 tracking-tight">
          Let&apos;s Build Something <span className="text-[var(--brand)]">Amazing</span>
        </h2>
        <p className="text-[var(--foreground)] text-lg leading-relaxed">
          Whether you have a specific project in mind or just want to explore how our IT and Digital Marketing solutions can add value to your business, we’re here to help.
        </p>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Contact Information & Details */}
        <motion.div className="flex flex-col space-y-10" variants={fadeInUp}>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5 group">
                <div className={iconWrapperClass}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[var(--primary)] font-bold text-lg mb-1">Office Location</h4>
                  <p className="text-[var(--foreground)] leading-relaxed">
                    2nd Floor, Aikya Vihar, State, Kavuri Hills Phase 2 Rd, <br />
                    Doctor&apos;s Colony, Madhapur, Hyderabad, <br /> Telangana 500033
                  </p>
                  <Link
                    href="https://www.google.com/maps/dir/?api=1&destination=Aikya+Vihar,+Kavuri+Hills,+Madhapur,+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[var(--brand)] font-semibold mt-3 hover:underline"
                  >
                    Get Directions &rarr;
                  </Link>
                </div>
              </div>

              <div className="w-full h-px bg-[var(--border)] opacity-60"></div>

              {/* Email */}
              <div className="flex items-center gap-5 group">
                <div className={iconWrapperClass}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[var(--primary)] font-bold text-lg mb-1">Email Us</h4>
                  <Link
                    href="mailto:hr@ushodayaservices.com"
                    className="text-[var(--foreground)] hover:text-[var(--brand)] transition-colors"
                  >
                    hr@ushodayaservices.com
                  </Link>
                </div>
              </div>

              <div className="w-full h-px bg-[var(--border)] opacity-60"></div>

              {/* Phone */}
              <div className="flex items-center gap-5 group">
                <div className={iconWrapperClass}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[var(--primary)] font-bold text-lg mb-1">Call Us</h4>
                  <Link
                    href="tel:+9193440403030"
                    className="text-[var(--foreground)] hover:text-[var(--brand)] transition-colors"
                  >
                    +91 93440 403030
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div variants={slideFromRight} suppressHydrationWarning>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-[var(--brand)]/5 border border-[var(--border)]">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[var(--primary)] font-semibold text-sm">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-[var(--border)] shadow-sm rounded-xl p-4 text-[var(--primary)] placeholder-gray-400 focus:outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)] transition-all"
                    required
                    placeholder="John Doe"
                    title="Name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[var(--primary)] font-semibold text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-[var(--border)] shadow-sm rounded-xl p-4 text-[var(--primary)] placeholder-gray-400 focus:outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)] transition-all"
                    required
                    placeholder="john@example.com"
                    title="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[var(--primary)] font-semibold text-sm">How can we help?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-[var(--border)] shadow-sm rounded-xl p-4 text-[var(--primary)] placeholder-gray-400 focus:outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)] transition-all resize-none"
                  required
                  placeholder="Tell us about your project or inquiry..."
                  title="Message"
                  rows={5}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="mt-4 bg-[var(--brand)] text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 w-full sm:w-auto self-start"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      {/* Google Map Section */}
      <motion.div
        className="mt-24 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] relative"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="relative w-full h-[500px]">
          <iframe
            title="Company Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.302089139918!2d78.395620075!3d17.437410071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b3a93b2a8f%3A0xa90e0c3b262a9c8e!2sRatnam%20Chambers%2C%20H.No.%201-62%2F172%2C%20Plot%20No.172%2C%201st%20Floor%2C%20Phase%20II%2C%20Kavuri%20Hills%2C%20Madhapur%2C%20Hyderabad%20500033%2C%20Telangana!5e0!3m2!1sen!2sin!4v1730304500000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0 filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Address Card on Map */}
          <motion.div
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 max-w-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[var(--brand)] text-white rounded-full flex items-center justify-center shadow-md animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)]">
                Ushodaya Services
              </h3>
            </div>
            <p className="text-[var(--foreground)] text-sm leading-relaxed mb-4">
              2nd Floor, Aikya Vihar, State, Kavuri Hills Phase 2 Rd, Doctor&apos;s Colony, Madhapur, Hyderabad, Telangana 500033
            </p>
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=Aikya+Vihar,+Kavuri+Hills,+Madhapur,+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand)] text-sm font-bold hover:underline"
            >
              Open in Google Maps &rarr;
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
