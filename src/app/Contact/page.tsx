"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Careers from "../Careers/page"; // Adjust path as per your project structure

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center mt-2" data-aos="fade-up">
          <h2 className="font-heading mb-4 font-bold dark:text-blue-500 text-3xl sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl">
            We&apos;d love to hear from you. Fill out the form below and
            we&apos;ll get back to you soon.
          </p>
        </div>

        {/* Contact form centered */}
        <div
          className="max-w-2xl mx-auto p-6 rounded-lg shadow-md shadow-white mb-16"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Ready to Get Started?</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white px-6 py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Address + Map below form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side: Address */}
          <div className="space-y-4" data-aos="zoom-in">
            <h3 className="text-lg font-bold underline">Our Address</h3>
            <p>
              233, Thakar Basti, Bagichi Mohalla, Dharamshala Road,
              Fatehabad-125050
            </p>

            <h3 className="text-lg font-bold underline">Contact</h3>
            <p>
              Mail:{" "}
              <a href="mailto:keshvacredit@gmail.com" className="hover:underline">
                keshvacredit@gmail.com
              </a>
            </p>

            <h3 className="text-lg font-bold underline">Working Hours</h3>
            <p>Monday - Friday: 08:00 - 17:00</p>
            <p>Saturday &amp; Sunday: 08:00 - 12:00</p>
          </div>

          {/* Right side: Map */}
          <div
            className="rounded-lg overflow-hidden shadow-md shadow-white"
            data-aos="zoom-in"
            style={{ minHeight: "350px" }}
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6943.924906612542!2d75.4536568!3d29.5174536!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1748340495636!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactCareersToggle() {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-15">
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-6 py-3 rounded-md font-semibold ${
            activeTab === "contact"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          Contact
        </button>
        <button
          onClick={() => setActiveTab("careers")}
          className={`px-6 py-3 rounded-md font-semibold ${
            activeTab === "careers"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          Careers
        </button>
      </div>

      {activeTab === "contact" ? <Contact /> : <Careers />}
    </div>
  );
}
