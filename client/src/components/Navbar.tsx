import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import Logo from '@/icons/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-1' : 'bg-white/90 py-2'}`}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Logo className="h-10 w-auto sm:h-12 md:h-14" />
            </Link>
          </div>
          
          <div className="hidden md:flex flex-wrap items-center justify-end">
            <div className="flex flex-wrap items-center space-x-2 lg:space-x-5">
              <button onClick={() => scrollToSection('accueil')} className="px-1 sm:px-2 py-1 text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                Accueil
              </button>
              <button onClick={() => scrollToSection('a-propos')} className="px-1 sm:px-2 py-1 text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                À Propos
              </button>
              <button onClick={() => scrollToSection('services')} className="px-1 sm:px-2 py-1 text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-1 sm:px-2 py-1 text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                Contact
              </button>
            </div>
            
            <div className="ml-2 lg:ml-4">
              <Button 
                onClick={() => scrollToSection('devis')} 
                className="bg-[#2699D6] hover:bg-[#0A4D8F] transition-colors duration-300 whitespace-nowrap text-xs h-8 px-2 sm:text-sm sm:h-9 sm:px-3 lg:text-base lg:h-10 lg:px-4">
                Demander un devis
              </Button>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden h-8 w-8 p-0"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 py-2">
              Accueil
            </button>
            <button onClick={() => scrollToSection('a-propos')} className="text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 py-2">
              À Propos
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 py-2">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('devis')} 
              className="bg-[#2699D6] hover:bg-[#0A4D8F] transition-colors duration-300 w-full">
              Demander un devis
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
