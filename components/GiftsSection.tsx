// app/components/GiftsSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GiftCard, { Gift } from './GiftCard';

export default function GiftsSection() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/gifts')
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json() as Promise<Gift[]>;
      })
      .then((data) => setGifts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="py-10 text-center">Carregando presentes…</div>;
  }
  if (error) {
    return (
      <div className="py-10 text-center text-red-500">
        Erro ao carregar presentes: {error}
      </div>
    );
  }

  return (
    <section id="gifts" className="py-16">
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
            selecionamos algumas opções para o início de nossa vida a dois.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {gifts.map((g) => (
            <GiftCard key={g.id} gift={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
