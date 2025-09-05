import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "WT SOFTECH - Leading IT Services, Digital Marketing & Consulting Solutions",
    template: "%s | WT SOFTECH",
  },
  description:
    "WT Softech is a leading full-service digital marketing and IT solutions company in Hyderabad. We provide data-backed growth strategies, secure IT foundations, software development, consulting, and digital marketing services for businesses of all scales.",

  keywords: [
    "IT services Hyderabad",
    "digital marketing company",
    "software development",
    "IT consulting services",
    "web development Hyderabad",
    "mobile app development",
    "cloud computing solutions",
    "cybersecurity services",
    "data analytics",
    "IT infrastructure",
    "software testing",
    "product development",
    "staffing solutions",
    "enterprise solutions",
    "digital transformation",
    "business automation",
    "custom software development",
    "e-commerce development",
    "SEO services",
    "social media marketing",
    "PPC advertising",
    "content marketing",
    "brand development",
    "UI/UX design",
    "database management",
    "system integration",
    "IT support services",
    "technical consulting",
    "business intelligence",
    "CRM solutions",
    "ERP development",
  ],

  authors: [{ name: "WT Softech", url: "https://wt-softtech.vercel.app" }],
  creator: "WT Softech",
  publisher: "WT Softech",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://wt-softtech.vercel.app"),

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      en: "/en",
    },
  },

  openGraph: {
    title: "WT SOFTECH - Leading IT Services & Digital Marketing Solutions",
    description:
      "Transform your business with our comprehensive IT services, digital marketing strategies, and consulting solutions. Data-backed growth for businesses of all scales in Hyderabad and beyond.",
    url: "https://wt-softtech.vercel.app",
    siteName: "WT Softech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WT Softech - IT Services & Digital Marketing Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WT SOFTECH - Leading IT Services & Digital Marketing Solutions",
    description:
      "Transform your business with our comprehensive IT services, digital marketing strategies, and consulting solutions. Data-backed growth for all business scales.",
    creator: "@wtsoftech",
    site: "@wtsoftech",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  applicationName: "WT Softech",
  generator: "Next.js",

  abstract:
    "WT Softech provides comprehensive IT services, digital marketing, and consulting solutions with data-backed strategies and secure IT foundations for businesses.",

  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.385044;78.486671",
    ICBM: "17.385044, 78.486671",
    "business:contact_data:street_address":
      "Plot No.172, First Floor, Kavuri Hills (Phase II), Madhapur",
    "business:contact_data:locality": "Hyderabad",
    "business:contact_data:region": "Telangana",
    "business:contact_data:postal_code": "500081",
    "business:contact_data:country_name": "India",
    "business:contact_data:email": "hr@wt-softtech.vercel.app",
    "business:contact_data:phone_number": "+20-34 4040 3030",
    "business:contact_data:website": "https://wt-softtech.vercel.app",
    company: "WT Softech",
    industry: "Information Technology",
    coverage: "Worldwide",
    distribution: "Global",
    rating: "General",
    "theme-color": "#1e40af",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "WT Softech",
    "application-name": "WT Softech",
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
  },

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    title: "WT Softech",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Additional SEO and Performance Tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and Icons - Only existing files */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme and Browser Configuration */}
        <meta
          name="theme-color"
          content="#1e40af"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1e40af"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="light dark" />

        {/* Security Headers */}
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />

        {/* Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WT Softech",
              url: "https://wt-softtech.vercel.app",
              logo: "https://wt-softtech.vercel.app/og-image.png",
              description:
                "Leading full-service digital marketing and IT solutions company providing data-backed growth strategies and secure IT foundations.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Plot No.172, First Floor, Kavuri Hills (Phase II), Madhapur",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500081",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20-34 4040 3030",
                contactType: "customer service",
                email: "hr@wt-softtech.vercel.app",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/wtsoftech",
                "https://twitter.com/wtsoftech",
                "https://www.linkedin.com/company/wtsoftech",
                "https://www.instagram.com/wtsoftech",
                "https://www.youtube.com/@wtsoftech",
                "https://github.com/wtsoftech",
              ],
              foundingDate: "2020",
              numberOfEmployees: "50-100",
              slogan: "Holistic Growth for Your Business",
              knowsAbout: [
                "IT Services",
                "Digital Marketing",
                "Software Development",
                "IT Consulting",
                "Cloud Solutions",
                "Cybersecurity",
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "17.385044",
                  longitude: "78.486671",
                },
                geoRadius: "50000",
              },
              areaServed: ["Hyderabad", "India", "Global"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT Services & Digital Marketing Solutions",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "IT Consulting",
                      description:
                        "Expert IT consulting services for digital transformation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing",
                      description:
                        "Data-backed digital marketing strategies for business growth",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Software Development",
                      description:
                        "Custom software development and product development services",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "WT Softech",
              image: "https://wt-softtech.vercel.app/og-image.png",
              telephone: "+20-34 4040 3030",
              email: "hr@wt-softtech.vercel.app",
              url: "https://wt-softtech.vercel.app",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Plot No.172, First Floor, Kavuri Hills (Phase II), Madhapur",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500081",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "17.385044",
                longitude: "78.486671",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
              },
              sameAs: [
                "https://www.facebook.com/wtsoftech",
                "https://twitter.com/wtsoftech",
                "https://www.linkedin.com/company/wtsoftech",
                "https://www.instagram.com/wtsoftech",
                "https://www.youtube.com/@wtsoftech",
                "https://github.com/wtsoftech",
              ],
            }),
          }}
        />
      </head>

      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Global Header (appears on all pages) */}
        <Header />

        {/* Main content wrapper */}
        <main id="main-content" role="main">
          {children}
        </main>

        {/* Structured data for breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://wt-softtech.vercel.app",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
