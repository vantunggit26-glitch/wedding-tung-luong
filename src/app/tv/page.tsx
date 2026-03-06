'use client';

import React, { useEffect, useState, useRef } from 'react';

// Component hoa rơi
const FallingPetals = () => {
  const [petals, setPetals] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
    opacity: number;
    type: string;
    swayAmount: number;
  }>>([]);

  useEffect(() => {
    // Tạo các cánh hoa với vị trí và timing ngẫu nhiên
    const petalTypes = ['🌸', '🏵️', '💮', '🎊', '✨', '❤️'];
    const newPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8,
      size: 14 + Math.random() * 14,
      opacity: 0.5 + Math.random() * 0.3,
      type: petalTypes[Math.floor(Math.random() * petalTypes.length)],
      swayAmount: 5 + Math.random() * 10,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) translateX(20px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            opacity: petal.opacity,
            animation: `fall ${petal.duration}s ease-in-out infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          {petal.type}
        </div>
      ))}
    </div>
  );
};

// Component cho mỗi ảnh với animation
const ImageItem = ({ src, index }: { src: string; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20'
      }`}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={src}
          alt={`Wedding Photo ${index + 1}`}
          className="w-full h-full object-cover aspect-[3/4]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default function TVBanner() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Danh sách 30 ảnh
  const images = [
    '/image_wedding/LIU_4701.png',
    '/image_wedding/LIU_4830.png',
    '/image_wedding/LIU_4865.png',
    '/image_wedding/LIU_4944.png',
    '/image_wedding/LIU_5016.png',
    '/image_wedding/LIU_5023.png',
    '/image_wedding/LIU_5169.png',
    '/image_wedding/LIU_5303.png',
    '/image_wedding/LIU_5412.png',
    '/image_wedding/LIU_5428.png',
    '/image_wedding/LIU_5447.png',
    '/image_wedding/LIU_5495.png',
    '/image_wedding/LIU_5538.png',
    '/image_wedding/LIU_5743.png',
    '/image_wedding/LIU_5751.png',
    '/image_wedding/LIU_5768.png',
    '/image_wedding/LIU_5775.png',
    '/image_wedding/LIU_5837.png',
    '/image_wedding/LIU_5841.png',
    '/image_wedding/LIU_5850.png',
    '/image_wedding/LIU_5860.png',
    '/image_wedding/LIU_5932.png',
    '/image_wedding/LIU_5990.png',
    '/image_wedding/LIU_6016.png',
    '/image_wedding/LIU_6075.png',
    '/image_wedding/LIU_6110.png',
    '/image_wedding/LIU_6305.png',
    '/image_wedding/LIU_6369.png',
    '/image_wedding/LIU_6533.png',
    '/image_wedding/LIU_6537.png',
  ];

  // Hàm toggle fullscreen khi double-click
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log('Không thể vào fullscreen:', err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Lắng nghe sự kiện fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div 
      className="min-h-screen w-full bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 relative overflow-auto"
      onDoubleClick={toggleFullscreen}
      title="Double-click để phóng to/thu nhỏ màn hình"
    >
      {/* Animation hoa rơi */}
      <FallingPetals />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 py-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-serif text-6xl text-[#c9a87b] tracking-wide">
            Văn Tùng <span className="text-red-500">❤️</span> Lương Lương
          </h1>
          <p className="text-2xl text-[#8b7355]">Lễ Hỏi Dâu - 30.01.2026</p>
          <div className="text-lg text-[#8b7355] italic">
            <p>Dù một vòng lần rơi vẫn gặp anh,</p>
            <p>Từ đó, thế gian bỗng hóa dịu dàng.</p>
          </div>
        </div>

        {/* Gallery - Grid 3 columns with animation */}
        <div className="grid grid-cols-3 gap-6">
          {images.map((image, index) => (
            <ImageItem key={image} src={image} index={index} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-[#c9a87b]/30">
          <p className="text-2xl font-serif text-[#c9a87b] mb-4">
            Trăm năm hạnh phúc ❤️
          </p>
          <p className="text-[#8b7355]">
            Nhằm ngày 12 tháng 12 năm Ất Tỵ
          </p>
        </div>

      </div>
    </div>
  );
}
