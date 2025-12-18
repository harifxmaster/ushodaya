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
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Contact() {
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

  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Form Section */}
        <motion.div variants={fadeInUp} suppressHydrationWarning>
          <motion.h2
            className="text-3xl font-bold text-blue-900 mb-4"
            variants={fadeInUp}
          >
            Let’s Get In Touch
          </motion.h2>
          <motion.p className="text-gray-600 mb-8" variants={fadeInUp}>
            Contact us and let us know how we can add value to your business.
          </motion.p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <motion.div
              variants={fadeInUp}
              suppressHydrationWarning
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <label className="block mb-2 text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-2 border-blue-900 rounded-lg p-3 text-gray-900 placeholder-gray-600 md:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                placeholder="Enter your name"
                title="Name"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              suppressHydrationWarning
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <label className="block mb-2 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-2 border-blue-900 rounded-lg p-3 text-gray-900 placeholder-gray-600 md:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                placeholder="Enter your email"
                title="Email"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              suppressHydrationWarning
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <label className="block mb-2 text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border-2 border-blue-900 rounded-lg p-3 text-gray-900 placeholder-gray-600 md:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                placeholder="Enter your message"
                title="Message"
                rows={5}
              ></textarea>
            </motion.div>

            <motion.div variants={fadeInUp} suppressHydrationWarning>
              <motion.button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold px-10 py-3 rounded-xl hover:opacity-90 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                {loading ? "Submitting..." : "Submit"}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Image & Contact Info Section */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          variants={slideFromRight}
          suppressHydrationWarning
        >
          <motion.div
            className="rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
          >
            <Image
              src="/images/imagee.png"
              alt="Contact"
              width={500}
              height={400}
              className="w-full max-w-md h-auto"
            />
          </motion.div>

          <motion.div
            className="mt-8 space-y-4 text-gray-700"
            variants={containerVariants}
          >
            <motion.p className="flex items-start gap-3" variants={fadeInUp}>
              <span className="text-blue-600 text-lg">📍</span>
              Ratnam Chambers, H.No. 1-62/172, Plot No.172, 1st Floor, Phase II,
              Kavuri Hills, Madhapur, Hyderabad 500033, Telangana
            </motion.p>

            <motion.p className="flex items-center gap-3" variants={fadeInUp}>
              <span className="text-blue-600 text-lg">📞</span>
              <Link
                href="tel:+9193440403030"
                className="hover:text-blue-600 transition-colors"
              >

              </Link>
            </motion.p>

            <motion.p className="flex items-center gap-3" variants={fadeInUp}>
              <span className="text-blue-600 text-lg">✉️</span>
              <Link
                href="mailto:hr@wtsoftech.com"
                className="hover:text-blue-600 transition-colors"
              >
                hr@wtsoftech.com
              </Link>
            </motion.p>

            <motion.div className="pt-2" variants={fadeInUp}>
              <Link
                href="https://www.google.com/maps/dir/?api=1&destination=Ratnam+Chambers,+Kavuri+Hills,+Madhapur,+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                🧭 Get Directions
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Google Map Section */}
      <motion.div
        className="mt-20 max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
        suppressHydrationWarning
      >
        <div className="relative w-full h-[450px]">
          <iframe
            title="Company Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.302089139918!2d78.395620075!3d17.437410071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b3a93b2a8f%3A0xa90e0c3b262a9c8e!2sRatnam%20Chambers%2C%20H.No.%201-62%2F172%2C%20Plot%20No.172%2C%201st%20Floor%2C%20Phase%20II%2C%20Kavuri%20Hills%2C%20Madhapur%2C%20Hyderabad%20500033%2C%20Telangana!5e0!3m2!1sen!2sin!4v1730304500000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0 brightness-75 hover:brightness-100 transition-all duration-500"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlay Marker */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg animate-bounce">
              📍 WTSoftech Pvt. Ltd.
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none"></div>

          {/* Address Tag */}
          <motion.div
            className="absolute bottom-6 left-6 bg-white/85 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          >
            <h3 className="text-lg font-semibold text-blue-900">
              📍 WTSoftech Pvt. Ltd.
            </h3>
            <p className="text-gray-700 text-sm">
              Ratnam Chambers, H.No. 1-62/172, Plot No.172, 1st Floor, Phase II,
              Kavuri Hills, Madhapur, Hyderabad 500033, Telangana
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
