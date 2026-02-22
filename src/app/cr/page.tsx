import type { Metadata } from "next";
import MusicPlayer from "../compoments/MusicPlayer";
import WeddingInvitation from "../compoments/WeddingInvitation";
import Footer from "../compoments/Footer";

export const metadata: Metadata = {
  title: "Thiệp Mời Đám Cưới - Tùng & Lương (Nhà Trai)",
  description: "Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại",
  openGraph: {
    title: "Thiệp Mời Đám Cưới - Tùng & Lương",
    description: "Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại",
    url: "/cr",
    images: [
      {
        url: "/background/LIU_5447.png",
        width: 1200,
        height: 630,
        alt: "Thiệp Mời Đám Cưới Tùng & Lương",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiệp Mời Đám Cưới - Tùng & Lương",
    description: "Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại",
    images: ["/background/LIU_5447.png"],
  },
};

export default function GroomPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] relative overflow-hidden flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c9a87b] rounded-full blur-3xl" />
      </div>

      <div className="relative flex-1">
        <WeddingInvitation isBrideSide={false} />
        <MusicPlayer />
      </div>

      <Footer />
    </main>
  );
}
