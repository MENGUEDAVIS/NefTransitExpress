import React from 'react';
import Logo from '@/icons/Logo';
import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="h-16 w-auto mb-4" light />
            <p className="mb-4 text-gray-400">
              Votre partenaire de confiance pour toutes vos opérations de transit douanier et logistique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#2699D6] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#2699D6] transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#2699D6] transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#2699D6] transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-6 font-['Montserrat']">Liens utiles</h5>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')} 
                  className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('a-propos')} 
                  className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('devis')} 
                  className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300"
                >
                  Demander un devis
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-6 font-['Montserrat']">Nos services</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300">Douane</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300">Transit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300">Livraison Express</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300">Entreposage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300">Conseil</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-6 font-['Montserrat']">Newsletter</h5>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres spéciales.
            </p>
            <form className="mb-4 flex">
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white text-gray-800 rounded-r-none"
              />
              <Button 
                type="submit" 
                className="bg-[#2699D6] hover:bg-[#0A4D8F] rounded-l-none px-4"
              >
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NEF TRANSIT EXPRESS SARL. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300 text-sm">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-[#2699D6] transition-colors duration-300 text-sm">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
