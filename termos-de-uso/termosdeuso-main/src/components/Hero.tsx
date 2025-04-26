
import React from 'react';
import { ArrowRight, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-funk-dark-purple pt-24 pb-10 md:pt-28 md:pb-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Distribua sua música<br />
              <span className="text-funk-purple">para o mundo</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              A Brazilian Funk é a plataforma líder de distribuição musical especializada no funk brasileiro e outros gêneros. Leve sua música para todas as plataformas de streaming com facilidade e profissionalismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2 text-base py-6">
                Começar Agora <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="bg-transparent border border-white text-white hover:bg-white/10 py-6 text-base">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-funk rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute inset-10 bg-funk-dark-purple rounded-full flex items-center justify-center">
                <Music size={80} className="text-funk-purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
