import React from 'react';
import "./index.css";

import javascript from "../../../assets/skills/javascript.svg";
import python from "../../../assets/skills/python.svg";
import html from "../../../assets/skills/html.svg";
import sql from "../../../assets/skills/sql.png";
import typescript from "../../../assets/skills/typescript.png";
import css from "../../../assets/skills/css.png";
import dart from "../../../assets/skills/Dart_logo.png";
import lua from "../../../assets/skills/lua.png";
import java from "../../../assets/skills/java.png";

import reactIcon from "../../../assets/skills/react.svg";
import tailwind from "../../../assets/skills/tailwind.svg";
import git from "../../../assets/skills/git.svg";
import express from "../../../assets/skills/express.svg";
import node from "../../../assets/skills/nodejs.svg";
import angular from "../../../assets/skills/angular.png";
import SCSS from "../../../assets/skills/scss.png";
import jquery from "../../../assets/skills/jquery.png";
import django from "../../../assets/skills/django.png";
import mysql from "../../../assets/skills/mysql.png";
import mongo from "../../../assets/skills/mongo.png";
import flutter from "../../../assets/skills/flutter.png";
import nextjs from "../../../assets/skills/nextjs.png";
import bert from "../../../assets/skills/bert.png";
import bootstrap from "../../../assets/skills/bootstrap.png";

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Node', 'SQL', 'Python', 'Django', 'MongoDB', 'Flutter', 'Dart', 'Lua', 'Java', 'Git', 'Express', 'Angular', 'SCSS', 'jQuery', 'MySQL', 'NextJS', 'BERT', 'Bootstrap'];
const DURATION = 20500;
const ROWS = 3;
const TAGS_PER_ROW = TAGS.length;


const TAG_ICONS = {
  HTML: html,
  CSS: css,
  JavaScript: javascript,
  Typescript: typescript,
  Tailwind: tailwind,
  React: reactIcon,
  Node: node,
  SQL: sql,
  Python: python,
  Django: django,
  MongoDB: mongo,
  Flutter: flutter,
  Dart: dart,
  Lua: lua,
  Java: java,
  Git: git,
  Express: express,
  Angular: angular,
  SCSS: SCSS,
  jQuery: jquery,
  MySQL: mysql,
  NextJS: nextjs,
  BERT: bert,
  Bootstrap: bootstrap
};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text, icon }) => (
  <div className="tag">
    {icon && <img src={icon} alt={`${text} icon`} className="tag-icon" />}
    <span> {text}</span>
  </div>
);

const Carousel = () => (
  <div className="Carousel">
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} icon={TAG_ICONS[tag]} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  </div>
);

export default Carousel;
