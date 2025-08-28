"use client";

import Image from "next/image";
import { FaEnvelope, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

export default function Table() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8">

        {/* Left Sidebar */}
        <aside className="md:w-1/6 flex flex-col items-center space-y-6">
          <div className="text-center">
            <p className="text-2xl font-bold">966</p>
            <p className="text-gray-500 text-sm">Shares</p>
          </div>

          <div className="flex flex-col space-y-4">
            {/* Facebook */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <FaFacebookF className="text-blue-600" />
              </div>
              <span className="text-gray-600 text-sm">528</span>
            </div>

            {/* Twitter */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <FaTwitter className="text-sky-500" />
            </div>

            {/* Pinterest */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <FaPinterestP className="text-red-600" />
              </div>
              <span className="text-gray-600 text-sm">528</span>
            </div>

            {/* Gmail */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <FaEnvelope className="text-yellow-500" />
            </div>
          </div>
        </aside>

        {/* Middle Content - Table of Contents */}
        <main className="md:w-2/3 border-t border-b py-4">
          <h3 className="text-blue-700 font-bold tracking-wider uppercase text-sm mb-4">
            Table of Contents
          </h3>

          <ol className="space-y-4 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 font-medium">
                1
              </span>
              <span className="text-blue-800 font-medium">
                Nam condimentum varius justo
              </span>
            </li>

            <li className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 font-medium">
                  2
                </span>
                <span className="text-blue-800 font-medium">
                  Faucibus nullam luctus felis pretium donec
                </span>
              </div>
              <ul className="ml-9 list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Tincidunt veni tellus orci aenean consectetur</li>
                <li>Eu ridiculus fringilla</li>
              </ul>
            </li>
          </ol>
        </main>

        {/* Right Sidebar - Author Box */}
        <aside className="md:w-1/4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center md:text-left">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Author
            </h4>
            <div className="flex flex-col items-center md:items-start gap-3">
              <Image
                src="/images/Author.png" // replace with real path
                alt="Author"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">Luci Avetisyan</p>
                <p className="text-gray-500 text-sm mt-1">
                  Luci vitae dapibus rhoncus. Eget etiam aenean nisi montes felis
                  pretium donec veni. Pede...
                </p>
              </div>
              <div className="flex gap-3 mt-3 text-gray-500">
                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />
                <FaEnvelope />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
