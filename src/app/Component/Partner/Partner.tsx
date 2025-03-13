"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image"; // Next.js Image component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    "/images/partner1.png", 
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner5.png",
  ];

  return (
    <div className="partner-slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="partner-logo">
            <Image
              src={logo}
              alt={`Partner ${index + 1}`}
              width={150}
              height={100}
              priority
              className="partner-image"
            />
          </div>
        ))}
      </Slider>
      <p className="partner-text">
        We work with partners who believe in &ldquo;quality over quantity&rdquo; and strive for excellence.
      </p>
    </div>
  );
};

export default Partner;
