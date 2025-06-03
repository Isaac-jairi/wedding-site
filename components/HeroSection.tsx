"use client";

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div 
        className="hero-background" 
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
      />
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h2 
          className="text-xl md:text-2xl uppercase tracking-widest mb-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Convidamos você para celebrar nosso casamento
        </motion.h2>
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl mb-8 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Lethicia & Isaac
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          31 de Agosto de 2025
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a 
            href="#venue" 
            className="px-8 py-3 border-2 border-white rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 inline-block"
          >
            Saiba mais
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}