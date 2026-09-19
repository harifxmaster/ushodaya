"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blog" },
    { name: "Careers", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm py-2" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/ushodaya-logo-new.png"
              alt="Ushodaya Services Logo"
              width={220}
              height={55}
              className={`object-contain origin-left transition-transform duration-300 ${scrolled ? 'scale-[0.85]' : 'scale-100'}`}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation (Centered) */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="text-[var(--foreground)] font-medium hover:text-[var(--brand)] transition-colors text-sm uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="bg-[var(--brand)] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[var(--primary)] transition-colors shadow-md hover:shadow-lg"
              style={{ backgroundColor: 'var(--brand)', color: '#fff', border: 'none' }}
            >
              Get a Quote
            </Link>
          </div>

          <button 
            className="md:hidden text-[var(--foreground)] focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[var(--border)] shadow-xl transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-center gap-6 py-8 px-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[var(--foreground)] font-medium hover:text-[var(--brand)] text-lg w-full text-center border-b border-gray-100 pb-2"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[var(--brand)] text-white px-8 py-3 rounded-full font-semibold mt-4 shadow-md w-full text-center"
              style={{ backgroundColor: 'var(--brand)', color: '#fff' }}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
