"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LoanAgentPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How much commission can I earn?",
      answer:
        "Commission depends on the loan type and amount. You’ll get detailed info during onboarding.",
    },
    {
      question: "Do I need prior experience in finance?",
      answer:
        "No, we provide training and support. Anyone passionate can become an agent.",
    },
    {
      question: "Is there any joining fee?",
      answer: "No, joining as a KeshvaCredit Loan Agent is completely free.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-28 font-sans  mt-10">
      {/* Title */}
      <h1
        className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
        data-aos="zoom-in"
      >
        Become a KeshvaCredit partner
      </h1>
      <section
        className="flex flex-col md:flex-row items-center gap-8 group"
        data-aos="slide-up"
      >
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="About opportunity"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            About the Opportunity
          </h2>
          <p className="text-lg leading-relaxed">
            At KeshvaCredit, we empower individuals and businesses through
            accessible credit solutions. Become a loan agent and connect
            customers with the best financial products while building your own
            business and earning attractive commissions.
          </p>
          <br />
          <a
            href="mailto:info@keshvacredit.com?subject=KeshvaCredit%20Partnership%20Request&body=I%20want%20to%20become%20a%20KeshvaCredit%20partner."
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Contact Us to Collaborate
          </a>
        </div>
      </section>

      {/* Section 2: Benefits */}
      <section
        className="bg-blue-50 rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center gap-8 group"
        data-aos="slide-up"
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Benefits of Collaboration
          </h2>
          <ul className="text-gray-700 list-disc list-inside space-y-4 text-lg">
            <li>Attractive commissions on every successful loan referral.</li>
            <li>Access to our advanced fintech platform and marketing tools.</li>
            <li>Flexible working hours and remote opportunities.</li>
            <li>Dedicated agent support, training, and growth resources.</li>
            <li>Expand your professional network with industry leaders.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80"
            alt="Benefits"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* Section 3: Responsibilities */}
      <section
        className="flex flex-col md:flex-row items-center gap-8 group"
        data-aos="slide-up"
      >
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80"
            alt="Responsibilities"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            Responsibilities of a Loan Agent
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Identify potential customers and educate them about loan products.</li>
            <li>Assist clients in completing loan applications and gathering documents.</li>
            <li>Coordinate with underwriting team to ensure smooth processing.</li>
            <li>Maintain strong customer relationships for future needs.</li>
            <li>Promote KeshvaCredit&rsquo;s mission with integrity and ethics.</li>
          </ul>
        </div>
      </section>

      {/* Section 4: Who Should Apply */}
      <section
        className="bg-blue-50 rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center gap-8 group"
        data-aos="slide-up"
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Who Should Apply?</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-3 text-lg">
            <li>Sales professionals looking to diversify their portfolio.</li>
            <li>Financial advisors and consultants wanting to expand offerings.</li>
            <li>Entrepreneurs and freelancers interested in passive income.</li>
            <li>Anyone passionate about helping others access credit services.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="data:image/jpeg;base64,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"
            alt="Who should apply"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* Section 5: FAQ Accordion */}
      <section data-aos="zoom-in">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-700">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-left text-gray-800 hover:bg-blue-100"
              >
                {faq.question}
                <span>{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="text-center" data-aos="zoom-in">
        <h2 className="text-4xl font-extrabold mb-6 ">
          Ready to Join Us?
        </h2>
        <p className="text-lg  mb-8 max-w-xl mx-auto leading-relaxed">
          Take the first step towards a rewarding partnership with KeshvaCredit. Reach out to us today and let&apos;s grow together!
        </p>
        <a
          href="mailto:info@keshvacredit.com?subject=KeshvaCredit%20Partnership%20Request&body=I%20want%20to%20become%20a%20KeshvaCredit%20partner."
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Contact Us to Collaborate
        </a>
      </section>
    </div>
  );
}