import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './layouts/SectionContainer';

interface PartnerItem {
  id: number;
  name: string;
  category: 'company' | 'port' | 'airport';
}

const Partners: React.FC = () => {
  const partners: PartnerItem[] = [
    // Companies
    { id: 1, name: 'Medical PLUS SARL', category: 'company' },
    { id: 2, name: 'MEDIFF Cameroon', category: 'company' },
    { id: 3, name: 'FIPCAM', category: 'company' },
    
    // Ports
    { id: 4, name: 'Port de Kribi', category: 'port' },
    { id: 5, name: 'Port de Douala', category: 'port' },
    
    // Airports
    { id: 6, name: 'Aéroport International de Nsimalen', category: 'airport' },
    { id: 7, name: 'Aéroport de Douala', category: 'airport' },
  ];

  return (
    <SectionContainer id="partenaires" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider text-[#2699D6] font-semibold mb-2">Nos Partenaires</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-['Montserrat']">Ils nous ont fait confiance</h3>
        <div className="w-20 h-1 bg-[#2699D6] mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">
          NEF TRANSIT EXPRESS SARL travaille avec les entreprises les plus prestigieuses ainsi qu'avec tous les services 
          portuaires et aériens du Cameroun.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Entreprises</h4>
            <div className="bg-white rounded-lg shadow-md p-6">
              {partners.filter(p => p.category === 'company').map((partner, index) => (
                <motion.div 
                  key={partner.id}
                  className={`py-4 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <p className="text-center font-medium text-gray-700">{partner.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Ports</h4>
            <div className="bg-white rounded-lg shadow-md p-6">
              {partners.filter(p => p.category === 'port').map((partner, index) => (
                <motion.div 
                  key={partner.id}
                  className={`py-4 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <p className="text-center font-medium text-gray-700">{partner.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Aéroports</h4>
            <div className="bg-white rounded-lg shadow-md p-6">
              {partners.filter(p => p.category === 'airport').map((partner, index) => (
                <motion.div 
                  key={partner.id}
                  className={`py-4 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <p className="text-center font-medium text-gray-700">{partner.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Partners;