
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Music2, Youtube, Music } from "lucide-react";

interface Platform {
  name: string;
  icon: JSX.Element;
  placeholder: string;
}

interface PlatformFieldsProps {
  platforms: Platform[];
  values: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}

export const PlatformFields = ({ platforms, values, onChange, title }: PlatformFieldsProps) => {
  return (
    <div className="space-y-4 pt-2">
      <h4 className="font-medium text-sm">{title}</h4>
      {platforms.map((platform) => (
        <div key={platform.name} className="space-y-2">
          <div className="flex items-center gap-2">
            {platform.icon}
            <Label htmlFor={platform.name}>{platform.placeholder}</Label>
          </div>
          <Input
            id={platform.name}
            name={platform.name}
            placeholder={platform.placeholder}
            value={values[platform.name]}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};

export const getPlatforms = (language: string) => {
  const baseIcons = {
    spotify: <Music2 className="h-5 w-5 text-[#1DB954]" />,
    youtube: <Youtube className="h-5 w-5 text-[#FF0000]" />,
    soundcloud: <Music className="h-5 w-5 text-[#FF7700]" />
  };
  
  if (language === 'pt') {
    return [
      { name: "spotify", icon: baseIcons.spotify, placeholder: "Perfil do Spotify (URL)" },
      { name: "youtube", icon: baseIcons.youtube, placeholder: "Canal do YouTube (URL)" },
      { name: "soundcloud", icon: baseIcons.soundcloud, placeholder: "Perfil do SoundCloud (URL)" }
    ];
  } else if (language === 'en') {
    return [
      { name: "spotify", icon: baseIcons.spotify, placeholder: "Spotify Profile (URL)" },
      { name: "youtube", icon: baseIcons.youtube, placeholder: "YouTube Channel (URL)" },
      { name: "soundcloud", icon: baseIcons.soundcloud, placeholder: "SoundCloud Profile (URL)" }
    ];
  } else {
    return [
      { name: "spotify", icon: baseIcons.spotify, placeholder: "Perfil de Spotify (URL)" },
      { name: "youtube", icon: baseIcons.youtube, placeholder: "Canal de YouTube (URL)" },
      { name: "soundcloud", icon: baseIcons.soundcloud, placeholder: "Perfil de SoundCloud (URL)" }
    ];
  }
};

