
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Entre em Contato</h2>
        <p className="section-subtitle text-center">
          Estamos à disposição para tirar suas dúvidas e ajudar no que for preciso
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-funk-dark-purple mb-6">Envie uma Mensagem</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-funk-dark-purple">Nome Completo</label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-funk-dark-purple">E-mail</label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-funk-dark-purple">Assunto</label>
                <Input id="subject" placeholder="Assunto da mensagem" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-funk-dark-purple">Mensagem</label>
                <Textarea id="message" placeholder="Digite sua mensagem..." className="min-h-[150px]" />
              </div>

              <Button className="w-full btn-primary">Enviar Mensagem</Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-funk-dark-purple mb-6">Informações de Contato</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-funk-purple/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-funk-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-funk-dark-purple mb-1">E-mail</h4>
                    <p className="text-funk-gray">contato@brazilianfunk.co</p>
                    <p className="text-funk-gray">suporte@brazilianfunk.co</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-funk-purple/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-funk-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-funk-dark-purple mb-1">Telefone</h4>
                    <p className="text-funk-gray">+55 (11) 3456-7890</p>
                    <p className="text-funk-gray">Segunda a Sexta, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-funk-purple/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-funk-purple h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-funk-dark-purple mb-1">Endereço</h4>
                    <p className="text-funk-gray">Av. Paulista, 1000, Bela Vista</p>
                    <p className="text-funk-gray">São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 bg-funk-purple/10 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-funk-dark-purple mb-4">Horário de Atendimento</h4>
              <ul className="space-y-2 text-funk-gray">
                <li className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
