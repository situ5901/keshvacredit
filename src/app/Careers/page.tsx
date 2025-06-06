"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PartnershipPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6  space-y-28 font-sans">
      {/* Contact Form */}
      <section data-aos="fade-down" className=" p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Partner With Us
        </h2>
        <form className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg p-4 w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-lg p-4 w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border rounded-lg p-4 w-full"
          />
          <input
            type="text"
            placeholder="Organization Name"
            className="border rounded-lg p-4 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border rounded-lg p-4 w-full md:col-span-2"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-12 rounded-lg hover:scale-105 transition-transform md:col-span-2"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* Hero Title */}
      <h1
        className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
        data-aos="zoom-in"
      >
        Become a KeshvaCredit Partner
      </h1>

      {/* About Partnership */}
      <section className="flex flex-col md:flex-row items-center gap-8 group" data-aos="slide-up">
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="About Partnership"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">About the Partnership</h2>
          <p className="text-lg leading-relaxed">
            Join KeshvaCredit as a strategic partner and help us bring accessible financial solutions to a wider audience.
            Whether you're a business, consultant, or digital platform, collaborate with us to grow together.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center gap-8 group" data-aos="slide-up">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Benefits of Partnership</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-4 text-lg">
            <li>Revenue sharing and performance bonuses.</li>
            <li>Access to KeshvaCredit’s API and digital tools.</li>
            <li>Co-branding and joint marketing opportunities.</li>
            <li>Full support and training from our team.</li>
            <li>Access to a large network of financial products.</li>
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

      {/* Responsibilities Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 group" data-aos="slide-up">
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
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Engage your network with our loan and financial offerings.</li>
            <li>Promote KeshvaCredit services with integrity.</li>
            <li>Facilitate referrals or integrations based on your model.</li>
            <li>Collaborate for campaigns, product launches, or outreach.</li>
          </ul>
        </div>
      </section>

      {/* Who Should Partner */}
      <section className="bg-blue-50 rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center gap-8 group" data-aos="slide-up">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Who Should Partner?</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-3 text-lg">
            <li>Startups and companies in the financial space.</li>
            <li>Fintech consultants and loan aggregators.</li>
            <li>Influencers and bloggers in the finance niche.</li>
            <li>Anyone with access to a potential customer base for financial products.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=600&q=80"
            alt="Who Should Partner"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center" data-aos="zoom-in">
        <h2 className="text-4xl font-extrabold mb-6">Ready to Partner With Us?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Let’s explore how we can work together to create value and make financial solutions more accessible.
        </p>
        <a
          href="mailto:info@keshvacredit.com?subject=KeshvaCredit%20Partnership%20Request"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Contact Us to Collaborate
        </a>
      </section>
    </div>
  );
}
