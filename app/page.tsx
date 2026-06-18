import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Transformations } from '@/components/Transformations';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { Booking } from '@/components/Booking';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-iron-50 text-iron-950 dark:bg-iron-950 dark:text-iron-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <Transformations />
      <Pricing />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
