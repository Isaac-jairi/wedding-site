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
  onReserve: (id: string, name: string) => Promise<void>;
}

export default function GiftCard({ gift, onReserve }: GiftCardProps) {
  const [open, setOpen] = useState(false);
  const [reserveName, setReserveName] = useState('');
  const [isReserving, setIsReserving] = useState(false);

  const handleReserve = async () => {
    if (!reserveName.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome para reservar este presente.",
        variant: "destructive"
      });
      return;
    }
    
    setIsReserving(true);
    try {
      await onReserve(gift.id, reserveName);
      setOpen(false);
      toast({
        title: "Presente reservado!",
        description: "Obrigado por sua contribuição para nosso casamento."
      });
    } catch (error) {
      toast({
        title: "Erro ao reservar",
        description: "Não foi possível reservar este presente. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsReserving(false);
    }
  };

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
              
              {gift.url && (
                <a 
                  href={gift.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline block mb-6"
                >
                  Ver na loja
                </a>
              )}
              
              {!gift.isReserved && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={reserveName}
                      onChange={(e) => setReserveName(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Digite seu nome para reservar"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Fechar
            </Button>
            
            {!gift.isReserved && (
              <Button 
                onClick={handleReserve} 
                disabled={isReserving}
              >
                {isReserving ? 'Reservando...' : 'Reservar Presente'}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}