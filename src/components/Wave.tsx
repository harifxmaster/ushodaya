 import Image from "next/image";

export default function Wave() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-40">
        {/* Decorative left wave */}
        <div className="absolute left-50 top-52">
          <Image src="/wave.png" alt="wave" width={90} height={70} />
        </div>

        {/* Decorative right wave */}
        <div className="absolute right-50 top-52">
          <Image src="/wave.png" alt="wave" width={90} height={70} />
        </div>

        <h2 className="text-lg text-blue-900 font-medium">Home/Services</h2>
        <h1 className="text-5xl font-extrabold text-gray-900 mt-3">Services</h1>
        <p className="text-gray-500 max-w-xl mt-8">
          We will help a client&apos;s problems to develop the products they
          have with high quality Change the appearance.
        </p>
      </section>
    </main>
  );
}
