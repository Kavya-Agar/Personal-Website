import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Confetti from './Confetti';
import giraffePic from '../assets/giraffe.jpg';
import olivesPic from '../assets/olives.jpg';

export default function Hero({ onContinue }) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Kavya.";

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative text-darkgreen">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-darkgreen"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.h1>
      {Confetti()}
      <img
        src={giraffePic}
        alt="Giraffe"
        className="w-64 h-64 object-cover rounded-lg shadow-lg flex-shrink-0 absolute left-0"
        style={{
          top: `45%`,
          transform: 'rotate(-25deg) translateX(-120%) translateY(-120%)', 
        }}
      />

      <img
        src={olivesPic}
        alt="Olives"
        className="w-64 h-64 object-cover rounded-lg shadow-lg flex-shrink-0 absolute right-0"
        style={{
          top: `45%`,
          transform: 'rotate(25deg) translateX(105%) translateY(-150%)', 
        }}
      />
    </div>
  );
}