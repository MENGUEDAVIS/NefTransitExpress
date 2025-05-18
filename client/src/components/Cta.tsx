import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './layouts/SectionContainer';
import { Button } from '@/components/ui/button';

const Cta: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionContainer id="devis" className="bg-gray-800 text-white">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 font-['Montserrat']"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Prêt à simplifier vos opérations douanières ?
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl mb-8 opacity-90"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé adapté à vos besoins spécifiques.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-[#2699D6] hover:bg-[#0A4D8F] text-white py-6 px-8 rounded-md text-lg inline-block"
          >
            Demander un devis gratuit
          </Button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default Cta;
