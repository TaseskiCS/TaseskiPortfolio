import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import taseski from '../assets/TaseskiLogo2.png'; 
import resume from '../assets/Resume_TaseskiCS.pdf';
import dropdown from '../assets/dropdown.png'
import closemenu from '../assets/closemenu.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='fixed z-50 bg-stone-600 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
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
                    <li className="bg-black mr-5 p-4 border rounded ">
                        <Link to="/">
                            <a className="hover:underline">About</a>
                        </Link>
                    </li>
                    <li className="bg-black mr-5 p-4 border rounded">
                        <Link to="/Skills">
                            <a className="hover:underline">Skills</a>
                        </Link>
                    </li>
                    <li className="bg-black mr-5 p-4 border rounded">
                        <Link to="/Honors">
                            <a className="hover:underline">Education</a>
                        </Link>
                    </li>
                    <li className="bg-black mr-5 p-4 border rounded">
                        <Link to="/Certs">
                            <a className="hover:underline">Experience</a>
                        </Link>
                    </li>
                </ul>
                <a href={resume} rel="noreferrer" target="_blank" className=" bg-white rounded px-4 py-4 border border-stone-800 border border-4 text-black">Preview Resume</a>
            </div>
        </div>
    );
}
