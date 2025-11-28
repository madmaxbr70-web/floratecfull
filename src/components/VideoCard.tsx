import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  videoId: string;
  moduleNumber: number;
}

const VideoCard = ({ title, videoId, moduleNumber }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-video bg-muted">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full group"
              aria-label={`Assistir ${title}`}
            >
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          )}
        </div>
        <div className="p-4">
          <span className="text-xs font-semibold text-primary mb-2 block">
            Módulo {moduleNumber}
          </span>
          <h3 className="text-sm font-medium text-card-foreground leading-snug">
            {title}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
