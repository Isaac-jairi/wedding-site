import { Dancing_Script, Playfair_Display, Cormorant_Garamond, Tangerine } from 'next/font/google';

export const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
});

export const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const cormorantGaramond = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});


export const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-tangerine', // necessário se for usar com Tailwind
});