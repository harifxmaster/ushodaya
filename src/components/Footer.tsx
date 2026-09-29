"use client";

import Image from "next/image";
import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Logo & Address */}
        <div>
          <div className="mb-4 flex justify-center md:justify-start">
            <Image
              src="/images/ushodaya-logo-new.png"
              alt="Ushodaya Services Logo"
              width={240}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Social Icons (Optional) */}
          {/*
          <p className="font-semibold mb-3 text-blue-500">Follow Us</p>
          <div className="flex justify-center md:justify-start gap-4 mb-6 text-xl">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition">
              <FaXTwitter />
            </a>
          </div>
          */}

          <p className="text-gray-700 text-sm font-semibold leading-relaxed max-w-sm mx-auto md:mx-0">
            Registered address: 2nd Floor, Aikya Vihar, State, Kavuri Hills Phase 2 Rd, Doctor&apos;s Colony, Madhapur, Hyderabad, Telangana 500033
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-3">Company</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-blue-600 transition">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-3">Support</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
            </li>
            <li>
              <Link href="/Faqs" className="hover:text-blue-600 transition">FAQs</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">Help Center</Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-600 transition">Terms and Conditions</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Gradient Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-center py-4 text-white text-sm">
        © 2026 &quot;Ushodaya is a brand owned and operated by Ushodaya Services India Pvt Ltd.&quot; All rights reserved.
      </div>
    </footer>
  );
}
