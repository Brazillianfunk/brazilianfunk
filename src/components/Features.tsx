import { 
  Music, 
  Globe, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  DollarSign 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "./Navbar";

const translations = {
  pt: {
    title: "Benefícios para sua carreira musical",
    subtitle: "Oferecemos tudo que você precisa para fazer sua música alcançar o sucesso no mundo digital",
    features: [
      {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Alcance global",
        description: "Distribua sua música para todas as plataformas digitais importantes em mais de 200 países."
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Marketing estratégico",
        description: "Acesso a ferramentas de promoção e recursos para impulsionar sua visibilidade no mercado musical."
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-primary" />,
        title: "Análises detalhadas",
        description: "Acompanhe o desempenho da sua música com relatórios e métricas em tempo real."
      },
      {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Lançamento rápido",
        description: "Processo simplificado para que sua música chegue às plataformas em tempo recorde."
      },
      {
        icon: <Music className="h-8 w-8 text-primary" />,
        title: "Suporte completo",
        description: "Orientação profissional em todas as etapas do seu lançamento musical."
      },
      {
  icon: <DollarSign className="h-8 w-8 text-primary" />,
  title: "Pagamentos transparentes",
  description: "Tenha controle e transparência total sobre os seus ganhos." // Alterado!
}

    ]
  },
  en: {
    title: "Benefits for your music career",
    subtitle: "We offer everything you need to make your music successful in the digital world",
    features: [
      {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Global reach",
        description: "Distribute your music to all important digital platforms in more than 200 countries."
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Strategic marketing",
        description: "Access to promotional tools and resources to boost your visibility in the music market."
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-primary" />,
        title: "Detailed analytics",
        description: "Track your music's performance with real-time reports and metrics."
      },
      {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Fast release",
        description: "Streamlined process to get your music to platforms in record time."
      },
      {
        icon: <Music className="h-8 w-8 text-primary" />,
        title: "Complete support",
        description: "Professional guidance at every stage of your music release."
      },
      {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "Transparent payments",
        description: "Receive 100% of your royalties with complete transparency in the process."
      }
    ]
  },
  es: {
    title: "Beneficios para tu carrera musical",
    subtitle: "Ofrecemos todo lo que necesitas para que tu música alcance el éxito en el mundo digital",
    features: [
      {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Alcance global",
        description: "Distribuye tu música a todas las plataformas digitales importantes en más de 200 países."
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Marketing estratégico",
        description: "Acceso a herramientas de promoción y recursos para impulsar tu visibilidad en el mercado musical."
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-primary" />,
        title: "Análisis detallados",
        description: "Sigue el rendimiento de tu música con informes y métricas en tiempo real."
      },
      {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Lanzamiento rápido",
        description: "Proceso simplificado para que tu música llegue a las plataformas en tiempo récord."
      },
      {
        icon: <Music className="h-8 w-8 text-primary" />,
        title: "Soporte completo",
        description: "Orientación profesional en todas las etapas de tu lanzamiento musical."
      },
      {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "Pagos transparentes",
        description: "Recibe el 100% de tus regalías con total transparencia en el proceso."
      }
    ]
  }
};

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.pt;

  return (
    <section className="py-20 px-4 md:px-6 bg-background" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-secondary mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
