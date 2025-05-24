// src/app/Homelottie.tsx (or LottieAnimation.tsx)
"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "../animations/rocket.json";

const Homelottie = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-4">
        <Lottie animationData={animationData} loop className="w-[300px] h-[300px]" />
        <p className="max-w-3xl text-lg ax-w-xl mt-5">
          We&apos;re here to help you unlock instant loans, credit cards, and financial
          solutions—all with fast processing, secure platforms, and RBI-regulated partners.
          Let&apos;s achieve your financial goals together.
        </p>
      </div>
    </>
  );
};

export default Homelottie;
