"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function VenueSection() {
  return (
    <section id="venue" className="venue-section">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">O Local</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos ansiosos para celebrar este momento especial com você
          </p>
        </motion.div>
        
        <Card className="overflow-hidden border-none  shadow-xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <AspectRatio ratio={16/9}>
                  <Image
                    src="https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Local do casamento"
                    fill
                    className="object-cover rounded-md"
                  />
                </AspectRatio>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="p-8 flex flex-col justify-center"
              >
                <h3 className="text-3xl mb-4">Jardim das Flores</h3>
                <p className="mb-6 text-lg">
                  Rua das Rosas, 123<br/>
                  São Paulo - SP<br/>
                  CEP: 01234-567<br/>
                  <a 
                    href="tel:+551199999999" 
                    className="text-secondary hover:underline mt-2 inline-block"
                  >
                    (11) 9999-9999
                  </a>
                </p>
                
                <div className="h-[300px] relative rounded-md overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976683417!2d-46.654599!3d-23.563294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678878844958!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://maps.app.goo.gl/JHwH8CSCQRVfeBFx9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-2 bg-secondary text-white rounded-md hover:bg-opacity-80 transition-all duration-300"
                  >
                    Como chegar
                  </a>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}