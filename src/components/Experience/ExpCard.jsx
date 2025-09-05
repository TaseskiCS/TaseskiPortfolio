import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ExpCard = ({ img, name, link, linkTitle, desc, date, info }) => {
  return (
    <div className="w-full h-full bg-dark-200 rounded-lg p-6 transition-all duration-300 hover:bg-dark hover:shadow-lg">
      <div className="flex flex-col items-center">
        <img 
          src={img} 
          className="w-auto h-20 object-contain mb-4" 
          alt={name}
        />
        
        <div className="space-y-2 text-center">
          <h1 className="font-bold text-lg md:text-xl">{name}</h1>
          
          <a 
            href={link} 
            rel="noreferrer" 
            target="_blank"
            className="inline-block text-blue-500 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
          >
            {linkTitle}
          </a>
          
          <p className="text-gray-400 text-sm md:text-base">{desc}</p>
          <p className="text-gray-500 text-xs md:text-sm">{date}</p>
        </div>
        
        <div className="mt-6">
          <DetailSection info={info} />
        </div>
      </div>
    </div>
  );
};

const DetailSection = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-white font-medium text-sm py-1 px-2 rounded-md bg-opacity-20 hover:bg-opacity-30 bg-white transition-all duration-300"
      >
        <span>{isOpen ? 'Hide Details' : 'View Details'}</span>
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </motion.svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full mt-4 overflow-hidden"
          >
            <DetailContent info={info} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DetailContent = ({ info }) => {
  return (
    <div className="w-full max-w-md space-y-3">
      {info.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className="bg-dark-300 rounded-lg p-3 border border-gray-700 text-sm text-gray-300"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default ExpCard;