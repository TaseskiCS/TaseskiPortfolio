import CertCard from "../CertCard.js"


import serblink from "../../assets/serblinkoutline.png"
import citizenfx from "../../assets/cfx.jpg"
import lcs from "../../assets/lcs.png"

import "./index.scss";

const data = [
    {
      title: 'Software Developer Intern',
      company: 'Serblink',
      logo: serblink,
      link: 'https://serblink.org',
      date: 'March 2024 - October 2024'
    },
    {
        title: 'Mobile Developer',
        company: 'Laurier Computing Society',
        link: 'https://lauriercs.ca',
        logo: lcs,
        date: 'February 2024 - April 2024'
    },
    {
      title: 'Full Stack Engineer',
      company: 'CitizenFx',
      logo: citizenfx,
      link: "https:/cfx.re",
      date: "January 2021 - December 2023"
    }
  ];


const VerticalTimeline = (props) => {
    const { data } = props;
    const items = data.map((item, index) => {
      const { title, company, body, background, link, logo, date } = item;
      const __background = `url("${background}")`;
      
      return(
        <TimelineItem
          key={index}
          index={index}
          title={title}
          company = {company}
          body={body}
          backgroundImage={__background}
          logo={logo}
          link={link}
          date = {date}
        />
      );
    });
    return <div className="vertical-timeline">{items}</div>;
  }
  
  const TimelineItem = (props) => {
    const {
      index,
      title,
      company,
      body,
      backgroundImage,
      logo,
      link,
      date
    } = props;
    const cls = `timeline vertical-timeline--item ${index % 2 !== 0 ? 'right' : ''}`;
    return(
      <>
        <div id="Experience" className={cls}>
            <div className="vertical-timeline--badge"></div>
            <div className="vertical-timeline--content" style={{ backgroundImage }}>
            <div className='flex justify-between items-center'>


                <CertCard name={title} type='image'img={logo} link ={link}linkTitle={company} date={date} />
                

            </div>
            </div>
        </div>
      </>
    );
  }
  

  
 


export default function Experience(){
    return (
        <>
            <div className="mt-24">
                <div className="mt-24 flex justify-center">
                    <h3 className="font-bold text-5xl mt-24">Experience</h3>
                
                </div>
                <VerticalTimeline data={data} />
            </div>
        </>
    )
}

