import HeroSection from '@/components/HeroSection';
import VenueSection from '@/components/VenueSection';
import GiftsSection from '@/components/GiftsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import Countdown from '@/components/countDown';
import WelcomeSection from '@/components/WelcomeSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <Countdown />
      <WelcomeSection />
      {/* <AboutSection /> */}
      <VenueSection />
      <GiftsSection />
      <Footer />
    </main>
  );
}