'use client';

import AnimatedSection from './AnimatedSection';
import OptimizedImage from './OptimizedImage';

export default function PhotoGallery() {
  const photos = [
    { id: 1, src: '/image_wedding/LIU_5016.png' },
    { id: 2, src: '/image_wedding/LIU_5538.png' },
    { id: 3, src: '/image_wedding/LIU_5860.png' },
    { id: 4, src: '/image_wedding/LIU_5837.png' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 mt-8">
      <div className="text-center space-y-8">
        <AnimatedSection direction="up">
          <h2 className="font-serif text-3xl md:text-4xl text-[#c9a87b] tracking-wide">
            Our Story
          </h2>
        </AnimatedSection>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mt-8">
          {photos.map((photo, index) => (
            <AnimatedSection 
              key={photo.id}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg group">
                <OptimizedImage
                  src={photo.src}
                  alt={`Our moment ${photo.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
