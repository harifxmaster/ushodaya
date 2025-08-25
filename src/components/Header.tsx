"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-2">
          <Image src="/images/Wtlogo.png" alt="WT Softech" className="w-50 h-15 object-contain" />
        </div>


        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About Us</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
          <Link href="/career" className="hover:text-blue-600">Careeers</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>


        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            Signup
          </button>
        </div>
      </div>
    </header>
  );
}
