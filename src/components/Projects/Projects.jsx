import React, {useState} from 'react'
import InfoCard from '../InfoCard'
import mymap from '../../assets/mymap.jpeg'
import emoz from '../../assets/emoz.jpeg'
import fitjot from '../../assets/fitjot.jpeg'
import stats from '../../assets/stats.png'
import cvlens from '../../assets/cvlens.jpeg'
import infinitecontext from '../../assets/infinite-context.jpeg'

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState(""); // Track swipe direction
  
    const courses = [
      
      { id: 1, title: "CVLens", link: "https://github.com/TaseskiCS/CVLens",linkTitle: "GitHub Repository", image: cvlens, desc: "A customizable link-mapping platform, a Next.js frontend, and a secure Node.js/Express backend with JWT authentication and using MongoDB for storage.", skills: ['React', 'Next.js', 'FastAPI', 'AWS', 'spaCy', 'Tailwind']},
      { id: 2, title: "Infinite Context", link: "https://github.com/TaseskiCS/infinite-context",linkTitle: "GitHub Repository", image: infinitecontext, desc: "A customizable link-mapping platform, a Next.js frontend, and a secure Node.js/Express backend with JWT authentication and using MongoDB for storage.", skills: ['React', 'Next.js', 'Node.js', 'Firebase', 'Tailwind']},
      { id: 3, title: "MyMap", link: "https://github.com/TaseskiCS/MyMap",linkTitle: "GitHub Repository", image: mymap, desc: "A customizable link-mapping platform, a Next.js frontend, and a secure Node.js/Express backend with JWT authentication and using MongoDB for storage.", skills: ['MongoDB', 'Express.js', 'React', 'Next.js', 'Node.js', 'Tailwind']},
      { id: 4, title: "Emoz", link: "https://github.com/TaseskiCS/Emoz", linkTitle: "GitHub Repository", image: emoz, desc: "An AI-powered journal app with speech-based emotion analysis, frontend built with Flutter, a data-driven dashboard, and a Django backend using a HIVE database.", skills: ['Python', 'Django', 'Flutter', 'BERT', 'MongoDB'] },
      { id: 5, title: "FitJot", link: "https://github.com/TaseskiCS/FitJot", linkTitle: "GitHub Repository", image: fitjot, desc: "A fitness app for logging and tracking workouts with a React frontend and a Node.js/Express backend using MongoDB for data management.", skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Bootstrap']},
      { id: 6, title: "TechPrep", link: "https://github.com/TaseskiCS/TechPrep", linkTitle: "GitHub Repository", image: stats, desc:"Features solutions to Data Structure and Algorithms problems using python through sites like LeetCode and Hackerrank",skills: ['Python'] },

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
      <div id="Projects" className="flex justify-center flex-col min-h-screen p-2 md:p-20 mt-24 text-white">
        <h1 className="text-center text-5xl font-bold">Projects</h1>
        <div className="flex items-center flex-col justify-center mt-6">
          <div
            className={`w-full max-w-4xl transition-transform duration-100 ${
              swipeDirection === "right"
                ? "translate-x-full opacity-0"
                : swipeDirection === "left"
                ? "-translate-x-full opacity-0"
                : "opacity-100"
            }`}
          >
            <InfoCard
              img={courses[currentIndex].image}
              name={courses[currentIndex].title}
              link={courses[currentIndex].link}
              desc={courses[currentIndex].desc}
              linkTitle = {courses[currentIndex].linkTitle}
              skills = {courses[currentIndex].skills}
            />
          </div>
          <div className='flex w-full mt-5 gap-3 justify-around'>
            <button
              onClick={handlePrev}
              className=" text-white text-5xl px-4 py-2 rounded-full z-10 border-white border-2 "
            >
              ‹
            </button>
    
    
            <button
              onClick={handleNext}
              className="text-white text-5xl px-4 py-2 rounded-full z-10 border-white border-2 "
            >
              ›
            </button>

          </div>

         
        </div>
      </div>
    );
  }
  

export default Projects;