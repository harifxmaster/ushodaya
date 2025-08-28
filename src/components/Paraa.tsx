"use client";

import Image from "next/image";
import { FaPinterestP } from "react-icons/fa";
import { FiZoomIn } from "react-icons/fi";

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Tincidunt veni tellus orci aenean consectetuer ?
      </h1>

      {/* First paragraph */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque
        vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus
        mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed
        enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget
        venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.
      </p>

      {/* Image Section */}
      <div className="relative mb-3">
        <Image
          src="/images/27.png" // Replace with your image path
          alt="Beautiful house by lake"
          width={800}
          height={500}
          className="rounded-md object-cover"
        />
        {/* Pinterest Icon */}
        <button className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          <FaPinterestP className="text-gray-700 text-lg" />
        </button>

        <button className="absolute top-3 right-18 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          <FiZoomIn className="text-gray-700 text-lg" />
        </button>
      </div>

      <p className="text-gray-500 italic text-sm mb-6">
        Ut pede leo libero cum ridiculus
      </p>


      <p className="text-gray-700 leading-relaxed">
        Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque
        vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus
        mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed
        enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget
        venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.
      </p>
    </div>
  );
}
