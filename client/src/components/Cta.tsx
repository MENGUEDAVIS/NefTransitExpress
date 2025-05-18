import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './layouts/SectionContainer';
import { Button } from '@/components/ui/button';
import { Truck, FileText, Clock, Check } from 'lucide-react';

const Cta: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { icon: <Truck className="h-6 w-6" />, text: "Transit express et efficace" },
    { icon: <FileText className="h-6 w-6" />, text: "Documentation simplifiée" },
    { icon: <Clock className="h-6 w-6" />, text: "Délais optimisés" },
    { icon: <Check className="h-6 w-6" />, text: "Service personnalisé" }
  ];

  return (
    <SectionContainer id="devis" className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden py-20">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#2699D6]/10 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#2699D6]/10 -ml-10 -mb-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Montserrat']">
              Prêt à simplifier vos opérations douanières ?
            </h2>
            
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé adapté à vos besoins spécifiques.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className="flex-shrink-0 mr-3 bg-[#2699D6]/20 p-2 rounded-full">
                    {benefit.icon}
                  </div>
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-[#2699D6] hover:bg-[#0A4D8F] text-white py-6 px-8 rounded-md text-lg"
              >
                Demander un devis gratuit
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#2699D6]/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-[#2699D6]/10 p-8 rounded-lg">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-center">Pourquoi nous choisir ?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 text-[#2699D6]">
                        <Check className="h-5 w-5" />
                      </div>
                      <p>Expertise reconnue dans le secteur du transit douanier</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 text-[#2699D6]">
                        <Check className="h-5 w-5" />
                      </div>
                      <p>Services personnalisés selon vos besoins spécifiques</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 text-[#2699D6]">
                        <Check className="h-5 w-5" />
                      </div>
                      <p>Partenariats stratégiques avec les principaux ports et aéroports</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 text-[#2699D6]">
                        <Check className="h-5 w-5" />
                      </div>
                      <p>Suivi en temps réel de vos expéditions</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-3 text-[#2699D6]">
                        <Check className="h-5 w-5" />
                      </div>
                      <p>Équipe disponible 24/7 pour répondre à vos questions</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Cta;
