"use client";
import { useState } from "react";
import Lottie from "lottie-react";
import animationOne from "../animations/one.json";
import animationTwo from "../animations/two.json";
import animationThree from "../animations/three.json";
import animationFour from "../animations/four.json";

const animations = [animationOne, animationTwo, animationThree, animationFour];

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
        className="w-[450px] h-[450px] mx-auto"
      />
    </div>
  );
};

export default LottieAnimation;
