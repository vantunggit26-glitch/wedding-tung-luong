"use client";

import { Music, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio on mount (if you have a music file)
    // audioRef.current = new Audio("/path-to-your-music.mp3");
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-8 right-8 bg-[#c9a87b] hover:bg-[#b89968] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-50"
      aria-label={isPlaying ? "Tắt nhạc" : "Phát nhạc"}
    >
      {isPlaying ? <Pause size={24} /> : <Music size={24} />}
    </button>
  );
}
