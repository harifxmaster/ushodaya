"use client";

import { useState } from "react";

export default function Sub() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agree) {
      alert("Please agree to the privacy terms before subscribing.");
      return;
    }

    if (email.trim() === "") return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#061047] via-[#0a1c66] to-[#1850D9] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-md">
          <span>Stay Updated</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
          Sign Up for Our Newsletter
        </h2>

        {/* Subtitle */}
        <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Get the latest insights on IT strategy, digital transformation, cloud architecture, and tech trends delivered directly to your inbox.
        </p>

        {/* Success Message */}
        {submitted ? (
          <div className="p-4 rounded-xl bg-green-500/20 border border-green-400/40 text-green-200 text-sm font-semibold mb-6 animate-fade-in max-w-lg mx-auto">
            🎉 Thank you for subscribing! You&apos;re on the list.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mb-3">
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto bg-white/10 p-1.5 rounded-2xl border border-white/20 backdrop-blur-md">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your work email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 text-sm text-white placeholder-blue-200/70 bg-transparent rounded-xl focus:outline-none focus:bg-white/10 transition"
              />
              <button
                type="submit"
                className="bg-white hover:bg-blue-50 text-[#061047] font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {/* Checkbox Consent */}
            <label className="flex items-center justify-center gap-2.5 text-blue-200/90 text-xs cursor-pointer select-none max-w-md mx-auto pt-1">
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-blue-600 bg-white/20 border-white/30 focus:ring-blue-500 cursor-pointer"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span>
                I agree to receive communications in accordance with the Privacy Policy.
              </span>
            </label>
          </form>
        )}
      </div>
    </section>
  );
}
