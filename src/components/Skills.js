import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

// Language icons for card
import javascript from "../assets/skills/javascript.svg"
import python from "../assets/skills/python.svg"
import html from "../assets/skills/html.svg"
import sql from "../assets/skills/sql.png"
import typescript from '../assets/skills/typescript.png'
import css from '../assets/skills/css.png'
import dart from '../assets/skills/Dart_logo.png'
import lua from '../assets/skills/lua.png'

// Framework/Library icons for card
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import node from "../assets/skills/nodejs.svg"
import angular from '../assets/skills/angular.png'
import SCSS from '../assets/skills/scss.png'
import jquery from '../assets/skills/jquery.png'
import django from '../assets/skills/django.png'
import mysql from '../assets/skills/mysql.png'
import mongo from '../assets/skills/mongo.png'
import flutter from '../assets/skills/flutter.png'


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
                <SkillCard name="Typescript" img={typescript} />
                <SkillCard name="SQL" img={sql} />
                <SkillCard name="HTML" img={html} />
                <SkillCard name="CSS" img={css} />
                <SkillCard name="Dart" img={dart} />
                <SkillCard name="Lua" img={lua} />
                </Slider>
            </div>

           

            <div className="mt-6">
            <h1 className="mt-4 mb-2 text-xl font-bold">Frameworks, Libraries and Tools</h1>
                <Slider {...settings}>
                <SkillCard name="React" img={reactIcon} />
                <SkillCard name="Angular" img={angular} />
                <SkillCard name="Node" img={node} />
                <SkillCard name="Tailwind CSS" img={tailwind} />
                <SkillCard name="SCSS" img={SCSS} />
                <SkillCard name="jQuery" img={jquery} />
                <SkillCard name="Django" img={django} />
                <SkillCard name="MySQL" img={mysql} />
                <SkillCard name="MongoDB" img={mongo} />
                <SkillCard name="Git" img={git} />
                <SkillCard name="Express" img={express} />
                <SkillCard name="Flutter" img={flutter} />                
                </Slider>
            </div>
        </div>
    )
}