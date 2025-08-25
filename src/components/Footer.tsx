"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-4 gap-6">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/Wtlogo.png" alt="WT Softech" className="w-50 h-15" />

          </div>
          <p className="font-semibold mb-3 text-blue-500">Follow Us</p>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-black hover:text-blue-600 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-blue-600 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-black hover:text-blue-600 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-black hover:text-blue-600 text-xl">
              <FaXTwitter />
            </a>
          </div>
          <p className="text-gray-700 text-sm font-semibold">
            Registered address: Plot No.172, First Floor Kavuri Hills (Phase II),
            Madhapur,Hydreabad
          </p>
        </div>


        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-3">Company</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-blue-600">User Agreement</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-3">Products</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-blue-600">Send Money to India</a></li>
            <li><a href="#" className="hover:text-blue-600">Calculator</a></li>
            <li><a href="#" className="hover:text-blue-600">How it Works</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-3">Support</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-blue-600">Help</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>
      </div>


      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-center py-4 text-white text-sm">
        © 2025 WT Softech All rights reserved.
      </div>
    </footer>
  );
}
