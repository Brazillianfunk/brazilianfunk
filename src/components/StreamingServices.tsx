
import { Globe, Instagram } from "lucide-react";
import { useLanguage } from "./Navbar";

const translations = {
  pt: {
    platforms: "30+ plataformas pelo mundo",
    networkText: "Nossa rede global distribui seu conteúdo para todas as plataformas digitais"
  },
  en: {
    platforms: "30+ platforms worldwide",
    networkText: "Our global network distributes your content to all digital platforms"
  },
  es: {
    platforms: "Más de 30 plataformas en todo el mundo",
    networkText: "Nuestra red global distribuye tu contenido a todas las plataformas digitales"
  }
};

const StreamingServices = () => {
  const { language } = useLanguage();
  const services = [
    { name: "Spotify", logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" },
    { name: "Instagram", logo: "" },
    { name: "Tidal", logo: "https://tidal.com/_nuxt/img/android-chrome-512x512.867a574.png" },
    { name: "TikTok", logo: "https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-7328701c.svg" },
    { name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" },
    { name: "Deezer", logo: "https://e-cdns-files.dzcdn.net/img/common/opengraph-logo.png" },
  ];

  const t = translations[language as keyof typeof translations] || translations.pt;

  return (
    <div className="py-10 relative w-full">
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full">
          <Globe className="h-5 w-5 text-primary" />
          <span className="text-sm text-primary">{t.platforms}</span>
        </div>
      </div>
      
      <div className="w-full">
        <div className="flex items-center gap-8 md:gap-12 justify-center flex-wrap mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center flex-shrink-0"
              style={{ minWidth: '120px' }}
            >
              {service.name === "Spotify" && (
                <svg viewBox="0 0 24 24" className="h-8 w-24 text-white" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              )}
              {service.name === "Instagram" && (
                <Instagram className="h-8 w-16 text-white" />
              )}
              {service.name === "Tidal" && (
                <svg viewBox="0 0 24 24" className="h-8 w-16 text-white" fill="currentColor">
                  <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z" />
                </svg>
              )}
              {service.name === "TikTok" && (
                <svg viewBox="0 0 24 24" className="h-8 w-16 text-white" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              )}
              {service.name === "YouTube" && (
                <svg viewBox="0 0 24 24" className="h-8 w-16 text-white" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              )}
              {service.name === "Deezer" && (
                <svg viewBox="0 0 24 24" className="h-8 w-16 text-white" fill="currentColor">
                  <path d="M18.81 4.16v3.03H24V4.16h-5.19zm0 12.65h5.19v-3.03h-5.19v3.03zm0-6.32h5.19V7.46h-5.19v3.03zm-6.4 6.32h5.19v-3.03h-5.19v3.03zm0-6.32h5.19V7.46h-5.19v3.03zm0-6.33v3.03h5.19V4.16h-5.19zM6 16.81h5.19v-3.03H6v3.03zm0-6.32h5.19V7.46H6v3.03zM6 4.16v3.03h5.19V4.16H6zM0 16.81h5.19v-3.03H0v3.03zm0-6.32h5.19V7.46H0v3.03zm0-6.33v3.03h5.19V4.16H0z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-8 max-w-xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>
        <p className="text-center text-xs text-muted-foreground mt-4">{t.networkText}</p>
      </div>
    </div>
  );
};

export default StreamingServices;
