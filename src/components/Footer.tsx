"use client";

import Image from "next/image";
import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo & Social */}
        <div>
          <div className="mb-4 flex justify-center md:justify-start">
            <Image
              src="/images/llogo.png"
              alt="WT Softech"
              width={180}
              height={60}
              className="object-contain"
            />
          </div>

          {/* <p className="font-semibold mb-3 text-blue-500">Follow Us</p> */}

          {/* Social Icons Section - Commented Out */}
          {/*
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
            Registered address: Plot No.172, First Floor, Kavuri Hills (Phase II), Madhapur, Hyderabad
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-3">Products</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              {/* Internal navigation using Link */}
              <Link href="/contact" className="hover:text-blue-600 transition">
                Send Money to India
              </Link>
            </li>
            <li>
              <a href="https://www.calculator.net/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                Calculator
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600 transition">How it Works</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-3">Support</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/contact" className="hover:text-blue-600 transition">Help</a></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Gradient Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-center py-4 text-white text-sm">
        © 2025 WT Softech. All rights reserved.
      </div>
    </footer>
  );
}
