
'use client'

import { useEffect, useState } from 'react';

const targetDate = new Date('2025-08-31T00:00:00');

function getTimeRemaining(endDate: Date) {
  const total = endDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' px-5'>

    <div className="flex flex-col  items-center justify-center p-4 bg-white/80  w-fit mx-auto my-10 font-cormorant ">
      <h2 className="text-4xl md:text-6xl mb-4 font-tangerine">Contagem regressiva para o grande dia!</h2>
      <div className="flex gap-6 text-center  text-lg sm:text-xl font-cormorant">
        <TimeBox label="Dias" value={timeLeft.days} />
        <TimeBox label="Horas" value={timeLeft.hours} />
        <TimeBox label="Min" value={timeLeft.minutes} />
        <TimeBox label="Seg" value={timeLeft.seconds} />
      </div>
    </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold">{value.toString().padStart(2, '0')}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
