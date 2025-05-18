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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="block">
                <Logo className="h-16 w-auto" />
              </a>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="nav-link text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 relative">
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2699D6] transition-all duration-300 group-hover:w-full" />
            </button>
            <button onClick={() => scrollToSection('a-propos')} className="nav-link text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 relative">
              À Propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2699D6] transition-all duration-300 group-hover:w-full" />
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 relative">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2699D6] transition-all duration-300 group-hover:w-full" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-gray-800 hover:text-[#2699D6] font-medium transition-colors duration-300 relative">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2699D6] transition-all duration-300 group-hover:w-full" />
            </button>
            <Button 
              onClick={() => scrollToSection('devis')} 
              className="bg-[#2699D6] hover:bg-[#0A4D8F] transition-colors duration-300">
              Demander un devis
            </Button>
          </nav>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
