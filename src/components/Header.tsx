"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

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

  // Header background & styling classes
  const headerClasses = isHomePage
    ? scrolled
      ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-md py-2 sm:py-2.5"
      : "bg-transparent border-b border-transparent shadow-none py-3.5 sm:py-4"
    : scrolled
      ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-md py-2 sm:py-2.5"
      : "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs py-2.5 sm:py-3";

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="inline-block">
            <Image
              src="/images/ushodaya-logo-new.png"
              alt="Ushodaya Services Logo"
              width={260}
              height={65}
              className={`h-11 sm:h-12 md:h-13 lg:h-14 w-auto object-contain origin-left transition-transform duration-300 ${scrolled ? 'scale-[0.95]' : 'scale-100'}`}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation (Centered) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="text-[#101936] font-semibold hover:text-blue-600 transition-colors text-sm uppercase tracking-wide"
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer inline-block"
            >
              Get a Quote
            </Link>
          </div>

          <button 
            className="md:hidden text-[#101936] focus:outline-none p-1.5" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-center gap-4 py-6 px-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[#101936] font-semibold hover:text-blue-600 text-base w-full text-center border-b border-gray-100 pb-2"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold mt-2 shadow-md w-full text-center"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
