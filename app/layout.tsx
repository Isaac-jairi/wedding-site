import './globals.css';
import type { Metadata } from 'next';
import { dancingScript, playfairDisplay, cormorantGaramond } from '@/lib/fonts';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Nosso Casamento',
  description: 'Celebre conosco este momento especial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="pt-BR"
      className={`${dancingScript.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}