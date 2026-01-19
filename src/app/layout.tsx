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
