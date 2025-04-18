
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Send, User, Mail, Phone } from "lucide-react";
import { useLanguage } from "./Navbar";
import { translations } from "./access-form/translations";
import { AccessSteps } from "./access-form/AccessSteps";
import { PlatformFields, getPlatforms } from "./access-form/PlatformFields";
import { useAccessForm } from "./access-form/useAccessForm";

const AccessForm = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.pt;
  const platforms = getPlatforms(language);
  
  const {
    formData,
    loading,
    handleChange,
    handleSubmit
  } = useAccessForm(language);

  return (
    <section className="py-20 px-4 md:px-6 bg-background/95 backdrop-blur-sm relative overflow-hidden" id="access-form">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2))]"></div>
        <div className="absolute top-0 left-0 w-1/3 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#bbff0010_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)]"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {t.subtitle}
            </p>
            
            <AccessSteps title={t.whatHappensNext} steps={t.steps} />
          </div>
          
          <div>
            <Card className="border-secondary/80 bg-secondary/30 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{t.formTitle}</CardTitle>
                <CardDescription>
                  {t.formSubtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" />
                          <Label htmlFor="artistName">{t.artistName}</Label>
                        </div>
                        <Input
                          id="artistName"
                          name="artistName"
                          placeholder={t.artistNamePlaceholder}
                          value={formData.artistName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <Label htmlFor="email">{t.email}</Label>
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t.emailPlaceholder}
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <Label htmlFor="phone">{t.phone}</Label>
                        </div>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder={t.phonePlaceholder}
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <PlatformFields
                      platforms={platforms}
                      values={formData}
                      onChange={handleChange}
                      title={t.platformsTitle}
                    />
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">{t.message}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t.messagePlaceholder}
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                      />
                    </div>
                  </div>
                  
                  <CardFooter className="px-0">
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={loading}
                    >
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        <span>{loading ? t.sending : t.submitButton}</span>
                      </div>
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessForm;

