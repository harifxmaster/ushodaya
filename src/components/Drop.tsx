import Image from "next/image";

export default function Drop() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 relative flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">


        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug text-gray-900">
            We <span className="underline decoration-blue-600">Recognise</span>, Realise & <br />
            Render Results That <br /> Speak Volumes
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Our motto is simple! We let our work speak for the worth we can add to your business.
            We are quite straightforward in our dealings – understanding your needs, conducting heavy
            discussions, offering inputs, and starting work with zeal and commitment.
            We don’t promise 6x results in 30 days. We keep it real! Things take time!
            But the result is always the sweetest deal you cannot miss.
          </p>
        </div>


        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div className="flex flex-col sm:flex-row md:flex-row gap-4">


            <div className="w-32 sm:w-36 md:w-40 h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/p1.png"
                alt="Work Desk 1"
                width={400}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>


            <div className="w-32 sm:w-36 md:w-40 h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md sm:-mt-6 md:-mt-8">
              <Image
                src="/images/p2.png"
                alt="Work Desk 2"
                width={400}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Third Image */}
            <div className="w-32 sm:w-36 md:w-40 h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md sm:mt-6 md:mt-8">
              <Image
                src="/images/p3.png"
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
