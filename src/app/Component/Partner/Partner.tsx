"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
  const settings = {
    dots: false,
    infinite: true, // Ensures infinite looping
    speed: 5000, // Controls transition speed between slides
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Set speed to 0 for continuous sliding
    cssEase: "linear", // Smooth linear transition
    pauseOnHover: false, // Prevent pausing on hover
    arrows: false, // Disable arrows
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
    "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
  //  "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
    "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
    "https://www.ramfincorp.com/images/logo.png",
    "https://web.fatakpay.com/assets/images/logo/Logo.svg",
    "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
  //  "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
  "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
  "https://www.ramfincorp.com/images/logo.png",
  "https://web.fatakpay.com/assets/images/logo/Logo.svg",
  "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
//  "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
  "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
  "https://www.ramfincorp.com/images/logo.png",
  "https://web.fatakpay.com/assets/images/logo/Logo.svg",
  "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
//  "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
  ];

  return (
    <div className="partner-slider-container" style={{ width: "100%" }}>
      <h1 className="text-center text-4xl font-bold  my-2">
        Our Partners
      </h1>
      <p className="partner-text text-center" style={{ marginTop: "10px" }}>
        We work with partners who believe in “quality over quantity” and strive for excellence.
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
                width: "150px", // Fixed width for each image container
                height: "150px", // Fixed height for each image container
              }}
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                layout="fill" // Fill the container
                objectFit="contain" // Scale and maintain aspect ratio
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
