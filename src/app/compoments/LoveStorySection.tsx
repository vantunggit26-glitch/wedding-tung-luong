'use client';

import AnimatedSection from './AnimatedSection';

export default function LoveStorySection() {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden mt-8">
      <div className="relative">
        {/* Top Quote */}
        <AnimatedSection direction="down">
          <div className="text-center py-8 px-4">
            <p className="text-[#8b7355] text-base md:text-lg leading-relaxed">
              Có lẽ thế gian này có vô vàn điều tươi đẹp, 
            </p>
            <p className="text-[#c9a87b] text-base md:text-lg leading-relaxed font-semibold">
              Nhưng trong lòng em, đẹp nhất vẫn chỉ có anh
            </p>
          </div>
        </AnimatedSection>

        {/* Photo with side text */}
        <div className="relative">
          {/* Side text - MY LOVE */}
          <div className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20">
            <div className="writing-mode-vertical text-[#c9a87b] text-2xl tracking-[0.5em] font-serif">
              MY LOVE
            </div>
          </div>

          {/* Side text - FOREVER */}
          <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <div className="writing-mode-vertical text-[#c9a87b] text-2xl tracking-[0.5em] font-serif">
              FOREVER
            </div>
          </div>

          {/* Main Photo Container */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative px-8 md:px-20">
              <div className="relative bg-gray-200 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <svg
                      className="w-20 h-20 mx-auto opacity-30"
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
                    <p className="text-sm mt-2"></p>
                    <p className="text-xs">()</p>
                  </div>
                </div>
                <img 
                  src="/image_wedding/LIU_6110.JPG" 
                  alt="My Love Forever"
                  className="w-full h-full object-cover"
                />

                {/* Overlay smaller photo at bottom left */}
                <div className="absolute bottom-4 left-4 w-32 h-40 md:w-40 md:h-48 bg-white p-2 shadow-xl rounded-lg overflow-hidden">
                  <img 
                    src="/image_wedding/LIU_6075.JPG" 
                    alt="Couple"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom Quote - I LOVE YOU */}
          <AnimatedSection direction="right" delay={0.3}>
            <div className="text-right pr-8 md:pr-20 mt-4">
              <h3 className="font-serif text-3xl md:text-4xl text-[#c9a87b] tracking-wider">
                I LOVE YOU
              </h3>
            </div>
          </AnimatedSection>
        </div>

        {/* Love Poem */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="text-center py-8 px-4 space-y-2">
            <p className="text-[#8b7355] text-sm md:text-base leading-relaxed">
              Những giọt xuân dịu dàng và tâm hồn
            </p>
            <p className="text-[#8b7355] text-sm md:text-base leading-relaxed">
              Xua tan mọi u phiền
            </p>
            <p className="text-[#8b7355] text-sm md:text-base leading-relaxed">
              Để mọi thứ trở nên bất biến
            </p>
          </div>
        </AnimatedSection>

        {/* Gallery Grid - 2 more photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-20 pb-8">
          <AnimatedSection direction="left" delay={0.5}>
            <div className="relative bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/image_wedding/LIU_5850.JPG" 
                alt="Love Story"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.5}>
            <div className="relative bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/image_wedding/LIU_6305.JPG" 
                alt="Love Story"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CSS for vertical text */}
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
