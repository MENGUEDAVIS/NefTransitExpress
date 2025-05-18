import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './layouts/SectionContainer';
import { 
  FileText, 
  Plane, 
  Truck, 
  Warehouse, 
  MessageSquare, 
  Navigation 
} from 'lucide-react';
import { 
  customsOperationsImages, 
  cargoPlaneImages, 
  truckDeliveryImages, 
  shippingContainerImages,
  consultingImage,
  digitalTrackingImage
} from '@/lib/images';
import { ServiceItem } from '@/lib/types';

const Services: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Douane",
      description: "Gestion complète des procédures douanières pour faciliter vos importations et exportations en toute conformité avec la réglementation en vigueur.",
      icon: "file-text",
      imageUrl: customsOperationsImages[0]
    },
    {
      id: 2,
      title: "Transit (Import & Export)",
      description: "Solutions de transport international par voie aérienne, maritime et terrestre, adaptées à vos délais et à la nature de vos marchandises.",
      icon: "plane",
      imageUrl: cargoPlaneImages[0]
    },
    {
      id: 3,
      title: "Livraison Express",
      description: "Service de livraison rapide pour vos colis et marchandises, avec suivi en temps réel et garantie de livraison dans les délais convenus.",
      icon: "truck",
      imageUrl: truckDeliveryImages[0]
    },
    {
      id: 4,
      title: "Entreposage",
      description: "Solutions d'entreposage sécurisées et adaptées à tous types de marchandises, avec gestion des stocks et préparation de commandes.",
      icon: "warehouse",
      imageUrl: shippingContainerImages[0]
    },
    {
      id: 5,
      title: "Conseil",
      description: "Accompagnement et conseil en matière de réglementation douanière, optimisation des coûts logistiques et stratégies d'importation/exportation.",
      icon: "message-square",
      imageUrl: consultingImage
    },
    {
      id: 6,
      title: "Suivi de Fret",
      description: "Système de traçabilité avancé permettant de suivre vos expéditions en temps réel et d'être informé à chaque étape du transport.",
      icon: "navigation",
      imageUrl: digitalTrackingImage
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'file-text': return <FileText className="h-5 w-5" />;
      case 'plane': return <Plane className="h-5 w-5" />;
      case 'truck': return <Truck className="h-5 w-5" />;
      case 'warehouse': return <Warehouse className="h-5 w-5" />;
      case 'message-square': return <MessageSquare className="h-5 w-5" />;
      case 'navigation': return <Navigation className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <SectionContainer id="services" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-[#2699D6] font-semibold mb-2">Nos services</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-['Montserrat']">Solutions complètes de transit et logistique</h3>
        <div className="w-20 h-1 bg-[#2699D6] mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          Nous offrons une gamme complète de services douaniers et logistiques pour répondre à tous vos besoins d'importation et d'exportation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            className="service-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={service.imageUrl} 
                alt={`Service de ${service.title}`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[#2699D6]/10 flex items-center justify-center text-[#2699D6] mb-4">
                {renderIcon(service.icon)}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 font-['Montserrat']">{service.title}</h4>
              <p className="text-gray-700 mb-4">
                {service.description}
              </p>
              <button 
                onClick={scrollToContact}
                className="text-[#2699D6] font-medium flex items-center hover:underline"
              >
                En savoir plus
                <svg 
                  className="ml-2 h-4 w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
