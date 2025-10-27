"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-24 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Terms and Conditions - WT Softech
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p className="leading-relaxed">
            Welcome to WT Softech (“Company”, “we”, “us”, or “our”). These Terms
            & Conditions (“Terms”) govern your access to and use of our website,
            and any services provided by us (collectively, the “Services”). By
            using or accessing the Site or our Services, you agree to be bound
            by these Terms. If you do not agree with any portion of these Terms,
            you must discontinue use immediately.
          </p>
        </section>

        {/* Definitions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Definitions</h2>
          <p className="leading-relaxed">
            “User”, “you”, or “your” means any person who accesses or uses the
            Site or our Services.
          </p>
          <p className="leading-relaxed mt-2">
            “Services” include IT consulting, software development,
            infrastructure management, staffing solutions, software testing,
            cloud solutions, and other services described on our Site.
          </p>
          <p className="leading-relaxed mt-2">
            “Content” means any text, graphics, images, audio, video, data,
            software, or other materials made available through the Site.
          </p>
        </section>

        {/* Use of the Site & Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Use of the Site & Services
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>
              You agree to use the Site and Services only for lawful purposes
              and in accordance with these Terms.
            </li>
            <li>
              You must not use the Site or Services in a manner that could
              disable, overburden, or impair the Site, or interfere with any
              other party’s use of the Site.
            </li>
            <li>
              You agree not to attempt to gain unauthorized access to any
              portion or feature of the Site, or any other systems or networks
              linked to the Site.
            </li>
          </ul>
        </section>

        {/* Account Registration */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Account Registration & Credentials (if applicable)
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>You agree to provide accurate and complete registration information.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
            <li>You agree to notify us immediately of any unauthorized use of your account.</li>
          </ul>
        </section>

        {/* Fees, Payment & Refunds */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Fees, Payment & Refunds
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>
              All fees shall be as set out in our proposal, invoice, or order
              form and as otherwise indicated on the Site or in the Service
              Agreement.
            </li>
            <li>
              Payment terms will be as indicated in the Service Agreement unless
              otherwise agreed in writing.
            </li>
            <li>Unless specified otherwise, payments are non-refundable.</li>
            <li>
              We reserve the right to change fees for Services, but any change
              will not affect services already paid for unless agreed in
              writing.
            </li>
          </ul>
        </section>

        {/* Intellectual Property Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Intellectual Property Rights
          </h2>
          <p className="leading-relaxed">
            All Content, trademarks, logos, service marks, and trade names on
            the Site are the property of WT Softech or its licensors and are
            protected by applicable intellectual property laws.
          </p>
          <p className="leading-relaxed mt-2">
            You may not reproduce, distribute, publicly display, or create
            derivative works of any Content without our prior written consent.
          </p>
          <p className="leading-relaxed mt-2">
            If you submit ideas, feedback, suggestions, or the like
            (collectively “Submissions”) via the Site or Services, you grant WT
            Softech a non-exclusive, worldwide, royalty-free, perpetual license
            to use, modify, distribute, and commercialise such Submissions.
          </p>
        </section>

        {/* Confidentiality */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Confidentiality</h2>
          <p className="leading-relaxed">
            In our performance of Services, we may receive confidential
            information from you, and you may receive confidential information
            from us. Each party shall:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2 leading-relaxed">
            <li>treat the other party’s Confidential Information as strictly confidential;</li>
            <li>use it only for the purposes of performing its obligations under these Terms;</li>
            <li>
              not disclose such Confidential Information to any third party
              without the other party’s prior written consent, except as
              required by law.
            </li>
          </ul>
        </section>

        {/* Warranties & Disclaimers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Warranties & Disclaimers
          </h2>
          <p className="leading-relaxed">
            We warrant that we will perform Services with reasonable skill and
            care in accordance with generally recognised industry standards.
          </p>
          <p className="leading-relaxed mt-2">
            No other warranties: To the fullest extent permitted by law, WT
            Softech disclaims all other warranties, express or implied,
            including any implied warranties of merchantability, fitness for a
            particular purpose, non-infringement, or accuracy of information.
          </p>
          <p className="leading-relaxed mt-2">
            We do not guarantee that the Website or Services will be error-free,
            uninterrupted, or ensure specific outcomes will be achieved.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            To the maximum extent permitted by applicable law, in no event shall
            WT Softech (or its directors, employees, agents) be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including but not limited to loss of profits, data, or goodwill.
          </p>
          <p className="leading-relaxed mt-2">
            Our total liability to you for any claim arising out of or in
            connection with the Services or Site shall not exceed the total
            amount paid by you to us for the Services giving rise to such claim
            (if any) in the 12 months immediately preceding the event giving
            rise to the claim.
          </p>
        </section>

        {/* Indemnification */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Indemnification</h2>
          <p className="leading-relaxed">
            You agree to defend, indemnify, and hold harmless WT Softech and its
            officers, directors, employees and agents from and against any
            claims, liabilities, damages, losses, or expenses (including legal
            fees) arising out of or related to your use of the Site or Services,
            your breach of these Terms, or your violation of any law or
            third-party rights.
          </p>
        </section>

        {/* Termination */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Termination</h2>
          <p className="leading-relaxed">
            We may suspend or terminate your access to the Site or Services at
            any time and for any reason without prior notice.
          </p>
          <p className="leading-relaxed mt-2">
            On termination, any rights you granted to us under these Terms will
            survive, and you must cease all access and use of the Site and
            delete all copies of materials you obtained from the Site.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Governing Law & Dispute Resolution
          </h2>
          <p className="leading-relaxed">
            These Terms shall be governed by and construed in accordance with
            the laws of India.
          </p>
          <p className="leading-relaxed mt-2">
            Any dispute, controversy, or claim arising out of or relating to
            these Terms or the use of the Site or Services shall be subject to
            the exclusive jurisdiction of the courts in Hyderabad, Telangana,
            India.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Changes to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to amend or revise these Terms at any time.
            When we make changes, we will post the updated Terms on the Site
            with a new “Last updated” date. Your continued use of the Site or
            Services after such modifications constitutes your acceptance of the
            updated Terms.
          </p>
        </section>

        {/* Miscellaneous */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Miscellaneous</h2>
          <p className="leading-relaxed">
            If any provision of these Terms is held to be invalid or
            unenforceable, the remaining provisions will remain in full force
            and effect.
          </p>
          <p className="leading-relaxed mt-2">
            These Terms, together with any applicable Service Agreement or other
            document you agree to, constitute the entire agreement between you
            and WT Softech relating to your use of the Site and Services,
            superseding any prior agreements.
          </p>
          <p className="leading-relaxed mt-2">
            No waiver by WT Softech of any right under these Terms shall be
            deemed a further or continuing waiver of such right or any other
            right.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <p className="leading-relaxed">
            If you have any questions or concerns regarding these Terms, please
            contact us at:
          </p>
          <p className="leading-relaxed mt-2">
            <strong>Address:</strong> Registered address: Plot No.172, First
            Floor, Kavuri Hills (Phase II), Madhapur, Hyderabad
          </p>
          <p className="leading-relaxed mt-1">
            <strong>Email:</strong> hr@wtsoftech.com
          </p>
        </section>
      </div>
    </div>
  );
}
