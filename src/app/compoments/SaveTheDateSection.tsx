'use client';

import AnimatedSection from './AnimatedSection';
import OptimizedImage from './OptimizedImage';

interface SaveTheDateSectionProps {
  eventDate: Date;
}

export default function SaveTheDateSection({ eventDate }: SaveTheDateSectionProps) {
  // Format date
  const dayOfWeek = eventDate.toLocaleDateString("vi-VN", { weekday: "long" });
  const dateStr = eventDate.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const timeStr = eventDate.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Get calendar data
  const day = eventDate.getDate();
  const month = eventDate.getMonth();
  const year = eventDate.getFullYear();

  // Generate calendar days (simplified)
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const calendarDays = [];

  // Add empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Add actual days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="bg-gradient-to-b from-[#f5f0ea] to-white rounded-lg shadow-2xl p-8 md:p-12 mt-8">
      <div className="text-center space-y-8">
        {/* Title */}
        <AnimatedSection direction="down">
          <h2 className="font-serif text-4xl md:text-5xl text-[#c9a87b] tracking-[0.2em]">
            SAVE THE DATE
          </h2>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="space-y-2 text-[#8b7355] max-w-xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed">
              Dù một vòng lần rơi vẫn gặp anh,
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Từ đó, thế gian bỗng hóa dịu dàng.
            </p>
          </div>
        </AnimatedSection>

        {/* Calendar Photo Frame */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="max-w-md mx-auto">
            <div className="bg-black p-4 md:p-6 rounded-lg shadow-2xl">
            {/* Photo */}
            <div className="relative aspect-[3/4] bg-gray-200 rounded overflow-hidden mb-4">
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto opacity-30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm mt-2">Ảnh save the date</p>
                  <p className="text-xs">(/public/images/save-date.png)</p>
                </div>
              </div>
              {/* Uncomment when you have the image */}
              <OptimizedImage
                src="/image_wedding/LIU_4865.png" 
                alt="Save The Date"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />

              {/* Calendar overlay on photo */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl max-w-[280px] w-full">
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {/* Week days header */}
                    {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((d) => (
                      <div key={d} className="text-[10px] font-semibold text-gray-600 py-1">
                        {d}
                      </div>
                    ))}
                    
                    {/* Calendar days */}
                    {calendarDays.map((dayNum, idx) => (
                      <div key={idx} className="aspect-square flex items-center justify-center">
                        {dayNum ? (
                          <div
                            className={`w-full h-full flex items-center justify-center text-xs md:text-sm ${
                              dayNum === day
                                ? "bg-[#c9a87b] text-white font-bold rounded-full"
                                : "text-gray-700"
                            }`}
                          >
                            {dayNum}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Date Info */}
            <AnimatedSection direction="up" delay={0.4}>
              <div className="text-center space-y-1">
                <p className="font-serif text-[#c9a87b] text-xl md:text-2xl">
                  {dayOfWeek}, {dateStr}
                </p>
                <p className="text-[#c9a87b] text-base md:text-lg">
                  Âm lịch 18/01/2026 | {timeStr.toUpperCase()}
                </p>
              </div>
            </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
