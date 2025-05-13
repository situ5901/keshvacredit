"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationOne from "../animations/one.json";
import animationThree from "../animations/three.json";
import animationFour from "../animations/four.json";

const animations = [animationOne, animationThree, animationFour];

const LottieAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnimationComplete = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % animations.length);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <Lottie
        animationData={animations[currentIndex]}
        loop={false}
        onComplete={handleAnimationComplete}
        className="w-[300px] md:w-[450px] h-[450px] mx-auto flex items-center justify-center"
      />
    </div>
  );
};
export default LottieAnimation;
