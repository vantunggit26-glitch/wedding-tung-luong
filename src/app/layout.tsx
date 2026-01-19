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
  title: "Thiệp Mời Đám Cưới",
  description: "Trang thiệp mời đám cưới được tạo bằng Next.js + Tailwind",
  openGraph: {
    title: "Thiệp Mời Đám Cưới",
    description: "Trang thiệp mời đám cưới được tạo bằng Next.js + Tailwind",
    images: [
      {
        url: "/image_wedding/LIU_4701.JPG",
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
    description: "Trang thiệp mời đám cưới được tạo bằng Next.js + Tailwind",
    images: ["/image_wedding/LIU_4701.JPG"],
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
