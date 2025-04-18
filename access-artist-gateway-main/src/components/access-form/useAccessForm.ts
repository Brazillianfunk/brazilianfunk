
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

export interface FormData {
  artistName: string;
  email: string;
  phone: string;
  spotify: string;
  youtube: string;
  soundcloud: string;
  message: string;
  [key: string]: string; // Add index signature to make FormData assignable to Record<string, string>
}

const initialFormData: FormData = {
  artistName: "",
  email: "",
  phone: "",
  spotify: "",
  youtube: "",
  soundcloud: "",
  message: ""
};

export const useAccessForm = (language: string) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  emailjs.init("4OD9DjHqlNsAbFcFD");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.spotify && !formData.youtube && !formData.soundcloud) {
        toast({
          variant: "destructive",
          title: language === 'pt' ? "Erro" : language === 'es' ? "Error" : "Error",
          description: language === 'pt' ? "Forneça pelo menos um link de plataforma" : 
                       language === 'es' ? "Proporcione al menos un enlace de plataforma" : 
                       "Provide at least one platform link"
        });
        setLoading(false);
        return;
      }

      const platformsList = [];
      if (formData.spotify) platformsList.push(`Spotify: ${formData.spotify}`);
      if (formData.youtube) platformsList.push(`YouTube: ${formData.youtube}`);
      if (formData.soundcloud) platformsList.push(`SoundCloud: ${formData.soundcloud}`);
      
      const templateParams = {
        nome: formData.artistName,
        email: formData.email,
        telefone: formData.phone,
        spotify: formData.spotify || "Não fornecido",
        youtube: formData.youtube || "Não fornecido",
        soundcloud: formData.soundcloud || "Não fornecido",
        mensagem: formData.message || "Sem mensagem",
        plataformas: platformsList.join(", ")
      };

      const response = await emailjs.send(
        "service_fkl49we",
        "template_j26ktxj",
        templateParams
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        toast({
          title: language === 'pt' ? "Solicitação enviada!" : 
                 language === 'es' ? "¡Solicitud enviada!" : 
                 "Request sent!",
          description: language === 'pt' ? "Entraremos em contato em breve." :
                      language === 'es' ? "Nos pondremos en contacto pronto." :
                      "We'll be in touch soon."
        });
        setFormData(initialFormData);
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: language === 'pt' ? "Erro ao enviar" :
               language === 'es' ? "Error al enviar" :
               "Error sending",
        description: language === 'pt' ? "Houve um problema ao enviar sua solicitação. Tente novamente mais tarde." :
                    language === 'es' ? "Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo más tarde." :
                    "There was a problem sending your request. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    isSubmitted,
    handleChange,
    handleSubmit
  };
};
