"use client";

import React from "react";

export default function Contact() {
  return (
    <>
      <section className="bg-blue-50 text-black" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4 text-center text-black">
            <h2 className="font-heading mb-4 font-bold text-gray-900 dark:text-blue-500 text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-600">
              We'd love to hear from you. Fill out the form below and we'll get
              back to you soon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-600">
                Our Address
              </h3>
              <p className="text-gray-600 dark:text-gray">
                1230 Maecenas Street Donec Road, New York, EEUU
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-gray">
                Contact
              </h3>
              <p className="text-gray-600 dark:text-gray">
                Mobile: +1 (123) 456-7890
              </p>
              <p className="text-gray-600 dark:text-gray">
                Mail: tailnext@gmail.com
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Working Hours
              </h3>
              <p className="text-gray-600 dark:text-gray">
                Monday - Friday: 08:00 - 17:00
              </p>
              <p className="text-gray-600 dark:text-gray">
                Saturday & Sunday: 08:00 - 12:00
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-600"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-gray-400 py-2 px-3 text-gray-600 focus:outline-none focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-400 py-2 px-3 text-gray-600 focus:outline-none focus:border-blue-500"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-400 py-2 px-3 text-gray-600 focus:outline-none focus:border-blue-500"
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
          </div>
        </div>
      </section>
    </>
  );
}
