"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Countdown from "./countDown";

export default function AboutSection() {
  return (
    <section id="about" className="about-section py-10">
      <div className="container mx-auto px-4">
       
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl mb-4 font-tangerine">Nós</h2>
        </motion.div>

        <Card className="overflow-hidden border-none shadow-xl [box-shadow:0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <CardContent className="p-6 md:p-10">
             
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lado esquerdo - texto */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center"
              >
                <p className="text-lg font-light leading-relaxed text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac eros eu velit euismod tristique. Integer scelerisque
                  pulvinar turpis, vel tincidunt nulla ultrices sed. Quisque
                  pretium, sapien id luctus feugiat, ante justo cursus massa,
                  eget laoreet lorem nisl et justo. Nam fermentum suscipit
                  dignissim.
                </p>
              </motion.div>

              {/* Lado direito - imagem */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex justify-center items-center"
              >
                <div className="rounded-xl overflow-hidden max-w-md w-lg h-auto">
                  <Image
                    src="/Noivado.jpeg"
                    alt="Foto do Noivado"
                    width={500}
                    height={300}
                    className="rounded-xl object-cover w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
