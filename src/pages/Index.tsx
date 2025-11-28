import VideoCard from "@/components/VideoCard";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const videos = [
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
  ];

  const pixKey = "99 8121-1612";

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast.success("Chave PIX copiada!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pb-8">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-8 px-4 shadow-lg">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2">Bem-vindo ao FLORATEC</h1>
          <p className="text-sm opacity-90">
            Aprenda a arte de pintar flores em tecido
          </p>
        </div>
      </header>

      {/* PIX Section */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Chave PIX para pagamento:</p>
            <button
              onClick={copyPixKey}
              className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:text-accent transition-colors"
              aria-label="Copiar chave PIX"
            >
              <span>{pixKey}</span>
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <main className="max-w-md mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Módulos do Curso
        </h2>
        
        <div className="space-y-6">
          {videos.map((video, index) => (
            <VideoCard
              key={video.videoId}
              title={video.title}
              videoId={video.videoId}
              moduleNumber={index + 1}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} FLORATEC - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default Index;
