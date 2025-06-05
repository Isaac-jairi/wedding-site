"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GiftCard from '@/components/GiftCard';
import { Gift } from '@prisma/client';

// Mock data - in a real application, this would come from Prisma DB
const MOCK_GIFTS: Gift[] = [
  {
    id: '1',
    name: 'Jogo de Panelas',
    description: 'Conjunto de panelas antiaderentes de alta qualidade para a nossa nova cozinha.',
    price: 599.90,
    imageUrl: 'https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://www.example.com/jogo-panelas',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '2',
    name: 'Liquidificador',
    description: 'Liquidificador potente para preparar nossas refeições do dia a dia.',
    price: 299.90,
    imageUrl: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://www.example.com/liquidificador',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '3',
    name: 'Jogo de Toalhas',
    description: 'Conjunto de toalhas macias e absorventes para o nosso novo lar.',
    price: 199.90,
    imageUrl: 'https://images.pexels.com/photos/4210312/pexels-photo-4210312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://www.example.com/toalhas',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '4',
    name: 'Cafeteira',
    description: 'Cafeteira automática para nossas manhãs perfeitas juntos.',
    price: 449.90,
    imageUrl: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://www.example.com/cafeteira',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '5',
    name: 'Jogo de Copos',
    description: 'Copos elegantes para nossas refeições e recepções em casa.',
    price: 179.90,
    imageUrl: 'https://images.pexels.com/photos/1203804/pexels-photo-1203804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://www.example.com/copos',
    isReserved: false,
    reservedBy: null
  },
  {
    id: '6',
    name: 'Jogo de Cama',
    description: 'Lençóis de algodão egípcio para o máximo conforto.',
    price: 399.90,
    imageUrl: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://www.example.com/jogo-cama',
    isReserved: false,
    reservedBy: null
  }
];

export default function GiftsSection() {
  const [gifts, setGifts] = useState<Gift[]>(MOCK_GIFTS);

  // In a real application, we would fetch gifts from the API
  // useEffect(() => {
  //   const fetchGifts = async () => {
  //     const response = await fetch('/api/gifts');
  //     const data = await response.json();
  //     setGifts(data);
  //   };
  //
  //   fetchGifts();
  // }, []);

  const handleReserveGift = async (id: string, name: string) => {
    // In a real application, this would be an API call
    // await fetch(`/api/gifts/${id}/reserve`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name })
    // });
    
    // Mock update
    setGifts(gifts.map(gift => 
      gift.id === id ? { ...gift, isReserved: true, reservedBy: name } : gift
    ));
    
    // Simulate API delay
    return new Promise<void>(resolve => setTimeout(() => resolve(), 800));
  };

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
              onReserve={handleReserveGift} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}