import Countdown from "./Countdown";
import MusicPlayer from "./MusicPlayer";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-pink-700 shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Countdown bên trái */}
      <Countdown targetDate={new Date('2026-03-08')} />

      {/* Music player bên phải */}
      <MusicPlayer />
    </header>
  );
}
