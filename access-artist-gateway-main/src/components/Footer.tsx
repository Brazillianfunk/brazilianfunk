import { Mail, Phone, Instagram, FileText } from "lucide-react";
import { useLanguage } from "./Navbar";
import { Link } from "react-router-dom";

const translations = {
  pt: {
    description: "Distribua sua música para o mundo inteiro com uma plataforma profissional e focada no sucesso do seu trabalho.",
    quickLinks: "Links Rápidos",
    home: "Início",
    distribution: "Distribuição",
    royaltyDivision: "Divisão de Royalties",
    fastDelivery: "Entrega Rápida",
    contact: "Contato",
    follow: "Acompanhe",
    rights: "Todos os direitos reservados.",
    termsOfUse: "Termos de Uso"
  },
  en: {
    description: "Distribute your music worldwide with a professional platform focused on the success of your work.",
    quickLinks: "Quick Links",
    home: "Home",
    distribution: "Distribution",
    royaltyDivision: "Royalty Division",
    fastDelivery: "Fast Delivery",
    contact: "Contact",
    follow: "Follow Us",
    rights: "All rights reserved.",
    termsOfUse: "Terms of Use"
  },
  es: {
    description: "Distribuye tu música por todo el mundo con una plataforma profesional enfocada en el éxito de tu trabajo.",
    quickLinks: "Enlaces Rápidos",
    home: "Inicio",
    distribution: "Distribución",
    royaltyDivision: "División de Regalías",
    fastDelivery: "Entrega Rápida",
    contact: "Contacto",
    follow: "Síguenos",
    rights: "Todos los derechos reservados.",
    termsOfUse: "Términos de Uso"
  }
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.pt;

  return (
    <footer className="bg-background text-foreground py-12 px-4 border-t border-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/afe499af-1390-468c-9cc2-b69cc8147107.png" 
                alt="Brazilian Funk Logo" 
                className="h-8"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              {t.description}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.home}</a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{t.distribution}</a>
              </li>
              <li>
                <a href="#royalty-division" className="text-muted-foreground hover:text-primary transition-colors">{t.royaltyDivision}</a>
              </li>
              <li>
                <a href="#access-form" className="text-muted-foreground hover:text-primary transition-colors">{t.fastDelivery}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contato@brazilianfunk.online" className="text-muted-foreground hover:text-primary transition-colors">
                  contato@brazilianfunk.online
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+551199999999" className="text-muted-foreground hover:text-primary transition-colors">
                  +55 11 9999-9999
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.follow}</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/brazillianfunk/#" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.youtube.com/@brazillianfunk" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-6 text-center text-muted-foreground text-sm flex flex-col items-center justify-center space-y-2">
          <p>&copy; {new Date().getFullYear()} Brazilian Funk. {t.rights}</p>
          <a href="termos-de-uso/termosdeuso-main/" class="flex items-center gap-2 hover:text-primary transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9 12h6M9 16h6M13 8h-1m5-4H7a2 2 0 0 0-2 2v16l7-3 7 3V6a2 2 0 0 0-2-2z"/>
  </svg>
  <span>Termos de Uso</span>
</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
