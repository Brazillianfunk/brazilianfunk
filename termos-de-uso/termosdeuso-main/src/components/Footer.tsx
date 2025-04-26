import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const handleTermsLink = () => {
    window.location.href = 'https://preview--termos-de-uso.lovable.app/';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-funk-dark-purple text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">Brazilian<span className="text-funk-purple">Funk</span></span>
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              A plataforma líder de distribuição musical especializada no funk brasileiro e outros gêneros musicais.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-funk-purple transition-all duration-300">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-funk-purple transition-all duration-300">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-funk-purple transition-all duration-300">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-funk-purple transition-all duration-300">
                <Youtube size={18} className="text-white" />
              </a>
            </div>
          </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
          <ul className="space-y-3">
            <li>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-funk-purple transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-funk-purple transition-colors">
                  Como Funciona
                </button>
              </li>
            <li>
              <button 
                onClick={handleTermsLink} 
                className="text-gray-300 hover:text-funk-purple transition-colors"
              >
                Termos de Uso
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-funk-purple transition-colors">
                  Contato
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-funk-purple transition-colors">
                  Política de Privacidade
                </a>
              </li>
          </ul>
        </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-funk-purple transition-colors">
                  Distribuição Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-funk-purple transition-colors">
                  Gerenciamento de Royalties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-funk-purple transition-colors">
                  Monetização de Conteúdo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-funk-purple transition-colors">
                  Análise de Dados
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-funk-purple transition-colors">
                  Promoção Musical
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscreva-se para receber novidades, dicas e promoções especiais.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-funk-purple"
              />
              <button className="bg-funk-purple hover:bg-funk-vivid-purple text-white font-semibold py-2 px-4 rounded-md transition-all duration-300">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Brazilian Funk. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleTermsLink} 
                className="text-gray-400 text-sm hover:text-funk-purple transition-colors"
              >
                Termos de Uso
              </button>
              <a href="#" className="text-gray-400 text-sm hover:text-funk-purple transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-funk-purple transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
