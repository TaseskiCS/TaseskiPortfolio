import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import taseski from '../assets/TaseskiLogo2.png'; 
import resume from '../assets/AntonioTaseski.pdf';
import dropdown from '../assets/dropdown.png'
import closemenu from '../assets/closemenu.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
            <div className="flex justify-between items-center text-white">
                <img src={taseski} className="overflow-hidden App-logo w-20" alt="logo" />
                <button className="md:hidden" onClick={toggleMenu}>
                    <div className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {menuOpen ? (
                            <img src={closemenu} className="overflow-hidden App-logo w-40" alt="logo" />
                        ) : (
                            <img src={dropdown} className="overflow-hidden App-logo w-40" alt="logo" />
                        )}
                    </div>
                </button>
                <ul className={`md:flex ${menuOpen ? 'block' : 'hidden'}`}>
                    <li className="mr-5 p-4">
                        <Link to="/">
                            <h3 className="font-bold text-lg hover:underline">About</h3>
                        </Link>
                    </li>
                    <li className="mr-5 p-4">
                        <Link to="/Skills">
                            <h3 className="font-bold text-lg hover:underline">Skills</h3>
                        </Link>
                    </li>
                    <li className="mr-5 p-4">
                        <Link to="/Education">
                            <h3 className="font-bold text-lg hover:underline">Education</h3>
                        </Link>
                    </li>
                    <li className="mr-5 p-4">
                        <Link to="/Experience">
                            <h3 className="font-bold text-lg hover:underline">Experience</h3>
                        </Link>
                    </li>
                </ul>
                <a href={resume} rel="noreferrer" target="_blank" className=" bg-gray-400 rounded-lg px-4 py-2 font-bold border-white border-2 text-white">Preview Resume</a>
            </div>
        </div>
    );
}
