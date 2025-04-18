
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import StreamingServices from "@/components/StreamingServices";
import { useLanguage } from "./Navbar";
import { useEffect } from "react";

const translations = {
  pt: {
    globeText: "Distribuição Global",
    heading1: "Expandindo",
    heading2: "nossa",
    heading3: "Cultura",
    heading4: "no Mundo.",
    heading5: "Seja ouvido.",
    requestAccess: "Comece de Graça"
  },
  en: {
    globeText: "Global Distribution",
    heading1: "Expanding",
    heading2: "our",
    heading3: "Culture",
    heading4: "Worldwide.",
    heading5: "Be heard.",
    requestAccess: "Start for Free"
  },
  es: {
    globeText: "Distribución Global",
    heading1: "Expandiendo",
    heading2: "nuestra",
    heading3: "Cultura",
    heading4: "en el Mundo.",
    heading5: "Sé escuchado.",
    requestAccess: "Comience Gratis"
  }
};

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.pt;

  useEffect(() => {
    // Create neon particles
    const background = document.createElement('div');
    background.className = 'neon-background';
    document.body.appendChild(background);

    // Create 20 particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'neon-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      background.appendChild(particle);
    }

    return () => {
      if (document.body.contains(background)) {
        document.body.removeChild(background);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-20 px-4 bg-transparent w-full">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center flex-grow relative z-10">
        <div className="flex flex-col items-center text-center mb-20 mt-20 w-full">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm text-primary">{t.globeText}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 w-full">
            <span className="text-primary">{t.heading1}</span>{" "}
            {t.heading2}{" "}
            <span className="text-primary">{t.heading3}</span>{" "}
            {t.heading4}{" "}
            <span className="text-primary">{t.heading5}</span>
          </h1>
          
          <div className="mt-12">
            <Button 
              size="xl" 
              variant="default"
              className="btn-zoom"
              onClick={() => {
                const accessForm = document.getElementById("access-form");
                if (accessForm) {
                  accessForm.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {t.requestAccess}
            </Button>
          </div>
        </div>
        
        <div className="w-full mt-auto pt-20">
          <StreamingServices />
        </div>
      </div>
    </section>
  );
};

export default Hero;
