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

  // Logos with URLs
  const logos = [
    {
      src: "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
      url: "https://zype.sng.link/Ajygt/1ba7?_dl=com.zype.mobile&_smtype=3",
    },
    {
      src: "https://i.postimg.cc/Y03r2Fmb/logo-ramfin.png",
      url: "https://applyonline.ramfincorp.com/?utm_source=keshvacredit",
    },
      {
      src: "https://i.postimg.cc/sgkVCJpQ/download.png",
      url: "/",
    },
    {
      src: "https://web.fatakpay.com/assets/images/logo/Logo.svg",
      url: "https://web.fatakpay.com/authentication/login?utm_source=558_POVVE&utm_medium= ",
    },
    {
      src: "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
      url: "https://app.olyv.co.in/?utm_source=KeshvaCredit_Web&utm_campaign=KeshvaCredit_1",
    },
    {
      src: "https://myflot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoImage.176890a7.png&w=384&q=75",
      url: "https://myflot.com/?utm_source=Keshvacredit&utm_medium=%7B_medium%7D&utm_campaign=%7B_campaign%7D",
    },
    {
      src: "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
      url: "https://web.mpokket.in/?utm_source=keshvacredit&utm_medium=keshvacredit",
    },
     {
      src: "https://www.bharatloan.com/public/images/brand_logo.png",
      url: "https://www.bharatloan.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
    },
     {
      src: "https://i.postimg.cc/j2rPwGvT/download.png",
      url: "https://salaryontime.com/apply-now?utm_source=Keshvacredit&utm_medium=Keywords&utm_campaign=Keywords&utm_term=Keywords",
    },
      {
      src: "https://www.rupee112.com/public/images/brand_logo.png",
      url: "https://www.rupee112.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
    },
      {
      src: "https://www.kamakshimoney.com/index_files/finpath-loan-logo.svg",
      url: "/",
    },
      {
      src: "https://www.instantmudra.com/images/logo_official.png",
      url: "https://www.instantmudra.com/apply_loan.php?utm_source=quid&utm_medium=get&utm_campaign=d70e2e18685f38708e175d780390d064ke58",
    },
      {
      src: "https://www.chintamanifinlease.com/public/frontend/images/logo/logo.png",
      url: "https://www.chintamanifinlease.com/keshvacredit?utm_source=quid945&utm_medium=get&utm_campaign=loan-au7!Sh2dff5",
    },
     {
      src: "https://clickmyloan.com/images/logo.png",
      url: "https://clickmyloan.cloudbankin.com/onboard/?referral_code=caa39346dc#/home/welcome",
    },
     {
      src: "https://moneyview.in/images/mv-green-logo-v3Compressed.svg",
      url: "/",
    },
     {
      src: "https://static.trustpaisa.com/logos/full.svg",
      url: "https://trustpaisa.com/?utm_source=KeshvaCreditcredit&utm_medium=cps",
    },
      {
      src: "https://www.creditsea.com/_next/static/media/credit-sea-blue-h-latest.62519644.svg",
      url: "https://www.creditsea.com/onboarding/sign-up/enter-mobile?source=31048692",
    },
  ];

  return (
    <div className="partner-slider-container" style={{ width: "100%" }}>
      <h1 className="text-center text-4xl font-bold my-2">Our Partners</h1>
      <p className="partner-text text-center" style={{ marginTop: "10px" }}>
        We work with partners who believe in “quality over quantity” and strive for excellence.
      </p>

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
             className="partner-logo transition-transform duration-300 hover:scale-110"
            style={{
              padding: "0 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href={logo.url}  rel="noopener noreferrer">
              <div
                style={{
                  position: "relative",
                  width: "150px",
                  height: "150px",
                }}
              >
                <Image
                  src={logo.src}
                  alt={`Partner ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
