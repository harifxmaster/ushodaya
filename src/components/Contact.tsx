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
        <motion.div variants={fadeInUp}>
          <motion.h2
            className="text-3xl font-bold text-blue-900 mb-4"
            variants={fadeInUp}
          >
            Let’s Get In Touch
          </motion.h2>
          <motion.p className="text-gray-600 mb-8" variants={fadeInUp}>
            Contact us and let us know how we can add value to your business.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            variants={fadeInUp}
          >
            <motion.div
              variants={fadeInUp}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <label className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-2 border-blue-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                placeholder="Enter your name"
                title="Name"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-2 border-blue-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                placeholder="Enter your email"
                title="Email"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border-2 border-blue-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                placeholder="Enter your message"
                title="Message"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold px-10 py-3 rounded-xl hover:opacity-90 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Image & Contact Info Section */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          variants={slideFromRight}
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
              Plot No.172, First Floor, Kavuri Hills (Phase II), Madhapur,
              Hyderabad, 500081
            </motion.p>

            <motion.p className="flex items-center gap-3" variants={fadeInUp}>
              <span className="text-blue-600 text-lg">📞</span>
              <Link
                href="tel:+203440403030"
                className="hover:text-blue-600 transition-colors"
              >
                {/* +20-34 4040 3030 */}
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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
