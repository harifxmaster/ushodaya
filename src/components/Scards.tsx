import Image from "next/image";

export default function Scards() {
  return (
    <div className="min-h-screen px-4 py-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        <div className="flex-1 space-y-6">

          <Image
            src="/images/lap.png"
            alt="Main Workspace"
            width={800}
            height={500}
            className="rounded-lg w-full"
          />


          <h2 className="text-2xl font-bold">
            1. Design functional website fast ?
          </h2>
          <p className="text-gray-700">
            Got a groundbreaking idea? We turn napkin sketches into fully functional,
            market-ready products. From concept to code, our team builds sleek, scalable,
            and future&ndash;proof solutions&mdash;without the drama. Whether it&rsquo;s a next-gen app or
            an AI-powered platform, we bring your vision to life. You dream it, we develop it.
            Simple as that.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Image
              src="/images/t1.png"
              alt="Design 1"
              width={200}
              height={150}
              className="rounded-md w-full"
            />
            <Image
              src="/images/t2.png"
              alt="Design 2"
              width={200}
              height={150}
              className="rounded-md w-full"
            />
            <Image
              src="/images/t3.png"
              alt="Design 3"
              width={200}
              height={150}
              className="rounded-md w-full"
            />
          </div>
          <p className="text-gray-700">
            People probably wouldn&apos;t click. Create elements that are functional and
            enhance the user experience on your site.
          </p>
        </div>


        <div className="w-full lg:w-1/3 space-y-6">

          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold mb-3 border-b pb-2">Category</h3>
            <ul className="text-sm space-y-2">
              {[
                "Product Development",
                "Software Testing",
                "IT Consulting",
                "IT Services",
                "Staffing Solutions",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center px-2 py-1 rounded-md ${
                    index === 0
                      ? "bg-gradient-to-r from-blue-600 to-purple-400 text-white font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                  <span className="text-xs">{'»'}</span>
                </li>
              ))}
            </ul>
          </div>


          <div className="border rounded-lg p-4 shadow-sm text-center border-blue-500">
            <p className="italic text-sm mb-4">
              &quot;You made it so simple. My new site is so much faster & easier to work&quot;
            </p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image
                src="/images/toolg.png"
                alt="Arianna Craig"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-semibold">Arianna Craigg</span>
            </div>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-700" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
          </div>


          <div className="relative rounded-lg overflow-hidden shadow-md text-white text-center p-6">
            <Image
              src="/images/Hell.png"
              alt="Consulting Background"
              fill
              className="object-cover absolute inset-0 opacity-40"
            />
            <div className="relative z-10 space-y-4">
              <p className="font-semibold text-lg">
                Do You Need Any Consulting Service?
              </p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200 transition">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
