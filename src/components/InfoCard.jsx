import javascript from "../assets/skills/javascript.svg";
import python from "../assets/skills/python.svg";
import html from "../assets/skills/html.svg";
import sql from "../assets/skills/sql.png";
import typescript from "../assets/skills/typescript.png";
import css from "../assets/skills/css.png";
import dart from "../assets/skills/Dart_logo.png";
import lua from "../assets/skills/lua.png";
import java from "../assets/skills/java.png";

import reactIcon from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import git from "../assets/skills/git.svg";
import express from "../assets/skills/express.svg";
import node from "../assets/skills/nodejs.svg";
import angular from "../assets/skills/angular.png";
import SCSS from "../assets/skills/scss.png";
import jquery from "../assets/skills/jquery.png";
import django from "../assets/skills/django.png";
import mysql from "../assets/skills/mysql.png";
import mongo from "../assets/skills/mongo.png";
import flutter from "../assets/skills/flutter.png";
import nextjs from "../assets/skills/nextjs.png";
import bert from "../assets/skills/bert.png";
import bootstrap from "../assets/skills/bootstrap.png";
export default function InfoCard(props){
    const skillIcons = {
        "JavaScript": javascript,
        "Python": python,
        "HTML": html,
        "SQL": sql,
        "TypeScript": typescript,
        "CSS": css,
        "Dart": dart,
        "Lua": lua,
        "Java": java,
        "React": reactIcon,
        "Tailwind": tailwind,
        "Git": git,
        "Express.js": express,
        "Node.js": node,
        "Angular": angular,
        "SCSS": SCSS,
        "jQuery": jquery,
        "Django": django,
        "MySQL": mysql,
        "MongoDB": mongo,
        "Flutter": flutter,
        'Next.js': nextjs,
        'BERT': bert,
        'Bootstrap': bootstrap
    };
    
    
    return (
        <div className="relative hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
            <div className='flex justify-center'>
                <img 
                    src={props.img} 
                    className="w-full md:w-2/3 h-52 md:h-64 object-cover  shadow-md border-white border-2 rounded-xl" 
                    alt={props.name} 
                />

            </div>

            
            <div className="mt-2 text-center">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <a className="flex justify-center" href={props.link} rel="noreferrer" target="_blank">
                    <p className="text-sm underline underline-offset-1 text-blue-600 font-light md:text-xl">{props.linkTitle}</p>
                </a>
            </div>
        
           <div className="flex mt-4 flex-col md:flex-row items-start gap-4">
                {props.skills && (
                    <div className="flex flex-wrap w-full md:w-1/2 justify-center md:justify-start gap-2 gap-y-2 self-start">
                        {props.skills.map((item, index) => (
                            <span 
                                key={index} 
                                className="flex items-center gap-2 bg-gray-400 rounded-lg px-2 py-1 text-[10px] md:text-xs md:px-4 md:py-2 font-bold border-white border-2 text-white transition-all duration-300 hover:bg-gray-500 hover:scale-105"
                            >
                                <img src={skillIcons[item] || "/icons/default.png"} alt={item} className="w-5 h-5" />
                                {item}
                            </span>
                        ))}
                    </div>
                )}
                <div className="flex-1 border-2 rounded-xl p-2 border-white min-h-[80px]">
                    {props.desc}
                </div>
            </div>


        </div>
    )
}
