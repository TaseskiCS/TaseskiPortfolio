import CertCard from "./CertCard.js"


import serblink from "../assets/serblinkoutline.png"
import citizenfx from "../assets/citizenfx.png"
import lcs from "../assets/lcs.png"
//placeholder for future showcase component
import box from '../assets/box.png'


// import 

export default function Experience(){
    return (
        <div id="Experience" className="min-h-screen mt-20 pt-20 text-white">
            <h1 className="text-5xl font-bold mt-20 text-center">Experience</h1>
            <p className="font-light text-gray-400 text-center">Here are some of real world software development experiences</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Software Developer Intern" type='image'img={serblink} link ='https://serblink.org/'issued="SerbLink" date="Mar 2024 - Oct 2024" />
                <CertCard name="Full Stack Software Engineer" type='image' img={citizenfx} link = 'https://github.com/citizenfx'issued="CitizenFX - Freelance" date="Jan 2021 - March 2024" />
                <CertCard name="Full Stack Developer" img={lcs} type='image' link = 'https://lauriercs.ca/'issued="Laurier CS Club" date="Feb 2024 - Apr 2024" />
            </div>

            <h1 className="text-5xl font-bold mt-20 text-center">Projects</h1>
            <p className="font-light text-gray-400 text-center">Here are some of the projects I have made and their stacks, GitHub Repositories included!</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="MyMap" type='empty' img={box} link = 'https://github.com/TaseskiCS/MyMap'issued="Source Code" date="User-made link map to display their social data under a custom url handle, which they style through dashboard.
Features a robust authentication system with token validation for secure and streamlined user experiences.
Clean and precise frontend built in React with Next.js and Tailwind for a clean, user-friendly interface.
Backend RESTful API in Node.js with Express to perform CRUD operations and send data upon request.
User schema to support secure authentication and profile management on a non-relational Mongo database." />
                <CertCard name="Emoz" type='empty' img={box} link = 'https://github.com/TaseskiCS/Emoz'issued="Source Code" date="Emotion-analyzing journal app with speech analysis using BERT ML model and OpenAI’s Whisper.
Highly graphical and chart-heavy dashboard representing date based analysis of journal entries.
Cohesive backend RESTful API built using Python with Django providing CRUD operations.
Non-relational HIVE database schema calculating the emotion id which is sent to frontend." />
                <CertCard name="FitJot" type='empty' img={box} link ='https://github.com/TaseskiCS/FitJot'issued="Source Code" date="Fitness web app where users can log, organize, and track workouts through a customizable task sheet.
Easy-to-navigate, clean and structured frontend built in React with Bootstrap for seamless use.
Node.js and Express RESTful API backend for CRUD operations on a non-relational Mongo database." />
                <CertCard name="Personal Portfolio" type='empty' img={box} link ='https://github.com/TaseskiCS/TaseskiPortfolio'issued="Source Code" date="Built with React for a great experience, using Tailwind to create a clean, modern design showcasing my traits" />
            </div>
        </div>
        
    )
}
