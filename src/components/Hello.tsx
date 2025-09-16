import Link from "next/link";

export default function Hello() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
      <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
        Great minds don&apos;t just think alike—they work together! Join us and turn ambition into action.
      </p>
      <Link
        href="/contact"
        className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
      >
        Ask us any Questions
      </Link>
    </section>
  );
}
