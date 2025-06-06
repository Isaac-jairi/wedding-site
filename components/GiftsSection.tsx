"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import GiftCard from '@/components/GiftCard';

// Define the Gift type based on your Prisma schema
export interface Gift {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  urlStripe: string;
  urlPix: string;
  isReserved: boolean;
  reservedBy: string | null; // Nullable if not reserved
}
// Mock data - in a real application, this would come from Prisma DB
const MOCK_GIFTS: Gift[] = [
  {
    id: '1',
    name: 'Jogo de Copos',
    description: 'Conjunto decopos de alta qualidade para a nossa nova cozinha.',
    price: 599.90,
    imageUrl: 'https://m.media-amazon.com/images/I/715hvgVy7jL.jpg',
   urlStripe: 'https://buy.stripe.com/9B6eVf0KCdcdgKtdegg7e00',
   urlPix: 'https://nubank.com.br/cobrar/1jehu0/6842609c-7961-4dba-94c1-e7ab625a197c',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '2',
    name: 'Liquidificador',
    description: 'Liquidificador potente para preparar nossas refeições do dia a dia.',
    price: 299.90,
    imageUrl: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    urlStripe: 'https://www.example.com/liquidificador',
    urlPix: 'https://www.example.com/cafeteira-pix',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '3',
    name: 'Jogo de Toalhas',
    description: 'Conjunto de toalhas macias e absorventes para o nosso novo lar.',
    price: 199.90,
    imageUrl: 'https://images.pexels.com/photos/4210312/pexels-photo-4210312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   urlStripe: 'https://www.example.com/toalhas',
   urlPix: 'https://www.example.com/cafeteira-pix',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '4',
    name: 'Cafeteira',
    description: 'Cafeteira automática para nossas manhãs perfeitas juntos.',
    price: 449.90,
    imageUrl: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    urlStripe: 'https://www.example.com/cafeteira',
    urlPix: 'https://www.example.com/cafeteira-pix',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '5',
    name: 'Jogo de Copos',
    description: 'Copos elegantes para nossas refeições e recepções em casa.',
    price: 179.90,
    imageUrl: 'https://images.pexels.com/photos/1203804/pexels-photo-1203804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   urlStripe: 'https://www.example.com/copos',
   urlPix: 'https://www.example.com/cafeteira-pix',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '6',
    name: 'Jogo de Cama',
    description: 'Lençóis de algodão egípcio para o máximo conforto.',
    price: 399.90,
    imageUrl: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    urlStripe: 'https://www.example.com/jogo-cama',
    urlPix: 'https://www.example.com/cafeteira-pix',
    isReserved: false,
    reservedBy: null
  }
];

export default function GiftsSection() {
  const [gifts, setGifts] = useState<Gift[]>(MOCK_GIFTS);


  return (
    <section id="gifts" className="gifts-section">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Lista de Presentes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Sua presença é nosso maior presente, mas se desejar nos presentear, 
            selecionamos algumas opções para o início de nossa vida a dois
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gifts.map((gift) => (
            <GiftCard 
              key={gift.id} 
              gift={gift} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}