"use client";

export default function Lorem() {
  const items = [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ];

  return (
    <div className="bg-gray-100 flex items-start justify-center py-12">
      <section className="max-w-4xl w-full px-6">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>


        <div className="space-y-3">
          {items.map((label, i) => (
            <button
              key={i}
              type="button"
              className="w-full flex items-center justify-between bg-white px-5 py-4 rounded-md border border-gray-200 shadow-sm hover:bg-gray-50"
            >
              <span className="text-sm md:text-base text-gray-700">{label}</span>


              <svg
                className="w-4 h-3 text-purple-600"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7 4l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
