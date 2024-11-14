import {useState} from 'react'

import profile from '../assets/profile.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="bg-dark-500 flex w-full h-full md:h-screen pb-20 flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='mt-40 md:mt-10 md:w-2/6 md:p-4 rounded'>
                <img className = 'rounded-full'data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="mb-3 text-xl text-gray-400">Hello! My name is</h1>
                    <h1 className="mb-3 text-3xl font-bold">Antonio Taseski</h1>
                    <p class="text-xl font-bold text-gray-300">Software Engineer</p>
                    <p className="text-md font-light text-gray-400 ">Passionate second-year Computer Science student, taking initiative to tackle challenges, and dive into the world of technology and innovation.</p>
                </div>
               
                
                <ul className='flex mt-2 gap-5 items-center'>
                   <li>
                        <a href='https://github.com/TaseskiCS' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
            
                    <li>
                        <a href='https://www.linkedin.com/in/antonio-taseski-8ba015290/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
