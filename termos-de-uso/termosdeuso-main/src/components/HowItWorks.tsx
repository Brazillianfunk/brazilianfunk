
import React from 'react';
import { Check, CloudUpload, BarChart, DollarSign, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Como Funciona</h2>
        <p className="section-subtitle text-center">
          Distribua sua música em 4 passos simples
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-funk-purple flex items-center justify-center mb-6 text-white font-bold text-2xl">
              1
            </div>
            <div className="flex flex-col items-center text-center">
              <CloudUpload className="text-funk-purple h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold text-funk-dark-purple mb-3">Faça o Upload</h3>
              <p className="text-funk-gray">
                Envie suas músicas, capa do álbum e informações necessárias através da nossa plataforma intuitiva.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-funk-purple flex items-center justify-center mb-6 text-white font-bold text-2xl">
              2
            </div>
            <div className="flex flex-col items-center text-center">
              <Check className="text-funk-purple h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold text-funk-dark-purple mb-3">Processo de Revisão</h3>
              <p className="text-funk-gray">
                Nosso time irá revisar seu conteúdo, garantindo que tudo esteja conforme os padrões das plataformas.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-funk-purple flex items-center justify-center mb-6 text-white font-bold text-2xl">
              3
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart className="text-funk-purple h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold text-funk-dark-purple mb-3">Distribuição Global</h3>
              <p className="text-funk-gray">
                Seu conteúdo será distribuído em todas as principais plataformas de streaming e lojas digitais.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-funk-purple flex items-center justify-center mb-6 text-white font-bold text-2xl">
              4
            </div>
            <div className="flex flex-col items-center text-center">
              <DollarSign className="text-funk-purple h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold text-funk-dark-purple mb-3">Receba seus Royalties</h3>
              <p className="text-funk-gray">
                Acompanhe seus resultados em tempo real e receba seus pagamentos mensais diretamente na sua conta.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-funk-purple/10 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-funk-dark-purple mb-4">Pronto para distribuir sua música?</h3>
              <p className="text-funk-gray">
                Junte-se a milhares de artistas que já confiam na Brazilian Funk para levar sua música ao mundo todo.
                Nossa plataforma oferece as melhores taxas do mercado e um suporte excepcional.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <Button className="btn-primary flex items-center gap-2">
                Comece Agora <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
