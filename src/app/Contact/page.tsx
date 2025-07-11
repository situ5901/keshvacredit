"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Careers from "../Careers/page";
import { Toaster, toast } from "react-hot-toast";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [consent, setConsent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://keshvacredit.com/api/v1/leaveSend/contactMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const responseText = await res.text();

    if (res.ok) {
      toast.success(responseText || "Thank you! We will contact you shortly", {
        position: "top-right",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setConsent(false);
    } else {
      toast.error(responseText || "Something went wrong!", {
        position: "top-right",
      });
    }
  };

  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center mt-2" data-aos="fade-up">
          <h2 className="font-heading mb-4 font-bold dark:text-blue-500 text-3xl sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl">
            We'd love to hear from you. Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md shadow-white mb-16" data-aos="zoom-in">
          <h2 className="text-2xl font-bold mb-4 text-center">Ready to Get Started?</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
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
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Your contact number"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Write your message..."
              />
            </div>

            {/* Consent Checkbox */}
            <div className="mb-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="w-4 h-4"
                required
              />
              <label htmlFor="consent" className="text-sm">
                We can contact you via Email, WhatsApp, SMS, RCS or Call
              </label>
            </div>

            <button
              type="submit"
              disabled={!consent}
              className={`w-full px-6 py-3 rounded-md text-white transition ${consent
                  ? "bg-blue-800 hover:bg-blue-900"
                  : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4" data-aos="zoom-in">
            <h3 className="text-lg font-bold underline">Our Address</h3>
            <p>
              233, Thakar Basti, Bagichi Mohalla, Dharamshala Road,
              Fatehabad-125050
            </p>

            <h3 className="text-lg font-bold underline">Contact</h3>
            <p>
              Mail:{" "}
              <a
                href="mailto:keshvacredit@gmail.com"
                className="hover:underline"
              >
                keshvacredit@gmail.com
              </a>
            </p>

            <h3 className="text-lg font-bold underline">Working Hours</h3>
            <p>Monday - Friday: 09:00 AM - 05:00 PM</p>
            <p>Saturday &amp; Sunday: 09:00 AM - 01:00 PM</p>
          </div>

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
      <Toaster />
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-6 py-3 rounded-md font-semibold ${activeTab === "contact"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
        >
          Contact
        </button>
        <button
          onClick={() => setActiveTab("careers")}
          className={`px-6 py-3 rounded-md font-semibold ${activeTab === "careers"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
        >
          Register as Partner
        </button>
      </div>

      {activeTab === "contact" ? <Contact /> : <Careers />}
    </div>
  );
}

