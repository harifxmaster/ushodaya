import Image from "next/image";

export default function Drop() {
  return (
    <section className="w-full bg-white py-12 px-6 relative flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start">

        {/* Left Content */}
        <div className="md:w-1/2 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900">
            We <span className="underline decoration-blue-600">Recognise</span>, Realise & <br />
            Render Results That <br /> Speak Volumes
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed max-w-md">
            Our motto is simple! We let our work speak for the worth we can add to your business.
            We are quite straightforward in our dealings – understanding your needs, conducting heavy
            discussions, offering inputs, and starting work with zeal and commitment.
            We don’t promise 6x results in 30 days. We keep it real! Things take time!
            But the result is always the sweetest deal you cannot miss.
          </p>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
          {/* Images with overlap */}
          <div className="flex gap-4">
            {/* First Image */}
            <div className="w-40 h-80 rounded-2xl overflow-hidden shadow-md relative z-30">
              <Image
                src="/p1.png"
                alt="Work Desk 1"
                width={400}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Second Image (slightly down) */}
            <div className="w-40 h-80 rounded-2xl overflow-hidden shadow-md relative z-20 -mt-8">
              <Image
                src="/p2.png"
                alt="Work Desk 2"
                width={400}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Third Image (slightly up) */}
            <div className="w-40 h-80 rounded-2xl overflow-hidden shadow-md relative z-10 mt-8">
              <Image
                src="/p3.png"
                alt="Work Desk 3"
                width={400}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
