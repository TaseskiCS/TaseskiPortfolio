import CertCard from "./CertCard.js";
import React, { useState } from "react";
import laurier from "../assets/laurier.png";
import dsa from "../assets/dsa.png";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.svg";
import electronics from "../assets/electronics.jpg";

export default function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(""); // Track swipe direction

  const courses = [
    { id: 1, title: "Data Structures & Algorithms", link: "https://github.com/TaseskiCS/CP164", image: dsa, desc: "Study of data structures and their applications. Recursion, searching, sorting. Queues, stacks, heaps. Analysis of algorithms, big 'O' notation." },
    { id: 2, title: "Object Oriented Programming", link: "https://github.com/TaseskiCS/CP213", image: java, desc: 'Fundamentals of object-oriented programming, classes, subclasses, inheritance, references, overloading.' },
    { id: 3, title: "Intro To Programming", link: "https://github.com/TaseskiCS/CP104", image: python, desc: "Introduction to Python programming, searching, sorting, string manipulation and more."},
    { id: 4, title: "Digital Electronics", link: "", image: electronics, desc:'Introduction to digital logic: logic gates, combinational circuit analysis using Boolean algebra and Karnaugh maps, number systems and codes, minimization techniques applied to combinational logic systems; flip-flops, multivibrators, counters and shift registers' },
  ];

  const handleNext = () => {
    setSwipeDirection("right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
      setSwipeDirection("");
    }, 300); // Match CSS transition duration
  };

  const handlePrev = () => {
    setSwipeDirection("left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
      setSwipeDirection("");
    }, 300); // Match CSS transition duration
  };

  return (
    <div id="Education" className="flex justify-center flex-col min-h-screen p-20 mt-24 text-white">
      <h1 className="text-center text-5xl font-bold">Education And Related Coursework</h1>
      <p className="text-center font-light mb-5 text-gray-400">Class of 2027</p>
      <div className="flex justify-center mb-6">
        <img
          src={laurier}
          className="rounded-full w-40 border-double border-4 border-purple-700 drop-shadow-lg"
          alt="Laurier Logo"
        />
      </div>
      <div className="relative flex items-center justify-center mt-6">
        <button
          onClick={handlePrev}
          className="absolute left-0 md:left-20 top-1/2 transform -translate-y-1/2  text-white text-5xl px-4 py-2 rounded-full z-10 hover:text-6xl"
        >
          ‹
        </button>

        <div
          className={`w-full max-w-sm transition-transform duration-300 ${
            swipeDirection === "right"
              ? "translate-x-full opacity-0"
              : swipeDirection === "left"
              ? "-translate-x-full opacity-0"
              : "opacity-100"
          }`}
        >
          <CertCard
            img={courses[currentIndex].image}
            name={courses[currentIndex].title}
            link={courses[currentIndex].link}
            desc={courses[currentIndex].desc}
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 md:right-20 top-1/2 transform  -translate-y-1/2  text-5xl px-4 py-2 rounded-full z-10 hover:text-6xl"
        >
          ›
        </button>
      </div>
    </div>
  );
}
