import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './layouts/SectionContainer';
import { Check, MapPin } from 'lucide-react';
import { officeImage } from '@/lib/images';

const About: React.FC = () => {
  const features = [
    "Service rapide",
    "Expérience professionnelle",
    "Solutions sur mesure",
    "Accompagnement complet"
  ];

  return (
    <SectionContainer id="a-propos" className="bg-gray-50">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={officeImage} 
            alt="NEF TRANSIT EXPRESS SARL bureaux" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
        
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <h2 className="text-sm uppercase tracking-wider text-[#2699D6] font-semibold mb-2">À propos de nous</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-['Montserrat']">Votre partenaire en transit douanier et logistique</h3>
            <div className="w-20 h-1 bg-[#2699D6] mb-6"></div>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            NEF TRANSIT EXPRESS SARL est une entreprise spécialisée dans le transit douanier et l'expédition de fret. Avec notre expertise et notre engagement envers l'excellence, nous vous offrons des solutions logistiques complètes adaptées à vos besoins spécifiques.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#2699D6] rounded-full p-3 text-white">
                <MapPin size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2 font-['Montserrat']">Notre localisation</h4>
                <p className="text-gray-700">
                  Situé à Ekie, au carrefour de l'amitié, en face du collège Le Bon Berger
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#2699D6]/10 flex items-center justify-center text-[#2699D6] mr-4">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default About;
