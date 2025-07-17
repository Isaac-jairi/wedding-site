"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Countdown from "./countDown";

export default function WelcomeSection() {
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
          <h2 className="text-4xl md:text-6xl mb-4 font-tangerine"></h2>
        </motion.div>

        <Card className="overflow-hidden border-none shadow-xl [box-shadow:0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <CardContent className="p-6 md:p-10">
             
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
              {/* Lado esquerdo - texto */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center"
              >
                <div className="rounded-xl overflow-hidden max-w-md w-lg h-auto mx-auto">
                  <Image
                    src="/Noivado.jpeg"
                    alt="Foto do Noivado"
                    width={500}
                    height={300}
                    className="rounded-xl object-cover w-full h-auto"
                  />
                </div>
                
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col justify-center items-center"
              >
                <p className="text-4xl md:text-5xl mb-4 font-tangerine">Queridos amigos e familiares, sejam bem-vindos! </p>
                <p className="text-lg md:text-xl  max-w-2xl font-cormorant">
                    Estamos transbordando alegria com a chegada desse momento tão sonhado e mal podemos esperar para celebrá-lo ao lado das pessoas que mais amamos: vocês!
                    <br/>
                    Neste espaço reunimos informações importantes sobre o grande dia, então pedimos que leiam com atenção. Tudo está sendo feito com muito amor e dedicação!
                    <br/>
                    <br/>
                    A cerimônia e a recepção serão no mesmo local: Buffet Casa das Pedras. A localização está disponível para vocês aqui no site! 
                    <br/>
                    Cheguem às 15h para se acomodarem e tirarem muitas fotos, pois a partir das 15h30 daremos início à cerimônia! Seremos pontuais!
                    <br/>
                    <br/>
                    Com muito carinho, informamos que as cores destinadas aos trajes dos padrinhos, pajens e da florista serão champanhe, amarelo claro  e tons de rosa. Assim, gentilmente pedimos que essas cores sejam evitadas pelos demais convidados, a fim de mantermos a harmonia visual da cerimônia.
                    <br/>
                    <br/>
                    Como o casamento acontecerá no meio da tarde, sugerimos que optem por cores vivas e alegres, que combinem com o clima leve e festivo desse momento tão especial!
                    Somos muito gratos pela compreensão e pelo carinho de todos!
                    <br/>
                    <br/>
                    Para confirmação de presença, basta nos enviar uma mensagem no WhatsApp. Iremos falar com cada um de vocês de maneira individual e personalizada! Lembrando que essa confirmação é muitíssimo importante!
                    <br/>
                    <br/>
                    E se quiserem nos presentear, preparamos uma lista com algumas opções, estejam à vontade para escolher! Mas saibam que a presença de vocês é o que mais importa para nós!
                    <br/>
                    <br/>
                    Com muito amor,
                    <br/>
                    Lethícia & Isaac.
                </p>
              </motion.div>

            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
