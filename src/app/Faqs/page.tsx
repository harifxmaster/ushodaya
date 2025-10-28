"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = ({ faqs }: { faqs: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 mt-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-3 bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left"
          >
            <span className="font-bold text-gray-800">{faq.question}</span>
            <span className="text-gray-500 text-2xl font-bold">
              {openIndex === index ? "˄" : "˅"}
            </span>
          </button>
          {openIndex === index && (
            <p className="text-gray-600 mt-2 transition-all">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Page Header */}
      <section className="text-center py-16 bg-white border-b">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="text-gray-600 mt-2">
          We turn ideas into impact with technology-driven excellence.
        </p>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20 bg-white">
        {/* Product Development */}
        <section id="product-development" className="bg-white">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Product Development
          </h2>
          <p className="text-gray-700">
            Got a groundbreaking idea? We turn napkin sketches into fully
            functional, market-ready products. From concept to code, our custom
            software development team builds sleek, scalable, and future-proof
            solutions—without the drama. Whether it’s a next-gen app or an
            AI-powered platform, we bring your vision to life. You dream it, we
            develop it. Simple as that.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
            FAQs
          </h3>
          <FAQSection
            faqs={[
              {
                question: "What industries do you develop products for?",
                answer:
                  "If it has a market, we build for it—tech, healthcare, finance, retail, you name it. Our focus is on all the industries where our services and expertise can be of value.",
              },
              {
                question: "How long does product development take?",
                answer:
                  "Speed depends on the complexity of the custom software development process. But we don’t do “forever” in developing one product. We do agile sprints to keep us moving fast.",
              },
              {
                question: "Can you help with scaling after the launch?",
                answer:
                  "Absolutely! We don’t just launch—we help you grow. As you grow, our scaling vision gets activated, so you can smoothly run your product.",
              },
              {
                question: "Do you offer prototypes before full development?",
                answer:
                  "Of course! Think of our custom software development services as a test drive before we hit full speed. Our prototypes will give you a trial picture of the complete product, so you can share your thoughts, suggestions, and reviews.",
              },
              {
                question: "What technologies do you use?",
                answer:
                  "The latest and greatest—React, Python, AI, and everything in between. We update ourselves continuously to implement the latest technologies in our processes.",
              },
            ]}
          />
        </section>

        {/* Software Testing */}
        <section id="software-testing" className="bg-white">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Software Testing
          </h2>
          <p className="text-gray-700">
            Bug-free software is a myth—but we get you pretty darn close. Our
            team of QA ninjas hunts down every glitch, crash, and weird bug that
            could ruin your user’s day. Whether it’s manual, automation, or
            performance testing, our software QA testing services make sure your
            software is battle-ready before launch.
          </p>
          <p className="text-gray-700 mt-4">
            Quality is non-negotiable, and we make sure your software is
            flawless. Our rigorous QA software testing services and processes
            help identify bugs, security loopholes, and inefficiencies before
            they impact your users. At WT Softech, we ensure your software is
            robust, reliable, and market-ready—because perfection is the only
            acceptable standard.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
            FAQs
          </h3>
          <FAQSection
            faqs={[
              {
                question: "What types of testing do you offer?",
                answer:
                  "Functional, automation, security, performance—you name it, we test it. Every software QA test is a testament to our quality checking and assurance.",
              },
              {
                question: "Do you provide automated testing?",
                answer:
                  "Yep! Because testing manually is so last decade. We fasten the process with automated software QA testing services, tools, and techniques.",
              },
              {
                question: "How do you ensure our app works on all devices?",
                answer:
                  "We test it across different OS, browsers, and devices without excuses. This way, if we find malfunctions or bugs anywhere, we resolve them then and there.",
              },
              {
                question: "Can you test my existing app?",
                answer:
                  "Of course! We’ll find what’s broken and tell you how to fix it. Our software testing and consultation will ensure your application is stable.",
              },
              {
                question: "What’s the cost of software testing?",
                answer:
                  "The cost of software testing is less than the cost of a buggy launch and angry customers. It depends on your needs, ultimately, so let’s get on a call and discuss things.",
              },
            ]}
          />
        </section>

        {/* IT Consulting */}
        <section id="it-consulting" className="bg-white">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            IT Consulting
          </h2>
          <p className="text-gray-700">
            Navigating the fast-paced world of technology can be overwhelming.
            It can give you tech headaches, but we’ve got the aspirin. Our IT
            consulting services help you navigate the digital world without
            breaking a sweat. Whether you need cloud migration, cybersecurity
            upgrades, or an IT strategy, we’ll simplify the complex and set you
            up for success.
          </p>
          <p className="text-gray-700 mt-4">
            As one of the best IT consulting companies in Hyderabad, we help
            businesses strategise, implement, and optimise technology solutions
            tailored to their needs. WT Softech provides expert guidance to
            streamline operations and drive growth. Let’s turn your tech
            challenges into opportunities.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
            FAQs
          </h3>
          <FAQSection
            faqs={[
              {
                question: "What industries do you consult for?",
                answer:
                  "We offer consultation for every industry that relies on tech, which is pretty much all of them.",
              },
              {
                question: "Can you help with IT cost optimisation?",
                answer:
                  "Absolutely! We cut the fat and keep what’s essential. So, you only need to pay for the necessary costs.",
              },
              {
                question: "Do you offer cybersecurity consulting?",
                answer:
                  "Yes, because data breaches are not a good look for us. We analyse your existing cybersecurity practices and offer recommendations wherever needed.",
              },
              {
                question: "How does IT consulting improve my business?",
                answer:
                  "We make your tech stack work smarter, not harder. So, our consultations ensure your business grows with a stronger foundation, secure and smooth in all aspects.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "As one of the top IT consulting companies in India, we won’t ghost you after the first meeting; our aim is to give you long-term support.",
              },
            ]}
          />
        </section>

        {/* IT Services */}
        <section id="it-services" className="bg-white">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">IT Services</h2>
          <p className="text-gray-700">
            Tech should work for you, not against you. Whether it’s cloud
            computing, network security, or managed IT services, we keep your
            systems running smoothly so you can focus on running your business.
            No tech meltdowns. No downtime. Just seamless IT solutions.
          </p>
          <p className="text-gray-700 mt-4">
            We keep your business running efficiently with cloud computing,
            network management, and enterprise IT support. We ensure smooth
            operations, enhanced security, and scalable solutions that align
            with your business goals. WT Softech is your trusted partner for all
            remote IT infrastructure management services, so get in touch today!
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
            FAQs
          </h3>
          <FAQSection
            faqs={[
              {
                question: "Do you offer 24/7 IT support?",
                answer:
                  "Yep! Because tech issues don’t follow business hours, we make sure our IT support is available to you as soon as possible.",
              },
              {
                question: "Can you migrate my data to the cloud?",
                answer:
                  "Absolutely, and we won’t lose a single byte. So, you can trust us to migrate your data to the cloud without affecting your existing work.",
              },
              {
                question: "What IT security measures do you provide?",
                answer:
                  "Firewalls, encryption, and other fancy words that keep hackers out. You can rely on us for your complete IT security.",
              },
              {
                question: "Do you work with small businesses too?",
                answer:
                  "Big or small, we optimise IT for all. So, you can get in touch with us without worrying whether we will work with you or not.",
              },
              {
                question: "How do you handle IT emergencies?",
                answer:
                  "Swiftly and strategically, we take care of IT emergencies before they become disasters.",
              },
            ]}
          />
        </section>

        {/* Staffing Solutions */}
        <section id="staffing-solutions" className="bg-white">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Staffing Solutions
          </h2>
          <p className="text-gray-700">
            Finding the right tech talent is like dating—you need the perfect
            match. We cut through the noise and connect you with top-tier IT
            professionals who actually know their stuff. The right talent makes
            all the difference, so you need our IT staffing solutions.
          </p>
          <p className="text-gray-700 mt-4">
            The top-tier IT professionals we pick for you bring expertise,
            innovation, and dedication. Whether you need contract-based
            specialists or full-time employees, our staffing solutions ensure
            you have the right people to power your success. Let’s build your
            dream team today!
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
            FAQs
          </h3>
          <FAQSection
            faqs={[
              {
                question: "What industries do you staff for?",
                answer:
                  "Our IT staffing solutions services range across various industries. You can contact us, and we’ll clarify it if needed.",
              },
              {
                question: "Can you help with remote hiring?",
                answer:
                  "100%! The world is your talent pool. Let us help you find remote staff for your jobs.",
              },
              {
                question: "What’s your vetting process?",
                answer:
                  "We screen, test, and double-check skills before sending anyone your way. Thus, the vetting headache lies on our shoulders, not yours.",
              },
              {
                question: "Do you offer temporary staffing?",
                answer:
                  "Yes! Short-term, long-term, or “I need someone now” situations. We help you with temporary or permanent staffing per your needs.",
              },
              {
                question: "How fast can you find someone?",
                answer:
                  "Our procedure is quick. However, since we want you to have quality candidates as prospects only, we might take time to recruit for crucial positions.",
              },
            ]}
          />
        </section>

        {/* Digital Marketing */}
        <section id="digital-marketing" className="bg-white">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Digital Marketing
          </h2>
          <p className="text-gray-700">
            In a digital-first world, visibility is everything. Your brand
            deserves more than generic ads and outdated SEO tricks. WT Softech’s
            digital marketing services help businesses grow through
            data-driven strategies, SEO, PPC, social media, and content
            marketing. We blend creativity with data-driven strategies to get
            you noticed.
          </p>
          <p className="text-gray-700 mt-4">
            Our digital marketing agency makes your brand pop with compelling
            campaigns to engage audiences, drive conversions, and boost brand
            recognition. Let’s take your online presence to the next level and
            turn clicks into customers!
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
            FAQs
          </h3>
          <FAQSection
            faqs={[
              {
                question: "What digital marketing services do you offer?",
                answer:
                  "SEO, PPC, content, email, and more—we do it all. You can contact our digital marketing agency in India to learn how we can boost your digital marketing.",
              },
              {
                question: "How do you improve website traffic?",
                answer:
                  "Smart strategies + killer content = more eyeballs on your brand. From an impressive intuitive interface to catchy designs and valuable content, our digital marketing agency in Hyderabad ensures more and more audiences reach your site and convert into customers.",
              },
              {
                question: "Do you handle social media marketing?",
                answer:
                  "Yes! We make brands go viral (in a good way). You can consult with our experts about your social media vision and goals.",
              },
              {
                question: "What’s your approach to paid ads?",
                answer:
                  "Data-driven and ROI-focused, we ensure the paid ads we run for you do not result in a wasted budget.",
              },
              {
                question: "Can you improve our brand’s online presence?",
                answer:
                  "Absolutely! We’ll make you unforgettable in your target audience’s memory. Give us, the best digital marketing agency in India, a chance to imprint you in your customers’ minds.",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
