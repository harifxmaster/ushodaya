"use client";

import Image from "next/image";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";

export default function Shares() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-md">
      {/* Top Section */}
      <div>
        {/* Top Row with Shares */}
        <div className="flex items-center justify-start mb-6 space-x-6">
          <div className="flex flex-col text-center">
            <span className="text-xl font-bold">10K</span>
            <span className="text-gray-500 text-sm">Shares</span>
          </div>

          {/* Share Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <FaFacebookF />
              <span>Shares 636</span>
            </button>
            <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              <FaTwitter />
              <span>Shares 636</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500">
              <FaLinkedinIn />
              <span>in 636</span>
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/images/Sharesgirl.png" // Replace with your image
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-bold">Luci Avetisyan</h3>
            <p className="text-gray-600 text-sm">
              Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra
              mollis metus quam adipiscing vel nascetur condimentum felis
              sapien. Pede consequat laoreet enim sit aliquet mollis semper.
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3 right-12 mb-6">
          <a href="#" className="text-gray-700 hover:text-black">
            <FaPinterestP size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <FaGithub size={20} />
          </a>
        </div>

        {/* View Comments Button - Centered */}
        <div className="text-center">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900">
            View Comments (0)
          </button>
        </div>
      </div>
    </div>
  );
}
