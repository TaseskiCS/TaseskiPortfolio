import CertCard from "./CertCard.js"


import serblink from "../assets/serblinkoutline.png"
import citizenfx from "../assets/citizenfx.png"
import lcs from "../assets/lcs.png"
//placeholder for future showcase component
import box from '../assets/box.png'


// import 

export default function Certs(){
    return (
        <div id="certs" className="min-h-screen mt-20 pt-20 text-white">
            <h1 className="text-5xl font-bold mt-20 text-center">Experience</h1>
            <p className="font-light text-gray-400 text-center">Here are some of real world software development experiences</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Frontend Software Engineer" type='image'img={serblink} link ='https://serblink.org/'issued="SerbLink" date="Dec 2023 - Present" />
                <CertCard name="Full Stack Software Engineer" type='image' img={citizenfx} link = 'https://github.com/citizenfx'issued="CitizenFX - Freelance" date="Feb 2021 - March 2024" />
                <CertCard name="Mobile Developer" img={lcs} type='image' link = 'https://lauriercs.ca/'issued="Laurier CS Club" date="Feb 2024 - Present" />
            </div>

            <h1 className="text-5xl font-bold mt-20 text-center">Projects</h1>
            <p className="font-light text-gray-400 text-center">Here are some of the projects I have made and their stacks, GitHub Repositories included!</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="FitJot" type='empty' img={box} link = 'https://github.com/TaseskiCS/FitJot'issued="Source Code" date="Full stack workout planner built using MERN Stack. Frontend in React and Bootstrap. Backend API in Node/Express/Mongo" />
                <CertCard name="Emoz" type='empty' img={box} link = 'https://github.com/TaseskiCS/Emoz'issued="Source Code" date="Emotion-analyzing journal mobile app with Speech-To-Text analysis using BERT ML model to analyze journal entry emotion. Highly graphical and chart-heavy dashboard representing time and date based analysis of journal entries using Flutter/Dart. Cohesive backend RESTful API built in Python with Django providing CRUD operations tied to a non-relational HIVE database." />
                <CertCard name="Personal Portfolio" type='empty' img={box} link ='https://github.com/TaseskiCS/TaseskiPortfolio'issued="Source Code" date="My personal digital portfolio web app which was created using ReactJS along with Tailwind CSS and Post CSS" />
            </div>
        </div>
        
    )
}
