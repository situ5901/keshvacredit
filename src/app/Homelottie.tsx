// src/app/Homelottie.tsx (or LottieAnimation.tsx)
"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "../animations/homeload.json";

const Homelottie = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Lottie animationData={animationData} loop className="w-[300px] h-[300px]" />
    </div>
  );
};

export default Homelottie;
