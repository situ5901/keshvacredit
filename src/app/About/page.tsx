"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import loanAnimation from "../../animations/loan.json";
import Partner from "../Component/Partner/Partner";
import AOS from "aos";
import "aos/dist/aos.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1
            className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
            data-aos="bounce"
          >
            1ST Loan Marketplace – Simplifying Your Loan Journey
          </h1>
          <p className="mb-8 text-lg text-gray-300 lg:text-xl sm:px-8 lg:px-48">
            Simplifying the Borrowing Experience with Instant Approvals, Best
            Interest Rates, and Trusted Lenders for Personal, Business, and
            Emergency Loans.
          </p>
        </div>
      </section>

      {/* Special Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">What Makes Us Special</h2>
          <p className="mt-4 text-lg max-w-4xl mx-auto">
            At <strong>KeshvaCredit</strong>, we believe financial solutions
            should be simple, transparent, and tailored. We empower you with
            seamless digital experiences and peace of mind.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                src: "https://cdn-icons-gif.flaticon.com/6844/6844383.gif",
                alt: "Fast Approval",
                text: "Fast Approval",
              },
              {
                src: "https://cdn-icons-png.flaticon.com/128/7325/7325279.png",
                alt: "Quick Disbursal",
                text: "Quick Disbursal",
              },
              {
                src: "https://cdn-icons-png.flaticon.com/128/4660/4660937.png",
                alt: "100% Paperless",
                text: "100% Paperless",
              },
              {
                src: "https://cdn-icons-png.flaticon.com/128/3875/3875894.png",
                alt: "Wide Product Range",
                text: "Wide Product Range",
              },
              {
                src: "https://cdn-icons-png.flaticon.com/128/5579/5579459.png",
                alt: "Hassle-free Docs",
                text: "Hassle-free Docs",
              },
              {
                src: "https://cdn-icons-gif.flaticon.com/6569/6569170.gif",
                alt: "Safe Data",
                text: "Safe Data Ecosystem",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={64}
                  height={64}
                  className="mb-2 object-contain max-w-full"
                />
                <span className="font-semibold text-center">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="px-4 lg:px-[10%]">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
              <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
              <p className="mt-4 text-gray-700 text-lg">
                At KeshvaCredit, we revolutionize the lending experience by
                connecting borrowers with trusted lenders. We make securing a
                loan—personal, business, or emergency—fast and stress-free.
              </p>
            </div>
            <div
              className="lg:w-1/2 flex justify-center items-center max-w-[350px] w-full mx-auto"
              data-aos="fade-right"
            >
              <Lottie
                animationData={loanAnimation}
                loop={true}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 mt-5">
        <Partner />
      </section>

      <hr />

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">
              How It Works
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our simple three-step process gets you from application to
              approval—fast.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                src: "https://cdn-icons-gif.flaticon.com/16664/16664304.gif",
                title: "Select Loan",
                desc: "Browse our diverse loan options to find what fits.",
              },
              {
                src: "https://cdn-icons-gif.flaticon.com/17904/17904955.gif",
                title: "Instant Approval",
                desc: "Apply online and get instant approval from lenders.",
              },
              {
                src: "https://cdn-icons-gif.flaticon.com/11321/11321408.gif",
                title: "Receive Funds",
                desc: "Funds disbursed to your account quickly and securely.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                data-aos="fade-up"
              >
                <div className="relative w-32 h-32 overflow-hidden rounded-full shadow-lg">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
      {/* Contact Section */}
      <section className="relative bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center relative z-10">
          <a
            href="/Contact"
            className="inline-flex items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full border border-gray-300 shadow-sm hover:shadow-md transition"
          >
            <span className="text-xs bg-blue-600 rounded-full px-4 py-1.5 mr-3 text-white">
              New
            </span>
            <span className="text-sm font-medium">
              Any Query? Contact us. We’re here 24/7.
            </span>
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Empowering Dreams, Financing the Future
          </h1>
          <p className="mb-8 text-lg text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            At KeshvaCredit, we connect borrowers with the right lenders,
            using technology and innovation to unlock financial
            opportunities and growth.
          </p>
        </div>
        <div className="absolute bg-gradient-to-b from-blue-50 to-transparent z-0"></div>
      </section>

      <div className="h-10">
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3">ॐ नमो भगवते वासुदेवाय</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
