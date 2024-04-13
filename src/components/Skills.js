import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"
import Navbar from './Navbar.js';

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import kvm from "../assets/skills/kvm.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import mikrotik from "../assets/skills/mikrotik.svg"
import kubernetes from "../assets/skills/kubernetes.svg"
import ansible from "../assets/skills/ansible.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import cisco from "../assets/skills/cisco.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <div className="h-screen p-20 mt-20 text-white">
            <h3 className="text-5xl font-bold mb-5">Skills</h3>
            <p className="font-light text-gray-400">Here are some of my skills I have experience with in development!</p>

            <div className="mt-20 ">
                <h1 className="mb-2 text-xl font-bold">Languages</h1>
                <Slider {...settings}>
                <SkillCard name="Python" img={python} />
                <SkillCard name="Javascript" img={javascript} />
                <SkillCard name="Typescript" img={react} />
                <SkillCard name="SQL" img={docker} />
                </Slider>
            </div>
            {/* <img src={hr} className="w-full mt-8 md:h-3" alt="hr" /> */}

           

            <div className="mt-6">
            <h1 className="mt-4 mb-2 text-xl font-bold">Frameworks, Libraries and Tools</h1>
                <Slider {...settings}>
                <SkillCard name="React" img={reactIcon} />
                <SkillCard name="Tailwind" img={tailwind} />
                <SkillCard name="Git" experience="1 years" img={git} />
                <SkillCard name="Express" experience="1 years" img={express} />
                <SkillCard name="Flutter" experience="1 years" img={gitlab} />
                </Slider>
            </div>
        </div>
    )
}