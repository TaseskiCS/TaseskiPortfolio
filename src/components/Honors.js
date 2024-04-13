import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"
import laurier from "../assets/laurier.png"
import dsa from "../assets/dsa.png"
import python from "../assets/skills/python.svg"

export default function Honors(){
    return (
        <div id="honors" className="h-screen p-20 mt-20 text-white">
            <h1 className="text-5xl font-bold">Education And Related Coursework</h1>
            <p className="font-light text-gray-400">Class of 2027</p>
            <div className ='flex justify-center mb-1'>
                <img src={laurier} className="w-sm rounded-full border-double border-4 border-purple-700 drop-shadow-lg" alt="hr" />
            </div>
            <div className="flex justify-center items-center mt-10 mb-20 gap-5">
                <HonorCard img = {dsa} name = 'Data Structures & Algorithms' link = 'https://github.com/TaseskiCS/CP164' issued = 'All source code for course!' desc = ''></HonorCard>
                <HonorCard img = {python} name = 'CP104 Programming' link = 'https://github.com/TaseskiCS/CP104' issued = 'All source code for course!' desc = ''></HonorCard>
            </div>
        </div>
    )
}
