import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import giraffePic from '../assets/giraffe.jpg';
import olivesPic from '../assets/olives.jpg';
import '../styles/Hero.css';

export default function Hero({ onContinue }) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Kavya.";

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center relative min-h-screen">
      <motion.h1
        className="text-4xl md:text-6xl font-medium mb-6 mt-16"
        style={{ color: '#0f420f' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.h1>
      <div className="flex flex-row gap-8 mt-8">
        <img
          src={giraffePic}
          alt="Giraffe"
          className="giraffe-pic"
        />
        <img
          src={olivesPic}
          alt="Olives"
          className="olives-pic"
        />
      </div>
    </div>
  );
}
