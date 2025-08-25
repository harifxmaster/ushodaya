export default function VisionSection() {
  const stats = [
    { value: '20+', label: 'Years of Experience' },
    { value: '100+', label: 'Successful Projects' },
    { value: '80%', label: 'Client Retention Rate' },
    { value: '50+', label: 'Industries Served' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-12 rounded-lg px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="mt-2 text-sm md:text-base font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
