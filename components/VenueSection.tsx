"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function VenueSection() {
  return (
    <section id="venue" className=" py-16">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl mb-4 font-tangerine">O Local</h2>
          <p className="text-lg md:text-xl  max-w-2xl mx-auto  font-cormorant">
            Este é o local onde celebraremos nosso amor e união!
          </p>
        </motion.div>

        <Card className="overflow-hidden border-none shadow-xl [box-shadow:0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full h-96 md:h-full overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.573623972398!2d-56.12195993037067!3d-15.62929860754428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dadf940adbf37%3A0x1d5aacfdec14d595!2sBuffet%20Casa%20das%20Pedras!5e0!3m2!1spt-BR!2sbr!4v1749132730190!5m2!1spt-BR!2sbr"
                  className="w-full h-96 border-0 "
                  loading="lazy"
                  title="Mapa – Casa das Pedras"
                ></iframe>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="p-8 flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl mb-4 font-tangerine">Casa das Pedras</h3>
                <p className="text-md  max-w-2xl font-cormorant">
                  Av. Cerrados, 9 – Vinte e Três de Setembro
                </p>
                <p className="text-md  max-w-2xl font-cormorant">Várzea Grande – MT</p>
                <p className="text-md   max-w-2xl font-cormorant">CEP: 78115-851</p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
