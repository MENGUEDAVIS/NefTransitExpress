import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './layouts/SectionContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Importez Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Importez les images des partenaires
import medicalPlusLogo from '../assets/partners/medical-plus.png';
import mediffLogo from '../assets/partners/mediff.png';
import fipcamLogo from '../assets/partners/fipcam.png';

interface PartnerItem {
  id: number;
  name: string;
  category: 'company' | 'port' | 'airport';
  logo?: string;
  image?: string;
}

const Partners: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSlidesPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const companyPartners: PartnerItem[] = [
    { id: 1, name: 'Medical PLUS SARL', category: 'company', logo: medicalPlusLogo },
    { id: 2, name: 'MEDIFF Cameroon', category: 'company', logo: mediffLogo },
    { id: 3, name: 'FIPCAM', category: 'company', logo: fipcamLogo },
  ];
  
  const portPartners: PartnerItem[] = [
    { 
      id: 4, 
      name: 'Port de Kribi', 
      category: 'port',
      image: 'https://images.unsplash.com/photo-1624383221340-86d8a162d7c4?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 5, 
      name: 'Port de Douala', 
      category: 'port',
      image: 'https://images.unsplash.com/photo-1573633509389-0b3071b644b0?q=80&w=800&auto=format&fit=crop' 
    },
  ];
  
  const airportPartners: PartnerItem[] = [
    { 
      id: 6, 
      name: 'Aéroport International de Nsimalen', 
      category: 'airport',
      image: 'https://images.unsplash.com/photo-1539297094569-fd9be9433dd0?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 7, 
      name: 'Aéroport de Douala', 
      category: 'airport',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=800&auto=format&fit=crop' 
    },
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
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-semibold text-gray-800 mb-8 text-center">Entreprises Partenaires</h4>
          
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={getSlidesPerView()}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="partner-logos-swiper mb-12"
          >
            {companyPartners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="bg-white rounded-lg shadow-md p-8 h-64 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-36 w-auto object-contain mx-auto mb-6" 
                  />
                  <h5 className="text-lg font-medium text-gray-700 text-center">{partner.name}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-8 text-center">Ports Maritimes</h4>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              className="partner-ports-swiper"
            >
              {portPartners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-80">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                      />
                    </div>
                    <div className="p-4">
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">{partner.name}</h5>
                      <p className="text-sm text-gray-600">Partenaire stratégique pour nos opérations maritimes</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-8 text-center">Aéroports</h4>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              className="partner-airports-swiper"
            >
              {airportPartners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-80">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                      />
                    </div>
                    <div className="p-4">
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">{partner.name}</h5>
                      <p className="text-sm text-gray-600">Partenaire pour nos services de fret aérien</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Partners;