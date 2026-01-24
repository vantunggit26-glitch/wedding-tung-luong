'use client';

import AnimatedSection from './AnimatedSection';
import OptimizedImage from './OptimizedImage';

export default function WeddingPhoto() {
  return (
    <AnimatedSection direction="up">
      <div className="mt-8 rounded-lg overflow-hidden shadow-2xl flex justify-center">
        <div className="relative w-full max-w-2xl h-[400px] md:h-[600px] bg-gradient-to-b from-gray-200 to-gray-300">
        {/* Wedding Image */}
        <OptimizedImage
          src="/image_wedding/LIU_5447.png" 
          alt="Wedding Photo"
          fill
          className="object-cover mx-auto"
          sizes="(max-width: 768px) 100vw, 672px"
          priority
          onError={(e: any) => {
            // Show placeholder if image fails to load
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />

        {/* Placeholder for wedding photo - Shows if image fails */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 hidden">
          <div className="text-center space-y-4">
            <svg
              className="w-24 h-24 mx-auto opacity-30"
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
            <p className="text-sm">Thêm ảnh cưới của bạn vào đây</p>
            <p className="text-xs">(Đặt ảnh vào /public/images/image_wedding/LIU_4701.png)</p>
          </div>
        </div>
        
        {/* Quote overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6 text-center">
          <p className="text-sm md:text-base italic font-serif">
            As the clouds and mist dissipate, I love you and everyone knows it
          </p>
        </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
