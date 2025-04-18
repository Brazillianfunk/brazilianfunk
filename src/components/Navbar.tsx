
import { useState, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, Newspaper } from "lucide-react";

export type Language = {
  code: string;
  name: string;
};

export const languages: Language[] = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" }
];

export const LanguageContext = createContext<{
  language: string;
  setLanguage: (code: string) => void;
}>({
  language: 'pt',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  pt: {
    distribution: "Distribuição",
    royaltyDivision: "Divisão de Royalties",
    fastDelivery: "Entrega Rápida",
    requestAccess: "Solicitar Acesso"
  },
  en: {
    distribution: "Distribution",
    royaltyDivision: "Royalty Division",
    fastDelivery: "Fast Delivery",
    requestAccess: "Request Access"
  },
  es: {
    distribution: "Distribución",
    royaltyDivision: "División de Regalías",
    fastDelivery: "Entrega Rápida",
    requestAccess: "Solicitar Acceso"
  }
};

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  
  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    window.dispatchEvent(new CustomEvent('languageChange', { 
      detail: { language: language.code } 
    }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const t = translations[currentLanguage.code as keyof typeof translations] || translations.pt;

  const newsTranslations = {
    pt: "Notícias",
    en: "News",
    es: "Noticias"
  };

  const handleNewsClick = () => {
    window.open('https://www.instagram.com/brazillianfunk', '_blank');
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.imgur.com/upvZ0R4.png" 
            alt="Brazilian Funk Logo" 
            className="h-24 w-auto object-contain" 
          />
        </div>
        
        {isMobile ? (
          <div className="flex items-center">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </Button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 p-4 bg-background border-b border-secondary shadow-lg flex flex-col gap-2">
                <Button 
                  variant="ghost" 
                  className="justify-start w-full"
                  onClick={() => handleNewsClick()}
                >
                  <Newspaper className="mr-2 h-4 w-4" />
                  {newsTranslations[currentLanguage.code as keyof typeof newsTranslations] || newsTranslations.pt}
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start w-full"
                  onClick={() => scrollToSection("features")}
                >
                  {t.distribution}
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start w-full"
                  onClick={() => scrollToSection("royalty-division")}
                >
                  {t.royaltyDivision}
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start w-full"
                  onClick={() => scrollToSection("fast-delivery")}
                >
                  {t.fastDelivery}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="justify-start w-full flex items-center">
                      <Globe className="mr-2 h-4 w-4" />
                      {currentLanguage.name}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm border-secondary">
                    {languages.map((lang) => (
                      <DropdownMenuItem 
                        key={lang.code}
                        className={lang.code === currentLanguage.code ? "text-primary" : ""}
                        onClick={() => handleLanguageChange(lang)}
                      >
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => scrollToSection("access-form")}
                >
                  {t.requestAccess}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <nav className="flex items-center justify-center flex-1 px-4">
            <div className="flex items-center gap-8 justify-center w-full">
              <Button 
                variant="ghost" 
                className="hover:text-primary text-base btn-zoom"
                onClick={() => handleNewsClick()}
              >
                <Newspaper className="mr-2 h-4 w-4" />
                {newsTranslations[currentLanguage.code as keyof typeof newsTranslations] || newsTranslations.pt}
              </Button>
              <Button 
                variant="ghost" 
                className="hover:text-primary text-base btn-zoom"
                onClick={() => scrollToSection("features")}
              >
                {t.distribution}
              </Button>
              <Button 
                variant="ghost" 
                className="hover:text-primary text-base btn-zoom"
                onClick={() => scrollToSection("royalty-division")}
              >
                {t.royaltyDivision}
              </Button>
              <Button 
                variant="ghost" 
                className="hover:text-primary text-base btn-zoom"
                onClick={() => scrollToSection("fast-delivery")}
              >
                {t.fastDelivery}
              </Button>
            </div>
            
            <div className="flex items-center gap-4 ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 hover:text-primary btn-zoom">
                    {currentLanguage.code.toUpperCase()}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm border-secondary">
                  {languages.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.code}
                      className={lang.code === currentLanguage.code ? "text-primary" : ""}
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-zoom"
                onClick={() => scrollToSection("access-form")}
              >
                {t.requestAccess}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
