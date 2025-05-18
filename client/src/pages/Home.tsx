import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Set the title
    document.title = "NEF TRANSIT EXPRESS SARL - Transport et Logistique";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <Partners />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
