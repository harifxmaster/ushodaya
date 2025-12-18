
export const metadata = {
  title: "Smarter Websites with Digital Marketing & Strong Security",
  description:
    "Discover why combining digital marketing with web development and security from day one helps your website rank higher, perform faster, and stay protected.",
};

export default function SmarterWebsitesPage() {
  return (
    <main className="w-full bg-white text-gray-800">

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* INTRO */}
        <p className="text-lg leading-relaxed">
          A modern website is no longer just an online presence. It is the backbone
          of your digital strategy—driving brand visibility, traffic, trust, and
          revenue. Two essentials must be built into your website from day one:
          <strong> SEO and security</strong>.
        </p>

        {/* ================= SECURITY SECTION ================= */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Security Is a Business Necessity — Not an Optional Add-On
          </h2>

          <p className="text-lg leading-relaxed">
            Modern websites face constant threats including malware, data breaches,
            phishing attacks, DDoS attempts, and credential theft.
          </p>

          <p className="text-lg leading-relaxed">
            Launching a website without proper security puts your business at risk of:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Customer data loss</li>
            <li>Google blacklisting</li>
            <li>Website downtime</li>
            <li>Brand reputation damage</li>
            <li>Legal penalties under data protection laws</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Security must be built into your website from day one—just like SEO.
          </p>
        </div>

        {/* HTTPS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            HTTPS and SSL Are Mandatory for Trust & Rankings
          </h3>

          <p className="text-lg leading-relaxed">
            Google clearly marks non-HTTPS websites as <strong>“Not Secure”</strong>.
            SSL is no longer optional.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Improves user trust</li>
            <li>Encrypts sensitive data</li>
            <li>Boosts SEO rankings</li>
            <li>Increases conversion rates</li>
          </ul>

          <p className="text-lg leading-relaxed">
            A secure website ranks better and keeps users safe.
          </p>
        </div>

        {/* FIREWALL */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Firewalls & Malware Protection Shield Your Brand
          </h3>

          <p className="text-lg leading-relaxed">
            Essential security layers that must be integrated include:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Web Application Firewall (WAF)</li>
            <li>Real-time malware scanning</li>
            <li>Bot protection</li>
            <li>Login attempt monitoring</li>
            <li>DDoS attack prevention</li>
          </ul>

          <p className="text-lg leading-relaxed">
            These systems stop attacks before they cause damage.
          </p>
        </div>

        {/* SECURE CODE */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Secure Code Is the First Line of Defence
          </h3>

          <p className="text-lg leading-relaxed">
            Insecure development practices create long-term vulnerabilities.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Sanitised user inputs</li>
            <li>Secure API integrations</li>
            <li>Protection against SQL injection</li>
            <li>Updated libraries and dependencies</li>
          </ul>

          <p className="text-lg leading-relaxed">
            A security-first approach saves businesses from costly future repairs.
          </p>
        </div>

        {/* BACKUPS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Backups & Recovery Plans Must Be Pre-Built
          </h3>

          <p className="text-lg leading-relaxed">
            If something goes wrong, your website must be restored instantly.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Customer data</li>
            <li>Website content</li>
            <li>Transaction history</li>
            <li>Business continuity</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Security is not a one-time task—it’s an ongoing shield.
          </p>
        </div>

        {/* ================= SEO + CONVERSION ================= */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            SEO + Security Enhance User Experience & Conversions
          </h2>

          <p className="text-lg leading-relaxed">
            At <strong>WT Softech</strong>, we build websites that are secure,
            visible, fast, and conversion-focused—creating better customer journeys
            and higher revenue.
          </p>
        </div>

        {/* SPEED */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Faster Websites Convert Better
          </h3>

          <p className="text-lg leading-relaxed">
            A 1-second delay can reduce conversions by up to 20%.
            SEO-driven performance improvements directly increase revenue.
          </p>
        </div>

        {/* TRUST */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Security Builds Visitor Confidence
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>SSL-secured browsing</li>
            <li>Professional design</li>
            <li>Malware-free experience</li>
            <li>Clear privacy policies</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Trust directly drives conversions.
          </p>
        </div>

        {/* CRO */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            CRO (Conversion Rate Optimisation) Becomes Easier
          </h3>

          <p className="text-lg leading-relaxed">
            When marketing and development work together, you can optimise:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Landing pages</li>
            <li>Forms</li>
            <li>Checkout processes</li>
            <li>CTA placement</li>
            <li>Page copy</li>
            <li>Product visibility</li>
          </ul>

          <p className="text-lg leading-relaxed">
            A strong technical foundation makes CRO results faster and predictable.
          </p>
        </div>

      </section>
    </main>
  );
}
