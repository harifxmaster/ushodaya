"use client";

import Image from "next/image";

export default function Blogpic() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-9xl mx-auto px-6 py-12 lg:py-16 relative z-20">
        <div className="grid lg:grid-cols-2 items-start gap-8">
          {/* Left Content */}
          <div className="z-20">
            {/* Heading + Button */}
            <div className="flex items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
                Insights, News & Articles by WT Softech
              </h1>
              <a
                href="#"
                className="ml-auto inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/30 hover:bg-blue-700"
              >
                EXPLORE MORE
              </a>
            </div>

            {/* Search Bar */}
            <div className="mt-6">
              <div className="relative max-w-xl">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="Search article"
                  className="h-12 w-full rounded-full border border-gray-200 bg-gray-50 pl-12 pr-28 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                />

                <button className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 items-center justify-center rounded-full bg-blue-600 px-4 text-sm font-semibold text-white shadow hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>

            {/* Dropdown + Share */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <select className="h-10 px-4 rounded-full border border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500">
                  <option>Search any category</option>
                  <option>All</option>
                  <option>Technology</option>
                  <option>Design</option>
                  <option>Business</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Share:</span>

                {/* Social Icons */}
                <a href="#" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-blue-600">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.1 5.53 21.24 10.3 22v-7h-2.7v-2.93h2.7v-2.24c0-2.66 1.58-4.12 4-4.12 1.16 0 2.37.21 2.37.21v2.6h-1.34c-1.32 0-1.73.82-1.73 1.66v1.89h2.94l-.47 2.93h-2.47V22c4.77-.76 8.44-4.9 8.44-9.93Z" />
                  </svg>
                </a>

                <a href="#" aria-label="YouTube" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-red-600">
                    <path d="M23 7.5s-.23-1.63-.93-2.35c-.9-.97-1.9-.98-2.36-1.04C16.8 3.8 12 3.8 12 3.8h0s-4.8 0-7.71.31c-.45.06-1.46.07-2.36 1.04C1.23 5.87 1 7.5 1 7.5S.77 9.36.77 11.21v1.58C.77 14.64 1 16.5 1 16.5s.23 1.63.93 2.35c.9.97 2.08.94 2.61 1.05C6.2 20.2 12 20.2 12 20.2s4.8 0 7.71-.31c.45-.06 1.46-.07 2.36-1.04.7-.72.93-2.35.93-2.35s.23-1.86.23-3.71v-1.58C23.23 9.36 23 7.5 23 7.5ZM9.75 14.5v-6l6 3-6 3Z" />
                  </svg>
                </a>

                <a href="#" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-pink-600">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.92 4.92 0 0 1 1.774 1.153 4.92 4.92 0 0 1 1.153 1.774c.163.458.349 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.92 4.92 0 0 1-1.153 1.774 4.92 4.92 0 0 1-1.774 1.153c-.458.163-1.258.349-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a4.92 4.92 0 0 1-1.774-1.153 4.92 4.92 0 0 1-1.153-1.774c-.163-.458-.349-1.258-.403-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428a4.92 4.92 0 0 1 1.153-1.774 4.92 4.92 0 0 1 1.774-1.153c.458-.163 1.258-.349 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0 3.684a6.153 6.153 0 1 0 0 12.306 6.153 6.153 0 0 0 0-12.306zm0 10.153a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>

                <a href="#" aria-label="X" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gray-900">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.031-.928-.088.627 1.956 2.444 3.377 4.6 3.418-1.68 1.318-3.809 2.104-6.102 2.104-.397 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21-.006-.423-.016-.635.962-.694 1.8-1.562 2.46-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Girl Image */}
          <div className="relative hidden lg:block z-30">
            <Image
              src="/hero/girl.png"
              alt="Girl pointing"
              width={420}
              height={700}
              priority
              className="object-contain relative -bottom-12"
            />
          </div>
        </div>
      </div>

      {/* Background City Image */}
      <div className="absolute inset-x-0 bottom-0 h-56 lg:h-72 -z-10">
        <Image src="/images/Build.png" alt="City" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-700/60 to-transparent" />
      </div>
    </section>
  );
}
