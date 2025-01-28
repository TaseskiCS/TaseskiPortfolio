import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import taseski from '../assets/TaseskiLogo2.png'; 
import resume from '../assets/Resume_AntonioTaseski.pdf';


export default function Navbar() {
    const [activeSection, setActiveSection] = useState('Home'); 

    const sections = ['Skills', 'Experience', 'Projects', 'Education'];

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
            <div className='fixed z-50 backdrop-blur-sm w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
                <div className="flex justify-between items-center text-white">
                    <Link to={'/'} onClick={() => scrollToSection('Home')}><img src={taseski} className="overflow-hidden App-logo w-20" alt="logo" /></Link>
                    
                    <ul className={`md:flex hidden`}>
                        {sections.map((section) => (
                            <li key={section} className="mr-5 p-4">
                                <Link to={`/${section}`}>
                                    <button onClick={() => scrollToSection(section)} className="font-bold text-lg">
                                        {section}
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a href={resume} rel="noreferrer" target="_blank" className="bg-gray-400 rounded-lg px-4 py-2 font-bold border-white border-2 text-white">
                        Preview Resume
                    </a>
                </div>
            </div>
            <div className="fixed z-50 right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
                {sections.map((section) => (
                    <div
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`w-4 h-4 rounded-full cursor-pointer ${
                            activeSection === section ? 'bg-white w-6 h-6' : 'bg-gray-500'
                        }`}
                        title={section}
                    />
                ))}
            </div>
        </>
    );
}
