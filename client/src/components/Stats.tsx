import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './layouts/SectionContainer';
import { StatItem } from '@/lib/types';

const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 1,
      value: "450+",
      label: "Clients satisfaits"
    },
    {
      id: 2,
      value: "1200+",
      label: "Expéditions par an"
    },
    {
      id: 3,
      value: "15+",
      label: "Années d'expérience"
    },
    {
      id: 4,
      value: "24/7",
      label: "Support client"
    }
  ];

  return (
    <SectionContainer className="py-16 bg-[#2699D6] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.id} 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div 
              className="text-4xl md:text-5xl font-bold mb-2 font-['Montserrat']"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                delay: index * 0.1 + 0.2 
              }}
            >
              {stat.value}
            </motion.div>
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Stats;
