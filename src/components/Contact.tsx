"use client";

import Image from "next/image";
import { useState } from "react";

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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Let’s Get In Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us and let us know how we can add value to your business.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-2 border-blue-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-2 border-blue-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border-2 border-blue-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold px-10 py-3 rounded-xl hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Right Side - Image + Info */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/imagee.png"
            alt="Contact"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full max-w-md h-auto"
          />
          <div className="mt-8 space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">📍</span>
              Plot No.172, First Floor, Kavuri Hills (Phase II), Madhapur,
              Hyderabad, 500081
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-600 text-lg">📞</span>
              +20-34 4040 3030
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-600 text-lg">✉️</span>
              hr@wtsoftech.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
