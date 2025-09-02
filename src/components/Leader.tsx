import Image from "next/image";

export default function Leader() {
  const team = [
    {
      name: "Jane Doe",
      title: "Chief Executive Officer",
      image: "/images/5.png",
    },
    {
      name: "John Smith",
      title: "Chief Operating Officer",
      image: "/images/3.png",
    },
    {
      name: "Sarah Johnson",
      title: "Chief Financial Officer",
      image: "/images/4.png",
    },
    {
      name: "Emma Thompson",
      title: "Senior Business Consultant",
      image: "/images/1.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Meet Our Leadership Team
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Here are the leaders who&apos;d be working with you for customised, strategic
        solutions, keeping you at the peak of your business.
      </p>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {team.map((member, index) => (
          <div key={index} className="text-center group">

            <div className="relative w-full h-80 mb-4 overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       25vw"
              />
            </div>

            {/* Member Info */}
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-blue-700 italic">{member.title}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="border border-gray-700 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100 transition">
        Meet Our Team
      </button>
    </section>
  );
}
