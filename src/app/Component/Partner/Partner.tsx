"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image"; // Import Next.js Image component
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
          slidesToShow: 3,
        },
      },
    ],
  };

  const logos = [
    "/images/partner1.png", 
    "/images/partner2.png",
    "/images/partner3.png",
  ];

  return (
    <div className="partner-slider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <Image src={logo} alt={`Partner Logo ${index + 1}`} width={150} height={100} priority />
          </div>
        ))}
      </Slider>
      <p>
        We work with partners who believe in &ldquo;quality over quantity&rdquo; and strive for excellence. Messagae
      </p>
    </div>
  );
};

export default Partner;
