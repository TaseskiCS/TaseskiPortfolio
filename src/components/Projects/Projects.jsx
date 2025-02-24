import React, {useState} from 'react'
import InfoCard from '../InfoCard'
import mymap from '../../assets/projects/mymap-preview.png'
import emoz from '../../assets/emoz.jpg'
import fitjot from '../../assets/fitjot.png'
import profile from '../../assets/profile2.png'
import stats from '../../assets/stats.png'

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState(""); // Track swipe direction
  
    const courses = [
      { id: 1, title: "MyMap", link: "https://github.com/TaseskiCS/MyMap",linkTitle: "GitHub Repository", image: mymap, desc: "User-made link map to display their social data under a custom url handle, which they style through dashboard. Features a robust authentication system with token validation for secure and streamlined user experiences. Clean and precise frontend built in React with Next.js and Tailwind for a clean, user-friendly interface. Backend RESTful API in Node.js with Express to perform CRUD operations and send data upon request. User schema to support secure authentication and profile management on a non-relational Mongo database."},
      { id: 2, title: "Emoz", link: "https://github.com/TaseskiCS/Emoz", linkTitle: "GitHub Repository", image: emoz, desc: "Emotion-analyzing journal app with speech analysis using BERT ML model and OpenAI’s Whisper. Highly graphical and chart-heavy dashboard representing date based analysis of journal entries. Cohesive backend RESTful API built using Python with Django providing CRUD operations. Non-relational HIVE database schema calculating the emotion id which is sent to frontend." },
      { id: 3, title: "FitJot", link: "https://github.com/TaseskiCS/FitJot", linkTitle: "GitHub Repository", image: fitjot, desc: "Fitness web app where users can log, organize, and track workouts through a customizable task sheet. Easy-to-navigate, clean and structured frontend built in React with Bootstrap for seamless use. Node.js and Express RESTful API backend for CRUD operations on a non-relational Mongo database."},
      { id: 4, title: "Personal Portfolio", link: "https://github.com/TaseskiCS/TaseskiPortfolio", linkTitle: "GitHub Repository", image: profile, desc:"Built with React for a great experience, using Tailwind and Sass to create a clean, modern design showcasing my traits and creative ability!" },
      { id: 4, title: "TechPrep", link: "https://github.com/TaseskiCS/TechPrep", linkTitle: "GitHub Repository", image: stats, desc:"Features solutions to DSA problems using python through sites like LeetCode and Hackerrank" },
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
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={handlePrev}
            className=" text-white text-5xl px-4 py-2 rounded-full z-10"
          >
            ‹
          </button>
  
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
              linkTitle= {courses[currentIndex].linkTitle}
            />
          </div>
  
          <button
            onClick={handleNext}
            className="text-5xl px-4 py-2 rounded-full z-10"
          >
            ›
          </button>
        </div>
      </div>
    );
  }
  

export default Projects;