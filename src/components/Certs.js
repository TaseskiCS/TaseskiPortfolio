import CertCard from "./CertCard.js"


import serblink from "../assets/serblinkoutline.png"
import citizenfx from "../assets/citizenfx.png"
import lcs from "../assets/lcs.png"


// import 

export default function Certs(){
    return (
        <div id="certs" className="md:h-screen mt-20 p-20 text-white">
            <h1 className="text-5xl font-bold mt-20">Experience</h1>
            <p className="font-light text-gray-400">Here are some of real world software development experiences</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Frontend Software Engineer" type='image'img={serblink} link ='https://serblink.org/'issued="SerbLink" date="Feb 2024 - Present" />
                <CertCard name="Full Stack Software Engineer" type='image' img={citizenfx} link = 'https://github.com/citizenfx'issued="CitizenFX - Freelance" date="Dec 2022 - Jan 2024" />
                <CertCard name="Mobile Developer" img={lcs} type='image' link = 'https://lauriercs.ca/'issued="Laurier CS Club" date="Feb 2024 - Present" />
            </div>

            <h1 className="text-5xl font-bold mt-20">Projects</h1>
            <p className="font-light text-gray-400">Here are some of the projects I have made and their stacks, GitHub Repositories included!</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Personal Portfolio" type='empty' img={serblink} link ='https://serblink.org/'issued="Source Code" date="Feb 2024 - Present" />
                <CertCard name="Emoz" type='empty' img={citizenfx} link = 'https://github.com/citizenfx'issued="Source Code" date="Dec 2022 - Jan 2024" />
                <CertCard name="Workout Planner" type='empty' img={lcs} link = 'https://lauriercs.ca/'issued="Source Code" date="Feb 2024 - Present" />
            </div>
        </div>
        
    )
}
