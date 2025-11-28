export const extractVideoId = (url: string): string | null => {
  try {
    // Remove espaços em branco
    const cleanUrl = url.trim();
    
    // Padrão para youtube.com/watch?v=VIDEO_ID
    const watchMatch = cleanUrl.match(/[?&]v=([^&]+)/);
    if (watchMatch) {
      return watchMatch[1];
    }
    
    // Padrão para youtu.be/VIDEO_ID
    const shortMatch = cleanUrl.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch) {
      return shortMatch[1];
    }
    
    // Padrão para youtube.com/embed/VIDEO_ID
    const embedMatch = cleanUrl.match(/youtube\.com\/embed\/([^?&]+)/);
    if (embedMatch) {
      return embedMatch[1];
    }
    
    return null;
  } catch (error) {
    console.error("Error extracting video ID:", error);
    return null;
  }
};
