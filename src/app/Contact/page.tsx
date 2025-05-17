"use client";

import React from "react";

export default function Contact() {
  return (
    <>
      <section className="" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4 text-center mt-2">
            <h2 className="font-heading mb-4 font-bold  dark:text-blue-500 text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl">
              We&apos;d love to hear from you. Fill out the form below and
              we&apos;ll get back to you soon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-lg font-bold  underline">
                Our Address
              </h3>
              <p className="   ">
                233, Thakar Basti,Bagichi Mohalla, Dharamshala Road,Fatehabad-125050
              </p>

              <h3 className="text-lg font-bold underline">
                Contact
              </h3>
            
              <p>
                Mail:{" "}
                <a
                  href="mailto:keshvacredit@gmail.com"
                  className=" hover:underline"
                >
                  keshvacredit@gmail.com
                </a>
              </p>


              <h3 className="text-lg font-bold underline">
                Working Hours
              </h3>
              <p className="   ">
                Monday - Friday: 08:00 - 17:00
              </p>
              <p className="   ">
                Saturday &amp; Sunday: 08:00 - 12:00
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md shadow-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium    "
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-gray-400 py-2 px-3     focus:outline-none focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium    "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-400 py-2 px-3     focus:outline-none focus:border-blue-500"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium    "
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-400 py-2 px-3     focus:outline-none focus:border-blue-500"
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
