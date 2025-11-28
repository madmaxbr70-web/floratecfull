import { useState, useEffect } from "react";
import VideoCard from "@/components/VideoCard";
import FallingRoses from "@/components/FallingRoses";
import EditorLogin from "@/components/EditorLogin";
import Editor from "@/components/Editor";
import { Copy, Settings } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageConfig, defaultConfig } from "@/types/editor";

const Index = () => {
  const [config, setConfig] = useState<PageConfig>(defaultConfig);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    const savedConfig = localStorage.getItem("floratec-config");
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig));
      } catch (error) {
        console.error("Error loading config:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Apply colors dynamically
    const root = document.documentElement;
    root.style.setProperty("--primary", config.primaryColor);
    root.style.setProperty("--accent", config.accentColor);
  }, [config]);

  const handleSaveConfig = (newConfig: PageConfig) => {
    setConfig(newConfig);
    localStorage.setItem("floratec-config", JSON.stringify(newConfig));
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText(config.pixKey);
    toast.success("Chave PIX copiada!");
  };

  return (
    <>
      <FallingRoses />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted pb-8 relative z-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-8 px-4 shadow-lg">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold mb-2">{config.title}</h1>
            <p className="text-sm opacity-90">{config.subtitle}</p>
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
                <span>{config.pixKey}</span>
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Text Sections */}
        {config.textSections.map((section) => (
          <div key={section.id} className="max-w-md mx-auto px-4 mt-6">
            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <p className="text-foreground whitespace-pre-wrap">{section.content}</p>
            </div>
          </div>
        ))}

        {/* Image Sections */}
        {config.imageSections.map((section) => (
          <div key={section.id} className="max-w-md mx-auto px-4 mt-6">
            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <img
                src={section.url}
                alt={section.alt}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        ))}

        {/* Videos Section */}
        <main className="max-w-md mx-auto px-4 mt-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Módulos do Curso
          </h2>

          <div className="space-y-6">
            {config.videos.map((video, index) => (
              <VideoCard
                key={video.videoId}
                title={video.title}
                videoId={video.videoId}
                moduleNumber={index + 1}
              />
            ))}
          </div>
        </main>

        {/* Editor Button */}
        <div className="max-w-md mx-auto px-4 mt-12">
          <Button
            onClick={() => setShowLoginDialog(true)}
            variant="outline"
            className="w-full"
            size="lg"
          >
            <Settings className="w-4 h-4 mr-2" />
            Editor
          </Button>
        </div>

        {/* Footer */}
        <footer className="max-w-md mx-auto px-4 mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FLORATEC - Todos os direitos reservados
          </p>
        </footer>
      </div>

      <EditorLogin
        open={showLoginDialog}
        onOpenChange={setShowLoginDialog}
        onSuccess={() => setShowEditor(true)}
      />

      <Editor
        open={showEditor}
        onOpenChange={setShowEditor}
        config={config}
        onSave={handleSaveConfig}
      />
    </>
  );
};

export default Index;
