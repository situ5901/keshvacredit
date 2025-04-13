"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, 
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear", 
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
    "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp", 
    "https://www.ramfincorp.com/images/logo.png",
    "https://web.fatakpay.com/assets/images/logo/Logo.svg",
    "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp", 
    "https://www.ramfincorp.com/images/logo.png",
    "https://web.fatakpay.com/assets/images/logo/Logo.svg",
    "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp", 
    "https://www.ramfincorp.com/images/logo.png",
    "https://web.fatakpay.com/assets/images/logo/Logo.svg",
    "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp", 
    "https://www.ramfincorp.com/images/logo.png",
    "https://web.fatakpay.com/assets/images/logo/Logo.svg",
  ];

  return (
    <div className="partner-slider-container" style={{ width: "100%" }}>
      <h1 className="text-center text-4xl font-bold text-gray-800 my-2">
  Our Partners
</h1>
<p className="partner-text text-center" style={{ marginTop: "10px" }}>
        We work with partners who believe in &ldquo;quality over quantity&rdquo; and strive for excellence.
      </p>

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="partner-logo"
            style={{
              padding: "0 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Create a fixed-size square container for the image */}
            <div
              style={{
                position: "relative",
                width: "150px",   // Fixed width for each image container
                height: "150px",  // Fixed height for each image container
              }}
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                fill
                style={{ objectFit: "contain", padding: "10px" }} // Ensures the image is centered & scaled
                priority
              />
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default Partner;
