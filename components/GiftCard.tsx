"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Gift } from './GiftsSection';

interface GiftCardProps {
  gift: Gift;
}

export default function GiftCard({ gift }: GiftCardProps) {
  const [open, setOpen] = useState(false);

  
  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card 
          className="gift-card h-full cursor-pointer overflow-hidden"
          onClick={() => setOpen(true)}
        >
          <CardContent className="p-0 h-full flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src={gift.imageUrl}
                alt={gift.name}
                fill
                className="object-cover"
              />
              {gift.isReserved && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Reservado</span>
                </div>
              )}
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-medium">{gift.name}</h3>
              <p className="text-muted-foreground line-clamp-2 mt-1 mb-2 flex-1">{gift.description}</p>
              <p className="font-semibold">R$ {gift.price.toFixed(2)}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{gift.name}</DialogTitle>
            <DialogDescription>
              {gift.isReserved ? (
                <span className="text-red-500 font-medium">Este presente já foi reservado por {gift.reservedBy}</span>
              ) : (
                <span>Detalhes do presente</span>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full rounded-md overflow-hidden">
              <Image
                src={gift.imageUrl}
                alt={gift.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <p className="mb-4">{gift.description}</p>
              <p className="text-xl font-semibold mb-6">R$ {gift.price.toFixed(2)}</p>
              
              {gift.urlStripe && (
                <a 
                  href={gift.urlStripe} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline block mb-6"
                >
                  Pagar com Cartão de Crédito
                </a>
              )}
              {gift.urlPix && (
                <a 
                  href={gift.urlPix} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline block mb-6"
                >
                  Pagar com Pix
                </a>
              )}

              
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Fechar
            </Button>
            
            
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}