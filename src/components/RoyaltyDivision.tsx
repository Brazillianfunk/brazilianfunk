import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "./Navbar";

const royaltyData = [
  { name: "Artista Principal", value: 55, color: "#bbff00" },
  { name: "Produtor Musical", value: 30, color: "#ff3d87" },
  { name: "Colaboradores", value: 15, color: "#00a3ff" },
];

const translations = {
  pt: {
    title: "Divisão de Royalties Transparente",
    subtitle: "Entenda como os royalties são distribuídos entre os artistas e colaboradores.",
    howItWorksTitle: "Como Funciona",
    howItWorksText: "Nossa plataforma distribui automaticamente os royalties de acordo com os percentuais acordados entre todos os participantes. O responsável pelo lançamento define a divisão conforme combinado com os demais artistas.",
    exampleTitle: "Exemplo Ilustrativo de Divisão:",
    exampleText: "",
    advantagesTitle: "Vantagens da Nossa Divisão",
    advantages: [
      "Pagamentos automáticos para todos os artistas participantes",
      "Transparência total em tempo real",
      "Sem necessidade de intermediários",
      "Relatórios detalhados por música e plataforma"
    ]
  },
  en: {
    title: "Transparent Royalty Division",
    subtitle: "Understand how royalties are distributed among artists and collaborators.",
    howItWorksTitle: "How It Works",
    howItWorksText: "Our platform automatically distributes royalties according to pre-established percentages agreed upon by all participants. This prevents disputes and ensures that each collaborator receives their share fairly and transparently.",
    exampleTitle: "Division Example:",
    exampleText: "",
    advantagesTitle: "Advantages of Our Division",
    advantages: [
      "Automatic payments for all participating artists",
      "Complete real-time transparency",
      "No need for intermediaries",
      "Detailed reports by song and platform"
    ]
  },
  es: {
    title: "División de Regalías Transparente",
    subtitle: "Entienda cómo se distribuyen las regalías entre artistas y colaboradores.",
    howItWorksTitle: "Cómo Funciona",
    howItWorksText: "Nuestra plataforma distribuye automáticamente las regalías según porcentajes preestablecidos y acordados entre todos los participantes. Esto evita disputas y garantiza que cada colaborador reciba su parte de manera justa y transparente.",
    exampleTitle: "Ejemplo de División:",
    exampleText: "",
    advantagesTitle: "Ventajas de Nuestra División",
    advantages: [
      "Pagos automáticos para todos los artistas participantes",
      "Transparencia total en tiempo real",
      "Sin necesidade de intermediarios",
      "Informes detallados por canción y plataforma"
    ]
  }
};

const RoyaltyDivision = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.pt;
  
  const localizedRoyaltyData = royaltyData.map(item => {
    let translatedName = item.name;
    if (item.name === "Artista Principal") {
      translatedName = language === "en" ? "Main Artist" : (language === "es" ? "Artista Principal" : "Artista Principal");
    } else if (item.name === "Produtor Musical") {
      translatedName = language === "en" ? "Music Producer" : (language === "es" ? "Productor Musical" : "Produtor Musical");
    } else if (item.name === "Colaboradores") {
      translatedName = language === "en" ? "Collaborators" : (language === "es" ? "Colaboradores" : "Colaboradores");
    }
    
    return { ...item, name: translatedName };
  });

  return (
    <section className="py-20 px-4 md:px-6 bg-background" id="royalty-division">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative mx-auto max-w-full">
            <img 
              src="/lovable-uploads/2ee02ab1-6ed2-459f-a04a-f4385daf05b4.png" 
              alt="Diagrama de divisão de royalties" 
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">{t.howItWorksTitle}</h3>
            
            <p className="text-muted-foreground">
              {t.howItWorksText}
            </p>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border p-4 rounded-lg mt-4">
              <p className="font-medium">{t.exampleTitle}</p>
              <p className="text-sm text-muted-foreground italic">
                {t.exampleText}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {localizedRoyaltyData.map((item) => (
                <Card key={item.name} className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-3xl font-bold mb-2" style={{color: item.color}}>{item.value}%</div>
                      <div className="text-sm text-muted-foreground">{item.name}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-xl font-medium">{t.advantagesTitle}</h4>
              <ul className="space-y-3">
                {t.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="bg-primary rounded-full p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyaltyDivision;
