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
  metadataBase: new URL('https://wedding-tung-luong.vercel.app'),
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
    title: "Thiệp Mời Đám Cưới - Tùng & Lương",
    description: "Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại",
    url: "/",
    siteName: "Thiệp Mời Đám Cưới",
    images: [
      {
        url: "/image_wedding/LIU_5447.png",
        width: 1200,
        height: 630,
        alt: "Thiệp Mời Đám Cưới Tùng & Lương",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiệp Mời Đám Cưới - Tùng & Lương",
    description: "Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại",
    images: ["/image_wedding/LIU_5447.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta property="og:title" content="Thiệp Mời Đám Cưới - Tùng & Lương" />
        <meta property="og:description" content="Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại" />
        <meta property="og:image" content="https://wedding-tung-luong.vercel.app/image_wedding/LIU_5447.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://wedding-tung-luong.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:site_name" content="Thiệp Mời Đám Cưới" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thiệp Mời Đám Cưới - Tùng & Lương" />
        <meta name="twitter:description" content="Cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại" />
        <meta name="twitter:image" content="https://wedding-tung-luong.vercel.app/image_wedding/LIU_5447.png" />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} ${crimson.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
