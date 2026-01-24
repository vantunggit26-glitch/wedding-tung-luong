import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text, Montserrat } from "next/font/google";
import "./globals.css";

// Import font Montserrat cho text thông thường (sang trọng, dễ đọc)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

// Import font Playfair Display cho tiêu đề (sang trọng, cổ điển)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "900"],
});

// Import font Crimson Text cho chữ viết tay/cursive (nhẹ nhàng, thanh lịch)
const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Thiệp Mời Đám Cưới - Tùng & Lương",
  description: "Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Thiệp Mời Đám Cưới",
    description: "Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại",
    images: [
      {
        url: "https://tung-luong-love.netlify.app/image_wedding/LIU_4701.png",
        width: 1200,
        height: 630,
        alt: "Wedding Photo Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiệp Mời Đám Cưới",
    description: "Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại",
    images: ["https://tung-luong-love.netlify.app/image_wedding/LIU_4701.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.variable} ${playfair.variable} ${crimson.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
