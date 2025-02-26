import ExpCard from "./ExpCard";
import serblink from "../../assets/serblinkoutline.png";
import citizenfx from "../../assets/cfx.jpg";
import lcs from "../../assets/lcs.png";

const data = [
  {
    title: "Software Developer Intern",
    company: "Serblink",
    logo: serblink,
    link: "https://serblink.org",
    date: "March 2024 - October 2024",
    descriptions: [
      "Maintained AngularJS frontend with TypeScript, integrating server API’s to fetch and display dynamic data",
      "Ensured seamless testing and deployments ran within the CI/CD Pipeline, by automating unit tests",
      "Developed features including transaction handling, authentication, role based accounts, and translation",
      "Transformed Figma designs into highly responsive UI, across devices using HTML, SCSS, and Bootstrap",
      "Received and acted on high priority tasks directly from CTO, efficiently completing them on time"
    ]
  },
  {
    title: "Mobile Developer",
    company: "Laurier Computing Society",
    link: "https://lauriercs.ca",
    logo: lcs,
    date: "February 2024 - April 2024",
    descriptions: [
      "Partnered with team to develop an emotion recognition mobile app, following the SDLC principles, delivering efficient and high-quality features.",
      "Implemented a comprehensive statistics page to visualize journal entries with AI-driven speech analysis",
      "Coordinated with designers using Figma to create an intuitive and visually engaging frontend in Flutter",
      "Developed ML pipeline integrating BERT and Whisper models processing speech, with 98% accuracy",
    ]
  },
  {
    title: "Full Stack Engineer",
    company: "Cfx.re",
    logo: citizenfx,
    link: "https://cfx.re",
    date: "January 2021 - December 2023",
    descriptions: [
      "Engineered and maintained user-friendly frontend interfaces for clients, utilizing jQuery, HTML, CSS",
      "Built structured backend, focused on game logic using Node.js with Lua to ensure seamless experiences",
      "Optimized resource utilization for cloud based instances (AWS, OVH) handling 1000s of connections",
      "Stored diverse player data including inventory, state, currency in a highly relational MySQL database",
    ]
  }
];

const VerticalTimeline = () => {
  return (
    <div className="relative mx-auto w-full max-w-6xl py-20 px-4 md:px-0">
      
      {/* Timeline Line - Centered on Large Screens, Moves Left on Small Screens */}
      <div className="absolute left-1/2 md:left-1/2 top-0 h-full w-[3px] bg-gray-300 transform -translate-x-1/2 md:translate-x-0"></div>

      {data.map((item, index) => (
        <TimelineItem key={index} {...item} isRight={index % 2 !== 0} />
      ))}
    </div>
  );
};

const TimelineItem = ({ title, company, logo, link, date, descriptions, isRight }) => {
  return (
    <div className="relative flex w-full mb-12 md:mb-30 flex-col md:flex-row items-center">
      
      {/* Timeline Dot - Stays on the Timeline at All Times */}
      <div className="absolute left-1/2 md:left-1/2 -translate-x-1/2 top-5 h-4 w-4 rounded-full bg-blue-500"></div>

      {/* Timeline Card (Centered on Small Screens, Alternating on Large Screens) */}
      <div className={`relative w-full md:w-[48%] max-w-[600px] p-1/2 bg-white shadow-lg rounded-lg border border-gray-200 ${
        isRight ? "md:ml-auto" : "md:mr-auto"
      }`}>
        <ExpCard name={title} type="image" img={logo} link={link} linkTitle={company} date={date} info={descriptions} />
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div className="mt-24 flex flex-col items-center">
      <h3 className="text-5xl font-bold mb-12">Experience</h3>
      <VerticalTimeline />
    </div>
  );
}
