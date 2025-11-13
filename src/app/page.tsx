import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Capabilities } from '@/components/sections/Capabilities';
import { Highlights } from '@/components/sections/Highlights';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  );
}