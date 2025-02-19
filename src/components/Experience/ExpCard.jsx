import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'


const ExpCard = (props) => {
    return (
        
        <div className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
            
            <img src={props.img} className="w-auto h-24 mx-auto" alt={props.name}></img>
            <div className="mt-2 text-center">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <a className="flex justify-center"href = {props.link} rel="noreferrer" target="_blank"><p className="text-sm underline underline-offset-1 text-blue-600 font-light md:text-xl">{props.linkTitle}</p></a>
                <p className="font-light text-gray-400">{props.desc}</p>
                <p className="font-light text-gray-400 text-xs md:text-xl">{props.date}</p>
            </div>
            <div className='flex mt-5 justify-center'> 
                <SlideSection Content={SlideContent} info={props.info}>View Details</SlideSection>
            </div>
        </div>
        
    )
}

const SlideSection = ({ children, Content, info }) => {
    const [open, setOpen] = useState(false);
    const showSlide = open && Content;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative h-fit w-fit flex flex-col items-center"
        >
            <a  className="relative text-white font-bold flex justify-center">
                <div className="flex items-center justify-center">{children}</div>
                <span
                    style={{
                        transform: showSlide ? "scaleX(1.25)" : "scaleX(0.7)",
                    }}
                    className="absolute -bottom-2 right-1/1.5 -translate-x-1/2 h-1 w-full max-w-[120%] 
                    origin-center rounded-full bg-white transition-transform duration-300 ease-out"
                />
            </a>

            <AnimatePresence>
                {showSlide && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="mt-5 bg-transparent text-white overflow-hidden"
                    >
                        <Content info={info} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};



const SlideContent = ({info})=> {
    return (
        <>
            <div className='w-92 bg-transparent p-2 shadow-xl'>
                {info.map((item, index)=>(
                    <ul>
                        <li className='border-2 border-slate-300 rounded-lg p-2 mb-5'>
                            {item}
                        </li>
                    </ul>
                ))}
               
            </div>
        
        </>
    
    )
}

export default ExpCard