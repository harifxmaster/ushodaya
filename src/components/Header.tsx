"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1">

        <div className="flex items-center gap-2">
          <Image
            src="/images/llogo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-50 h-auto"
          />

        </div>


        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About Us
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/blogs" className="hover:text-blue-600">
            Blogs
          </Link>
          <Link href="/career" className="hover:text-blue-600">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>


        <div className="hidden md:flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            Signup
          </button>
        </div>


        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              About Us
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Services
            </Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Blogs
            </Link>
            <Link href="/career" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Careers
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Contact
            </Link>
            <div className="flex flex-col gap-3 w-full px-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">
                Login
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 w-full">
                Signup
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
