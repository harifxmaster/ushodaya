import Image from "next/image";

export default function MeetingSection() {
  return (
    <section className="w-full bg-white flex items-center justify-center py-2 px-2">
      <div className="max-w-8xl w-full">
        <div className="rounded-2xl overflow-hidden shadow-lg -mt-80">
          <Image
            src="/sean.png" // replace with your image path
            alt="Meeting"
            width={7000}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
