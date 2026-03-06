'use client';

import React, { useEffect, useState } from 'react';

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

export default function TVBanner() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const photoContainerRef = React.useRef<HTMLDivElement>(null);

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

  // Auto scroll cho danh sách ảnh
  useEffect(() => {
    const container = photoContainerRef.current;
    if (!container) return;

    const scrollSpeed = 1; // pixels per frame
    const scrollDelay = 30; // milliseconds

    const autoScroll = setInterval(() => {
      container.scrollTop += scrollSpeed;
      
      // Khi cuộn đến 50% chiều cao (cuối set ảnh đầu tiên), reset về đầu
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const halfPoint = (scrollHeight - clientHeight) / 2;
      
      if (container.scrollTop >= halfPoint) {
        container.scrollTop = 0;
      }
    }, scrollDelay);

    return () => clearInterval(autoScroll);
  }, []);

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

  // Ngày lễ hỏi dâu: 08/03/2026
  const eventDate = new Date(2026, 2, 8, 13, 0); // 08/03/2026, 1:00 PM
  
  // Thông tin lễ hỏi dâu
  const weddingInfo = {
    date: '08/03/2026',
    dayOfWeek: 'Chủ Nhật',
    lunarDate: 'Ngày 20 tháng Giêng năm Bính Ngọ',
    time: '13:00',
  };

  // Danh sách ảnh cưới
  const weddingPhotos = [
    'LIU_4701.png', 'LIU_4830.png', 'LIU_4865.png', 'LIU_4944.png',
    'LIU_5016.png', 'LIU_5023.png', 'LIU_5169.png', 'LIU_5303.png',
    'LIU_5412.png', 'LIU_5428.png', 'LIU_5447.png', 'LIU_5495.png',
    'LIU_5538.png', 'LIU_5743.png', 'LIU_5751.png', 'LIU_5768.png',
    'LIU_5775.png', 'LIU_5837.png', 'LIU_5841.png', 'LIU_5850.png',
    'LIU_5860.png', 'LIU_5932.png', 'LIU_5990.png', 'LIU_6016.png',
    'LIU_6075.png', 'LIU_6110.png', 'LIU_6305.png', 'LIU_6369.png',
    'LIU_6533.png', 'LIU_6537.png',
  ];

  // Lời chúc
  const wishes = [
    'Trăm năm hạnh phúc',
    'Vạn sự như ý',
    'Sắt cầm hảo hợp',
    'Bách niên giai lão',
  ];

  // Calendar cho tháng 1/2026
  const day = eventDate.getDate(); // 30
  const month = eventDate.getMonth(); // 0 (January)
  const year = eventDate.getFullYear(); // 2026
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const calendarDays: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 p-6 relative overflow-hidden">
      {/* Animation hoa rơi */}
      <FallingPetals />
      
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        
        {/* Layout: Bên trái (Ảnh + Lời chúc) | Bên phải (Save The Date) */}
        <div className="flex flex-row gap-6" style={{ display: 'flex' }}>
          
          {/* ===== CỘT TRÁI: DANH SÁCH ẢNH CƯỚI (3 cột) ===== */}
          <div 
            ref={photoContainerRef}
            style={{ 
              width: '50%', 
              height: '824px',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
            }} 
            className="rounded-2xl overflow-y-auto bg-white p-4 flex-shrink-0"
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none; /* Chrome, Safari, Opera */
              }
            `}</style>
            <div style={{ columnCount: 3, columnGap: '12px' }}>
              {/* Duplicate danh sách ảnh 2 lần để tạo infinite scroll */}
              {[...weddingPhotos, ...weddingPhotos].map((photo, index) => (
                <div 
                  key={index} 
                  style={{ 
                    marginBottom: '12px',
                    breakInside: 'avoid',
                    borderRadius: '8px', 
                    overflow: 'hidden', 
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
                  }}
                >
                  <img
                    src={`/image_wedding/${photo}`}
                    alt={`Ảnh cưới ${index + 1}`}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== CỘT PHẢI: SAVE THE DATE (Full height 800px) ===== */}
          <div style={{ width: '50%', height: '824px' }} className="bg-gradient-to-b from-[#f5f0ea] to-white rounded-2xl flex flex-col justify-center items-center p-8 flex-shrink-0">
            <div className="text-center space-y-8">
              {/* Header */}
              <h3 className="font-serif text-4xl text-[#c9a87b] tracking-[0.2em]">
                LỄ THÀNH HÔN
              </h3>

              {/* Quote */}
              <div className="text-[#8b7355] text-lg">
                <p>Từ ngày em đến bên anh,</p>
                <p>Đời anh như có thêm nắng, thêm hương xuân về.</p>
              </div>

              {/* Calendar */}
              <div 
                className="bg-black p-6 rounded-lg inline-block cursor-pointer" 
                onDoubleClick={toggleFullscreen}
                title="Double-click để phóng to/thu nhỏ màn hình"
              >
                <div className="bg-white/95 p-6 rounded-lg">
                  {/* Month/Year Header */}
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-[#c9a87b]">
                      Tháng 03 - 2026
                    </p>
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 text-center" style={{ width: '350px' }}>
                    {/* Week days header */}
                    {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((d) => (
                      <div key={d} className="text-sm font-semibold text-gray-600 py-2">
                        {d}
                      </div>
                    ))}
                    
                    {/* Calendar days */}
                    {calendarDays.map((dayNum, idx) => (
                      <div key={idx} className="aspect-square flex items-center justify-center">
                        {dayNum ? (
                          <div
                            className={`w-10 h-10 flex items-center justify-center text-lg ${
                              dayNum === day
                                ? 'bg-[#c9a87b] text-white font-bold rounded-full animate-pulse'
                                : 'text-gray-700'
                            }`}
                          >
                            {dayNum}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Date Info */}
                <div className="text-center mt-4 space-y-2">
                  <p className="font-serif text-[#c9a87b] text-2xl">
                    {weddingInfo.dayOfWeek}, {weddingInfo.date}
                  </p>
                  <p className="text-[#c9a87b] text-lg">
                    {weddingInfo.lunarDate}
                  </p>
                  <p className="text-[#c9a87b] text-xl font-bold mt-2">
                    {weddingInfo.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
