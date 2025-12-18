import Image from "next/image";

export const metadata = {
  title: "Smarter Websites with Digital Marketing & Strong Security",
  description:
    "Discover why combining digital marketing with web development and security from day one helps your website rank higher, perform faster, and stay protected.",
};

export default function DigitalMarketingSEOPage() {
  return (
    <main className="w-full bg-white text-gray-800">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full h-[420px] md:h-[520px]">
        <Image
          src="/images/smart.png" // place image in public/images
          alt="Digital Marketing SEO and Website Security"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Combining Digital Marketing & Web Development
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200">
              Why Your New Website Needs SEO & Security from Day One
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">

        {/* INTRO */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            The investment in a company’s online presence has changed significantly over the last decade.
            A website is no longer just a few pages on the internet. Today, it acts as a central hub for
            brand exposure, traffic generation, revenue growth, and customer trust.
          </p>

          <p className="text-lg leading-relaxed">
            There are two essentials every business must integrate into their website from day one to stay
            competitive long-term: <strong>Search Engine Optimisation (SEO)</strong> and
            <strong> website security</strong>.
          </p>
        </div>

        {/* WT SOFTECH EXPERIENCE */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Through our work at <strong>WT Softech</strong>, we’ve seen many businesses struggle online
            because SEO was treated as an afterthought and security was implemented only after a cyber threat.
          </p>

          <p className="text-lg leading-relaxed">
            The way a website looks, performs, ranks, and stays secure is determined during the
            <strong> initial development phase</strong>.
          </p>
        </div>

        {/* WHY TOGETHER */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why Marketing and Development Must Work Together
          </h2>

          <p className="text-lg leading-relaxed">
            Traditionally, companies built websites first and hired marketers later.
            In 2025, this approach is outdated and expensive.
          </p>

          <p className="text-lg leading-relaxed">
            Your website’s structure, code quality, security, mobile performance, and speed all directly
            impact visibility and user experience.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Search-friendly structure</li>
            <li>Fast and high-performing pages</li>
            <li>Strong protection against cyber threats</li>
            <li>Conversion-focused layouts</li>
            <li>Consistent branding across channels</li>
          </ul>
        </div>

        {/* SEO STARTS EARLY */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            SEO Begins at the Development Stage – Not After Launch
          </h2>

          <p className="text-lg leading-relaxed">
            SEO does not begin after a website goes live. By then, many structural mistakes are already
            locked into the code.
          </p>
        </div>

        {/* SITE ARCHITECTURE */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Site Architecture Impacts Crawling & Ranking
          </h3>

          <p className="text-lg leading-relaxed">
            Search engines rely on clean structure and navigation to understand your website.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Clean URL structures</li>
            <li>Simple and logical navigation</li>
            <li>Clear site hierarchy</li>
            <li>Internal linking pathways</li>
            <li>Proper sitemap generation</li>
          </ul>
        </div>

        {/* SPEED */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Website Speed Affects Your Google Ranking
          </h3>

          <p className="text-lg leading-relaxed">
            Slow websites lose rankings and conversions. Performance optimisation must be built-in.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Minified CSS and JavaScript</li>
            <li>Optimised and lightweight images</li>
            <li>CDN integration</li>
            <li>Browser caching</li>
            <li>Optimised hosting environment</li>
          </ul>
        </div>

        {/* MOBILE FIRST */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Mobile-First Website Design Is a Ranking Factor
          </h3>

          <p className="text-lg leading-relaxed">
            Google prioritises mobile-first indexing. Your website must perform flawlessly on mobile.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Fast mobile load times</li>
            <li>Touch-friendly navigation</li>
            <li>Responsive layouts and scalable fonts</li>
          </ul>
        </div>

        {/* TECHNICAL SEO */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Technical SEO Must Be Embedded Early
          </h3>

          <p className="text-lg leading-relaxed">
            Developers should integrate technical SEO foundations from day one.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Schema markup</li>
            <li>Canonical tags</li>
            <li>Meta tag placeholders</li>
            <li>Optimised heading structure</li>
            <li>Robots.txt configuration</li>
          </ul>

          <p className="text-lg leading-relaxed">
            With this groundwork in place, digital marketing teams can start ranking efforts immediately
            after launch.
          </p>
        </div>

      </section>
    </main>
  );
}
