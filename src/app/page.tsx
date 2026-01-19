import MusicPlayer from "./compoments/MusicPlayer";
import WeddingInvitation from "./compoments/WeddingInvitation";
import Footer from "./compoments/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#faf8f5] relative overflow-hidden flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c9a87b] rounded-full blur-3xl" />
      </div>

      <div className="relative flex-1">
        <WeddingInvitation />
        <MusicPlayer />
      </div>

      <Footer />
    </main>
  );
}
