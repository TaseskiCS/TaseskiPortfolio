import React, { useState } from "react";
import InfoCard from "../InfoCard";


import shacks from "../../assets/shacks.jpg";

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("");

  const awards = [
    {
        id: 1,
        title: "1st Place @ ScotiaHacks x Tangerine S:\HA<KS 2025 ",
        link: ["https://www.scotiabank.com/careers/en/careers/s-hacks.html"],
        image: shacks,
        desc: "Built bill splitting feature embedded into the scotiabank app!",
      },

  ];

  const handleNext = () => {
    setSwipeDirection("right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
      setSwipeDirection("");
    }, 300);
  };

  const handlePrev = () => {
    setSwipeDirection("left");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + awards.length) % awards.length
      );
      setSwipeDirection("");
    }, 300);
  };

  return (
    <div
      id="Awards"
      className="flex justify-center flex-col min-h-screen p-2 md:p-20 mt-24 text-white"
    >
      <h1 className="text-center text-5xl font-bold">Awards</h1>

      <div className="flex items-center flex-col mx-1 md:mx-32 justify-center mt-6">
        <div
          className={`w-full max-w-3xl transition-transform duration-300 ${
            swipeDirection === "right"
              ? "translate-x-full opacity-0"
              : swipeDirection === "left"
              ? "-translate-x-full opacity-0"
              : "opacity-100"
          }`}
        >
          <InfoCard
            img={awards[currentIndex].image}
            name={awards[currentIndex].title}
            link={awards[currentIndex].link}
            desc={awards[currentIndex].desc}
          />
        </div>

        {awards.length > 1 && (
          <div className="flex w-full mt-5 gap-3 justify-around">
            <button
              onClick={handlePrev}
              className="text-white text-5xl px-4 py-2 rounded-full border-white border-2"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="text-white text-5xl px-4 py-2 rounded-full border-white border-2"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Awards;
