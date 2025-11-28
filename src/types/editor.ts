export interface VideoModule {
  title: string;
  videoId: string;
}

export interface TextSection {
  id: string;
  content: string;
}

export interface ImageSection {
  id: string;
  url: string;
  alt: string;
}

export interface PageConfig {
  primaryColor: string;
  accentColor: string;
  title: string;
  subtitle: string;
  pixKey: string;
  videos: VideoModule[];
  textSections: TextSection[];
  imageSections: ImageSection[];
}

export const defaultConfig: PageConfig = {
  primaryColor: "340 75% 55%",
  accentColor: "340 80% 65%",
  title: "Bem-vindo ao FLORATEC",
  subtitle: "Aprenda a arte de pintar flores em tecido",
  pixKey: "99 8121-1612",
  videos: [
    {
      title: "Como pintar flores do campo cor de rosa em tecido. Muito fácil. Iniciantes. Renda extra.",
      videoId: "Jtm2zBmkBjs"
    },
    {
      title: "Como pintar papoulas em tecido. Renda extra. Pintura em tecido.",
      videoId: "fljB-cxFLLo"
    },
    {
      title: "Como pintar flores do campo em tecido. azul e lilás Fácil. Para iniciantes.",
      videoId: "5cVhuxlMM2Q"
    },
    {
      title: "Como pintar folhas em tecido. Para iniciantes! Vídeo completo no meu canal.",
      videoId: "59ykDhiO5v8"
    },
    {
      title: "Como pintar folhas em tecido. Para iniciantes!",
      videoId: "d1qyF2qdFqU"
    },
    {
      title: "Como pintar folhas em tecido. Muito fácil. Vídeo completo no meu canal.",
      videoId: "4EYChNkxxEc"
    },
    {
      title: "Como pintar flor do campo azul em tecido. Vídeo completo no meu canal.",
      videoId: "DJXXGeqeZ0U"
    },
    {
      title: "Como pintar papoula lilás em tecido. Vídeo completo no meu canal. Assistam! Se inscrevam!",
      videoId: "ft3YoE89RyU"
    }
  ],
  textSections: [],
  imageSections: [],
};
