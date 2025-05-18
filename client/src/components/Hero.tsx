import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { heroImages } from '@/lib/images';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="accueil" 
      className="h-screen flex items-center relative"
      style={{ 
        backgroundImage: `url(${heroImages[0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-['Montserrat']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Solutions de transit douanier rapides et fiables
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-medium">Votre satisfaction notre priorité</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection('devis')}
              className="bg-[#2699D6] hover:bg-[#0A4D8F] text-white py-6 px-8 rounded-md text-lg"
            >
              Demander un devis
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-100 text-gray-800 py-6 px-8 rounded-md text-lg border-none"
            >
              Nous contacter
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
