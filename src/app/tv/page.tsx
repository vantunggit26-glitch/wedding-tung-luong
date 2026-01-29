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

  // Ngày lễ hỏi dâu: 30/01/2026
  const eventDate = new Date(2026, 0, 30, 9, 0); // 30/01/2026, 9:00 AM
  
  // Thông tin lễ hỏi dâu
  const weddingInfo = {
    date: '30/01/2026',
    dayOfWeek: 'Thứ Sáu',
    lunarDate: 'Ngày 12 tháng 12 năm Ất Tỵ',
    time: '10:00',
  };

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
          
          {/* ===== CỘT TRÁI: ẢNH CƯỚI FULL ===== */}
          <div 
            style={{ width: '50%', height: '824px' }} 
            className="relative rounded-2xl overflow-hidden border-4 border-yellow-400 flex-shrink-0 cursor-pointer"
            onDoubleClick={toggleFullscreen}
            title="Double-click để phóng to/thu nhỏ màn hình"
          >
            <img
              src="/image_wedding/LIU_6305.png"
              alt="Ảnh Cưới"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ===== CỘT PHẢI: SAVE THE DATE (Full height 800px) ===== */}
          <div style={{ width: '50%', height: '824px' }} className="bg-gradient-to-b from-[#f5f0ea] to-white rounded-2xl border-4 border-[#c9a87b] flex flex-col justify-center items-center p-8 flex-shrink-0">
            <div className="text-center space-y-8">
              {/* Header */}
              <h3 className="font-serif text-4xl text-[#c9a87b] tracking-[0.2em]">
                LỄ HỎI DÂU
              </h3>

              {/* Quote */}
              <div className="text-[#8b7355] text-lg">
                <p>Dù một vòng lần rơi vẫn gặp anh,</p>
                <p>Từ đó, thế gian bỗng hóa dịu dàng.</p>
              </div>

              {/* Calendar */}
              <div className="bg-black p-6 rounded-lg inline-block">
                <div className="bg-white/95 p-6 rounded-lg">
                  {/* Month/Year Header */}
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-[#c9a87b]">
                      Tháng 01 - 2026
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
