"use client";

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-black py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className=" md:text-6xl mb-4 font-tangerine">Lethicia & Isaac</h2>
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-black/60"></div>
            <Heart className="h-6 w-6" />
            <div className="h-[1px] w-12 bg-black/60"></div>
          </div>
          
          <p className="text-xl mb-2">31 de Agosto de 2025</p>
          <p className="mb-8">Casa das Pedras - Cuiabá, MT</p>
          
          <div className="flex justify-center gap-4">
            <a 
              href="#home"
              className="hover:text-black/80 transition-colors"
            >
              Início
            </a>
            <span>•</span>
            <a 
              href="#venue"
              className="hover:text-black/80 transition-colors"
            >
              Local
            </a>
            <span>•</span>
            <a 
              href="#gifts"
              className="hover:text-black/80 transition-colors"
            >
              Presentes
            </a>
          </div>
          
          <div className="mt-8 text-black/60">
            <p>© 2025 Lethicia & Isaac</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}