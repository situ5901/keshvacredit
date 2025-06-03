import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const steps = [
  {
    title: 'Provide Basic Details',
    imgSrc: '/how1.png',
    description:
      'Enter your personal and financial information so we can tailor the best loan options for you.',
  },
  {
    title: 'Choose From Best Offers',
    imgSrc: '/how2.png',
    description:
      'Compare curated loan offers from top lenders and pick the one that fits your requirements.',
  },
  {
    title: 'Complete Application Online',
    imgSrc: '/how3.png',
    description:
      'Fill out the application form, upload documents, and submit everything online in minutes.',
  },
  {
    title: 'Get Money in Your Bank',
    imgSrc: '/how4.png',
    description:
      'After approval, receive the funds directly into your bank account within 24 hours.',
  },
];

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipe: true,
  swipeToSlide: true,
  touchMove: true,
  draggable: true,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">How It Works</h2>
        <p className="mb-4 text-lg md:text-xl">
          Get your loan disbursed into your bank account in 4 simple steps.
        </p>

        {/* Progress Bar (Desktop only) */}
        <div className="hidden lg:flex items-center justify-center mb-8 w-full gap-x-4">
          {steps.map((_, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-300 shrink-0 ${
                  idx === activeStep
                    ? 'bg-blue-600 text-white scale-110'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`h-1 flex-1 transition-colors duration-300 ${
                    idx < activeStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  style={{ minWidth: '60px' }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop Slider */}
        <div className="hidden lg:block overflow-visible -mx-3">
          <Slider {...sliderSettings} className="px-3" aria-label="Loan steps carousel">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div key={idx} className="px-3 mt-5">
                  <div
                    className={`flex flex-col items-center p-8 rounded-2xl shadow-xl transition-all duration-500 ease-in-out w-full min-h-[400px] mb-5 ${
                      isActive
                        ? 'bg-gray-800 text-white scale-105'
                        : 'bg-white text-blue-900'
                    }`}
                  >
                    <div className="mb-4">
                      <Image
                        src={step.imgSrc}
                        alt={step.title}
                        width={128}
                        height={128}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-center text-lg mb-2">{step.title}</h3>
                    <p className="text-center text-sm md:text-base mt-2 px-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Mobile + Tablet Vertical Steps */}
        <div className="lg:hidden flex flex-col space-y-6 mt-6">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center p-6 rounded-2xl shadow-md w-full transition-all duration-500 ease-in-out ${
                  isActive
                    ? 'scale-105 bg-gray-800 text-white'
                    : 'scale-100 bg-white text-blue-900'
                }`}
              >
                <div className="mb-4">
                  <Image
                    src={step.imgSrc}
                    alt={step.title}
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-center text-lg mb-2">{step.title}</h3>
                <p className="text-center text-sm px-4">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
