import { ArrowRight, CheckCircle, Upload, Clock } from "lucide-react";
import { useLanguage } from "./Navbar";
import { Card, CardContent } from "./ui/card";

const translations = {
  pt: {
    title: "Como funciona",
    subtitle: "Um processo simples e eficiente para levar sua música ao mundo",
    steps: [
      {
        number: "01",
        title: "Solicite acesso",
        description: "Preencha o formulário com suas informações artísticas para análise da nossa equipe."
      },
      {
        number: "02",
        title: "Aprovação",
        description: "Nossa equipe analisa seu perfil e entra em contato para prosseguir com o cadastro."
      },
      {
        number: "03",
        title: "Upload de músicas",
        description: "Envie suas faixas e informações através de nossa plataforma intuitiva."
      },
      {
        number: "04",
        title: "Distribuição global",
        description: "Sua música é distribuída nas principais plataformas digitais do mundo."
      }
    ],
    fastDelivery: {
      title: "Entrega Rápida",
      subtitle: "Publicamos sua música em todas as plataformas em tempo recorde",
      steps: [
        {
          title: "Aprovação",
          description: "Revisamos seu conteúdo para garantir conformidade com todas as plataformas",
          icon: CheckCircle
        },
        {
          title: "Envio",
          description: "Enviamos seu conteúdo para todas as plataformas de streaming",
          icon: Upload
        },
        {
          title: "Ao Vivo em 24 HORAS",
          description: "Sua música estará disponível em todas as plataformas em tempo recorde",
          icon: Clock
        }
      ]
    }
  },
  en: {
    title: "How it works",
    subtitle: "A simple and efficient process to take your music to the world",
    steps: [
      {
        number: "01",
        title: "Request access",
        description: "Fill out the form with your artistic information for analysis by our team."
      },
      {
        number: "02",
        title: "Approval",
        description: "Our team analyzes your profile and contacts you to proceed with registration."
      },
      {
        number: "03",
        title: "Music upload",
        description: "Upload your tracks and information through our intuitive platform."
      },
      {
        number: "04",
        title: "Global distribution",
        description: "Your music is distributed on the main digital platforms around the world."
      }
    ],
    fastDelivery: {
      title: "Fast Delivery",
      subtitle: "We publish your music on all platforms in record time",
      steps: [
        {
          title: "Approval",
          description: "We review your content to ensure compliance with all platforms",
          icon: CheckCircle
        },
        {
          title: "Submission",
          description: "We submit your content to all streaming platforms",
          icon: Upload
        },
        {
          title: "Live in 24 HOURS",
          description: "Your music will be available on all platforms in record time",
          icon: Clock
        }
      ]
    }
  },
  es: {
    title: "Cómo funciona",
    subtitle: "Un proceso simple y eficiente para llevar tu música al mundo",
    steps: [
      {
        number: "01",
        title: "Solicitar acceso",
        description: "Completa el formulario con tu información artística para análisis por nuestro equipo."
      },
      {
        number: "02",
        title: "Aprobación",
        description: "Nuestro equipo analiza tu perfil y se pone en contacto contigo para proceder con el registro."
      },
      {
        number: "03",
        title: "Subida de música",
        description: "Sube tus pistas e información a través de nuestra plataforma intuitiva."
      },
      {
        number: "04",
        title: "Distribución global",
        description: "Tu música se distribuye en las principales plataformas digitales de todo el mundo."
      }
    ],
    fastDelivery: {
      title: "Entrega Rápida",
      subtitle: "Publicamos tu música en todas las plataformas en tiempo récord",
      steps: [
        {
          title: "Aprobación",
          description: "Revisamos tu contenido para garantizar el cumplimiento con todas las plataformas",
          icon: CheckCircle
        },
        {
          title: "Envío",
          description: "Enviamos tu contenido a todas las plataformas de streaming",
          icon: Upload
        },
        {
          title: "En Vivo en 24 HORAS",
          description: "Tu música estará disponible en todas las plataformas en tiempo récord",
          icon: Clock
        }
      ]
    }
  }
};

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.pt;

  return (
    <section className="py-20 px-4 md:px-6 bg-secondary/30" id="how-it-works">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="rounded-xl bg-secondary/50 border border-secondary/80 p-6 h-full flex flex-col">
                <div className="text-3xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground flex-grow">{step.description}</p>
              </div>
              
              {index < t.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10">
                  <ArrowRight className="text-primary w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24" id="fast-delivery">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t.fastDelivery.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.fastDelivery.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.fastDelivery.steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-border bg-card h-full">
                  <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < t.fastDelivery.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10">
                    <ArrowRight className="text-primary w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
