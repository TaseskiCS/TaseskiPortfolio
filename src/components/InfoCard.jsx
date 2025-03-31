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

import aws from "../assets/skills/aws.png";
import firebase from "../assets/skills/firebase.webp";
import fastapi from "../assets/skills/fastapi.png";
import spacy from "../assets/skills/spacy.webp";
export default function InfoCard({ img, name, link, skills, desc }) {
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
        'Bootstrap': bootstrap,
        "AWS": aws,
        'Firebase': firebase,
        'spaCy': spacy,
        'FastAPI': fastapi,
    };
    return (
        <div className="group bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="block overflow-hidden">
                <div className="relative">
                    {link[1] ? (
                        <a
                            href={link[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <img 
                                src={img} 
                                alt={name} 
                                className="rounded-t-lg w-full h-[100px] md:h-[200px] md:hover:h-[300px] object-cover transition-all duration-500" 
                            />
                        </a>
                    ) : (
                        <img 
                            src={img} 
                            alt={name} 
                            className="rounded-t-lg w-full h-[100px] md:h-[200px] md:hover:h-[300px] object-cover transition-all duration-500" 
                        />
                    )}
                </div>

            </div>
            <div className="p-5">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <a 
                            href={link[0]} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-neutral-800 underline dark:text-neutral-200 font-bold text-2xl hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-200 block"
                        >
                            {name}
                        </a>
                        <p className="text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">{desc}</p>
                        {skills && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {skills.map((item, index) => (
                                    <span 
                                        key={index} 
                                        className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full px-2 py-1 text-xs"
                                    >
                                        <img src={skillIcons[item] || "/icons/default.png"} alt={item} className="w-5 h-5" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
