
import React from 'react';
import { Award, Globe, Music, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Sobre a Brazilian Funk</h2>
        <p className="section-subtitle text-center">
          Uma referência renomada no cenário musical brasileiro e internacional
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-funk-purple/10 flex items-center justify-center mb-6 mx-auto">
              <Music className="text-funk-purple h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-funk-dark-purple text-center mb-3">Expertise Musical</h3>
            <p className="text-funk-gray text-center">
              Especialistas em funk brasileiro e diversos outros gêneros musicais, com profundo conhecimento do mercado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-funk-purple/10 flex items-center justify-center mb-6 mx-auto">
              <Globe className="text-funk-purple h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-funk-dark-purple text-center mb-3">Alcance Global</h3>
            <p className="text-funk-gray text-center">
              Distribuição em todas as principais plataformas de streaming ao redor do mundo, expandindo seu alcance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-funk-purple/10 flex items-center justify-center mb-6 mx-auto">
              <TrendingUp className="text-funk-purple h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-funk-dark-purple text-center mb-3">Análise de Mercado</h3>
            <p className="text-funk-gray text-center">
              Ferramentas avançadas para acompanhar o desempenho das suas músicas e maximizar seus resultados.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-funk-purple/10 flex items-center justify-center mb-6 mx-auto">
              <Award className="text-funk-purple h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-funk-dark-purple text-center mb-3">Confiança e Tradição</h3>
            <p className="text-funk-gray text-center">
              Compromisso com transparência e excelência, construindo relações de longo prazo com nossos artistas.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-funk-purple/5 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-funk-dark-purple mb-4 text-center">Nossa Missão</h3>
          <p className="text-funk-gray text-center max-w-4xl mx-auto">
            A Brazilian Funk tem como missão democratizar o acesso ao mercado musical global para artistas brasileiros, 
            especialmente os do funk e gêneros correlatos, fornecendo ferramentas profissionais, conhecimento de mercado 
            e suporte contínuo. Acreditamos no potencial da música brasileira e trabalhamos para elevar nossos artistas 
            ao reconhecimento internacional que merecem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
