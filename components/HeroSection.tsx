"use client";

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div 
        className="hero-background" 
        style={{ backgroundImage: "url('/campo2.jpg')", }}
      />
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h2 
          className="text-xl md:text-2xl mb-8 font-cormorant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Convidamos você para celebrar nosso casamento
        </motion.h2>
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl mb-8 font-bold font-tangerine"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Lethícia & Isaac
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-cormorant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          31 de agosto de 2025
        </motion.p>
        
      </motion.div>
      <motion.div 
        className="absolute bottom-12 left-auto transform -translate-x-1/2 text-white flex flex-col items-center z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}