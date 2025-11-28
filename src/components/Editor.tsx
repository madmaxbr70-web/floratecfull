import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Save } from "lucide-react";
import { toast } from "sonner";
import { PageConfig } from "@/types/editor";

interface EditorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  config: PageConfig;
  onSave: (config: PageConfig) => void;
}

const Editor = ({ open, onOpenChange, config, onSave }: EditorProps) => {
  const [editConfig, setEditConfig] = useState<PageConfig>(config);

  const handleSave = () => {
    onSave(editConfig);
    toast.success("Alterações salvas com sucesso!");
    onOpenChange(false);
  };

  const addVideo = () => {
    setEditConfig({
      ...editConfig,
      videos: [...editConfig.videos, { title: "", videoId: "" }],
    });
  };

  const removeVideo = (index: number) => {
    const newVideos = editConfig.videos.filter((_, i) => i !== index);
    setEditConfig({ ...editConfig, videos: newVideos });
  };

  const updateVideo = (index: number, field: "title" | "videoId", value: string) => {
    const newVideos = [...editConfig.videos];
    newVideos[index] = { ...newVideos[index], [field]: value };
    setEditConfig({ ...editConfig, videos: newVideos });
  };

  const addTextSection = () => {
    setEditConfig({
      ...editConfig,
      textSections: [...editConfig.textSections, { id: Date.now().toString(), content: "" }],
    });
  };

  const removeTextSection = (id: string) => {
    const newSections = editConfig.textSections.filter((section) => section.id !== id);
    setEditConfig({ ...editConfig, textSections: newSections });
  };

  const updateTextSection = (id: string, content: string) => {
    const newSections = editConfig.textSections.map((section) =>
      section.id === id ? { ...section, content } : section
    );
    setEditConfig({ ...editConfig, textSections: newSections });
  };

  const addImageSection = () => {
    setEditConfig({
      ...editConfig,
      imageSections: [...editConfig.imageSections, { id: Date.now().toString(), url: "", alt: "" }],
    });
  };

  const removeImageSection = (id: string) => {
    const newSections = editConfig.imageSections.filter((section) => section.id !== id);
    setEditConfig({ ...editConfig, imageSections: newSections });
  };

  const updateImageSection = (id: string, field: "url" | "alt", value: string) => {
    const newSections = editConfig.imageSections.map((section) =>
      section.id === id ? { ...section, [field]: value } : section
    );
    setEditConfig({ ...editConfig, imageSections: newSections });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editor de Conteúdo</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="videos">Vídeos</TabsTrigger>
            <TabsTrigger value="text">Textos</TabsTrigger>
            <TabsTrigger value="images">Imagens</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="title">Título Principal</Label>
                <Input
                  id="title"
                  value={editConfig.title}
                  onChange={(e) => setEditConfig({ ...editConfig, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="subtitle">Subtítulo</Label>
                <Input
                  id="subtitle"
                  value={editConfig.subtitle}
                  onChange={(e) => setEditConfig({ ...editConfig, subtitle: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="pixKey">Chave PIX</Label>
                <Input
                  id="pixKey"
                  value={editConfig.pixKey}
                  onChange={(e) => setEditConfig({ ...editConfig, pixKey: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="primaryColor">Cor Primária (HSL)</Label>
                <Input
                  id="primaryColor"
                  value={editConfig.primaryColor}
                  onChange={(e) => setEditConfig({ ...editConfig, primaryColor: e.target.value })}
                  placeholder="340 75% 55%"
                />
              </div>
              <div>
                <Label htmlFor="accentColor">Cor de Destaque (HSL)</Label>
                <Input
                  id="accentColor"
                  value={editConfig.accentColor}
                  onChange={(e) => setEditConfig({ ...editConfig, accentColor: e.target.value })}
                  placeholder="340 80% 65%"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            <Button onClick={addVideo} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Vídeo
            </Button>
            {editConfig.videos.map((video, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-sm">Módulo {index + 1}</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => removeVideo(index)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <Label>Título</Label>
                    <Input
                      value={video.title}
                      onChange={(e) => updateVideo(index, "title", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>ID do Vídeo (YouTube)</Label>
                    <Input
                      value={video.videoId}
                      onChange={(e) => updateVideo(index, "videoId", e.target.value)}
                      placeholder="Ex: Jtm2zBmkBjs"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="text" className="space-y-4">
            <Button onClick={addTextSection} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Seção de Texto
            </Button>
            {editConfig.textSections.map((section) => (
              <Card key={section.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-sm">Texto</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => removeTextSection(section.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={section.content}
                    onChange={(e) => updateTextSection(section.id, e.target.value)}
                    rows={4}
                  />
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="images" className="space-y-4">
            <Button onClick={addImageSection} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Imagem
            </Button>
            {editConfig.imageSections.map((section) => (
              <Card key={section.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-sm">Imagem</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => removeImageSection(section.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <Label>URL da Imagem</Label>
                    <Input
                      value={section.url}
                      onChange={(e) => updateImageSection(section.id, "url", e.target.value)}
                      placeholder="https://exemplo.com/imagem.jpg"
                    />
                  </div>
                  <div>
                    <Label>Texto Alternativo</Label>
                    <Input
                      value={section.alt}
                      onChange={(e) => updateImageSection(section.id, "alt", e.target.value)}
                      placeholder="Descrição da imagem"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <Button onClick={handleSave} className="w-full" size="lg">
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Editor;
