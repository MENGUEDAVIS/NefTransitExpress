import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './layouts/SectionContainer';
import { TestimonialItem } from '@/lib/types';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      content: "NEF TRANSIT EXPRESS a considérablement amélioré notre chaîne d'approvisionnement grâce à leur service rapide et fiable. Leur équipe est toujours disponible pour répondre à nos besoins.",
      author: "Catherine Mbarga",
      position: "Directrice des Opérations, SABC",
      rating: 5,
      initials: "CM"
    },
    {
      id: 2,
      content: "Grâce à l'expertise de NEF TRANSIT EXPRESS en matière de douane, nous avons pu réduire considérablement nos délais d'importation. Un partenaire incontournable pour notre entreprise.",
      author: "Jean Ndongo",
      position: "Gérant, Techno Import",
      rating: 5,
      initials: "JN"
    },
    {
      id: 3,
      content: "Service client exceptionnel et équipe très professionnelle. NEF TRANSIT EXPRESS a su gérer efficacement nos dossiers complexes d'exportation avec un suivi impeccable.",
      author: "Sophie Atangana",
      position: "Responsable Logistique, Cacao Export",
      rating: 4.5,
      initials: "SA"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="h-5 w-5 fill-[#2699D6] text-[#2699D6]" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star className="h-5 w-5 text-[#2699D6]" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="h-5 w-5 fill-[#2699D6] text-[#2699D6]" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="h-5 w-5 text-[#2699D6]" />
      );
    }

    return stars;
  };

  return (
    <SectionContainer id="testimonials" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-[#2699D6] font-semibold mb-2">Témoignages</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-['Montserrat']">Ce que nos clients disent</h3>
        <div className="w-20 h-1 bg-[#2699D6] mx-auto mb-6"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id} 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-[#2699D6] flex">
                {renderStars(testimonial.rating)}
              </div>
            </div>
            <p className="text-gray-700 italic mb-6">
              "{testimonial.content}"
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-[#2699D6]">
                  <span className="font-bold">{testimonial.initials}</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{testimonial.author}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
