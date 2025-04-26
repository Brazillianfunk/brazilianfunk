import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTermsLink = () => {
    window.location.href = 'https://preview--termos-de-uso.lovable.app/';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-funk-dark-purple">Brazilian<span className="text-funk-purple">Funk</span></span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-funk-dark-purple hover:text-funk-purple font-medium transition-colors duration-300"
          >
            Sobre Nós
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-funk-dark-purple hover:text-funk-purple font-medium transition-colors duration-300"
          >
            Como Funciona
          </button>
          <button 
            onClick={handleTermsLink} 
            className="text-funk-dark-purple hover:text-funk-purple font-medium transition-colors duration-300"
          >
            Termos de Uso
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-funk-dark-purple hover:text-funk-purple font-medium transition-colors duration-300"
          >
            Contato
          </button>
          <Button className="bg-funk-purple hover:bg-funk-vivid-purple text-white font-semibold transition-all duration-300">
            Iniciar Agora
          </Button>
        </nav>

        <button className="md:hidden text-funk-dark-purple" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-funk-dark-purple hover:text-funk-purple font-medium py-2 transition-colors duration-300"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-funk-dark-purple hover:text-funk-purple font-medium py-2 transition-colors duration-300"
            >
              Como Funciona
            </button>
            <button 
              onClick={handleTermsLink} 
              className="text-funk-dark-purple hover:text-funk-purple font-medium py-2 transition-colors duration-300"
            >
              Termos de Uso
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-funk-dark-purple hover:text-funk-purple font-medium py-2 transition-colors duration-300"
            >
              Contato
            </button>
            <Button className="bg-funk-purple hover:bg-funk-vivid-purple text-white font-semibold w-full transition-all duration-300">
              Iniciar Agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
