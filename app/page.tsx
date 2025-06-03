import HeroSection from '@/components/HeroSection';
import VenueSection from '@/components/VenueSection';
import GiftsSection from '@/components/GiftsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <VenueSection />
      <GiftsSection />
      <Footer />
    </main>
  );
}