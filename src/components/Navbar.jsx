import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import taseski from '../assets/TASESKI_LOGO_WHITE.png'; 
import resume from '../assets/Resume_AntonioTaseski.pdf';
import { scrollToSection } from '../utils/scrollToSection';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('Home'); 

    const sections = ['Skills', 'Experience', 'Projects', 'Education'];

    useEffect(() => {
        const handleScroll = () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='fixed z-50 backdrop-blur-sm w-full top-0 left-0 px-8 py-1 md:py-4 lg:px-20 xl:px-36'>
                <div className="flex justify-between items-center text-white">
                    <Link to={'/'} onClick={() => scrollToSection('Home')}>
                        <img src={taseski} className="overflow-hidden App-logo w-28 xl:w-32 transition-transform duration-300 hover:scale-110" alt="logo" />
                    </Link>
                    
                    <ul className={`md:flex hidden`}>
                        {sections.map((section) => (
                            <li key={section} className={section != sections[sections.length -1] ?`mr-1 p-4 border-r-2`: `mr-1 p-4`}>
                                <Link to={`/${section}`}>
                                    <button 
                                        onClick={() => scrollToSection(section)} 
                                        className="font-semibold text-md lg:text-lg transition-all duration-300 hover:text-gray-300 hover:scale-110"
                                    >
                                        {section}
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a 
                        href={resume} 
                        rel="noreferrer" 
                        target="_blank" 
                        className="flex row items-center gap-2 bg-gray-400 rounded-lg px-4 py-2 font-bold border-white border-2 text-white transition-all duration-300 hover:bg-gray-500 hover:scale-105"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                        </svg>

                        <h1 className='md:text-md text-md xl:text-xl' >Resume</h1>
                    </a>
                </div>
            </div>
            <div className="fixed z-50 left-1/2 md:left-auto md:right-8 top-24 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex flex-row gap-5 md:flex-col items-center md:space-y-4">
                {sections.map((section) => (
                    <div
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                            activeSection === section ? 'bg-white w-6 h-6 scale-125' : 'bg-gray-500 hover:scale-110'
                        }`}
                        title={section}
                    />
                ))}
            </div>
        </>
    );
}
