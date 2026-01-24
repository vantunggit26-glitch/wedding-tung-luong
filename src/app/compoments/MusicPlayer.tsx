"use client";

import { Music, Pause, Play, SkipBack, SkipForward, Volume2, List, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import OptimizedImage from "./OptimizedImage";

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  coverImage: string;
  audioUrl: string;
}

export default function MusicPlayer() {
  // Sample playlist data
  const playlist: Song[] = [
    {
      id: 1,
      title: "Dancing In The Dark",
      artist: "Unknown Artist",
      duration: "4:32",
      coverImage: "/image_wedding/LIU_5016.JPG",
      audioUrl: "/songs/Dancing_In_The_Dark.mp3"
    },
    {
      id: 2,
      title: "Lễ Đường",
      artist: "Unknown Artist",
      duration: "3:45",
      coverImage: "/image_wedding/LIU_5538.JPG",
      audioUrl: "/songs/Le_Duong.mp3"
    },
    {
      id: 3,
      title: "Vạn vật như muốn ta bên nhau",
      artist: "Unknown Artist",
      duration: "4:15",
      coverImage: "/image_wedding/LIU_5447.JPG",
      audioUrl: "/songs/van_vat_nhu_muon_ta_ben_nhau.mp3"
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(playlist.length - 1); // Bắt đầu từ bài cuối
  const [volume, setVolume] = useState(70);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong = playlist[currentSongIndex];

  // Auto play last song on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.log("Auto-play failed:", err);
        });
        setIsPlaying(true);
      }
    }, 1000); // Delay 1s để đảm bảo component đã render xong
    
    return () => clearTimeout(timer);
  }, []); // Chỉ chạy 1 lần khi mount

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    // Auto play when song changes
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(err => {
        console.log("Playback failed:", err);
        setIsPlaying(false);
      });
    }
  }, [currentSongIndex, isPlaying]);

  useEffect(() => {
    // Handle song end - auto play next
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        playNext();
      };
      
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };
      
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      return () => {
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log("Playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    const prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const playSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Floating Music Button */}
      <button
        onClick={() => setShowPlaylist(!showPlaylist)}
        className="fixed bottom-8 right-8 bg-[#c9a87b] hover:bg-[#b89968] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-[60]"
        aria-label="Mở danh sách nhạc"
      >
        {showPlaylist ? <X size={24} /> : <Music size={24} />}
      </button>

      {/* Playlist Modal - Spotify Style */}
      {showPlaylist && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#c9a87b] to-[#b89968] p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold font-serif">Wedding Playlist Van Tung</h2>
                  <p className="text-sm opacity-90 mt-1">{playlist.length} bài hát</p>
                </div>
                <button
                  onClick={() => setShowPlaylist(false)}
                  className="hover:bg-white/20 rounded-full p-2 transition"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Current Playing Song */}
            <div className="bg-gradient-to-b from-gray-50 to-white p-6 border-b border-gray-200">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                  <OptimizedImage
                    src={currentSong.coverImage}
                    alt={currentSong.title}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                  {isPlaying && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Music size={20} className="text-white animate-pulse" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{currentSong.title}</h3>
                  <p className="text-sm text-gray-600">{currentSong.artist}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#c9a87b]"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Player Controls */}
              <div className="mt-4 flex items-center justify-center gap-6">
                <button
                  onClick={playPrevious}
                  className="hover:bg-gray-200 rounded-full p-2 transition"
                >
                  <SkipBack size={20} className="text-gray-700" />
                </button>
                <button
                  onClick={togglePlay}
                  className="bg-[#c9a87b] hover:bg-[#b89968] text-white rounded-full p-3 transition shadow-lg"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-0.5" />}
                </button>
                <button
                  onClick={playNext}
                  className="hover:bg-gray-200 rounded-full p-2 transition"
                >
                  <SkipForward size={20} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Playlist */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3 px-2">
                  <div className="flex items-center gap-2">
                    <List size={18} className="text-gray-600" />
                    <h3 className="font-semibold text-gray-900">Danh sách phát</h3>
                  </div>
                  
                  {/* Volume Control - Horizontal */}
                  <div className="flex items-center gap-2">
                    <Volume2 size={16} className="text-gray-600" />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-24 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#c9a87b]"
                    />
                    <span className="text-xs text-gray-600 w-8">{volume}%</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {playlist.map((song, index) => (
                    <button
                      key={song.id}
                      onClick={() => playSong(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-100 ${
                        index === currentSongIndex ? 'bg-[#c9a87b]/10' : ''
                      }`}
                    >
                      <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                        <OptimizedImage
                          src={song.coverImage}
                          alt={song.title}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                        {index === currentSongIndex && isPlaying && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Music size={16} className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <p className={`font-medium truncate ${
                          index === currentSongIndex ? 'text-[#c9a87b]' : 'text-gray-900'
                        }`}>
                          {song.title}
                        </p>
                        <p className="text-sm text-gray-600 truncate">{song.artist}</p>
                      </div>
                      <span className="text-sm text-gray-500">{song.duration}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={currentSong.audioUrl} />
    </>
  );
}
