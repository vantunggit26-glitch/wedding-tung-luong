'use client';

import AnimatedSection from './AnimatedSection';
import dynamic from 'next/dynamic';

// Dynamically import GoogleMapLocation to avoid SSR issues with Leaflet
const GoogleMapLocation = dynamic(() => import('./GoogleMapLocation'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] md:h-[400px] bg-gray-100 rounded-lg animate-pulse" />
});

interface LocationSectionProps {
  title: string;
  address: string;
  mapUrl: string;
  lat: number;
  lng: number;
  locationName: string;
}

export default function LocationSection({ title, address, mapUrl, lat, lng, locationName }: LocationSectionProps) {
  const handleOpenDirections = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 mt-8">
      <div className="text-center space-y-6">
        {/* Title */}
        <AnimatedSection direction="down">
          <h2 className="text-[#8b7355] text-sm md:text-base tracking-[0.3em] uppercase">
            Hôn lễ được cử hành tại
          </h2>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.1}>
          <h3 className="font-serif text-3xl md:text-4xl text-[#c9a87b] tracking-wide">
            {title}
          </h3>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-[#8b7355] text-base md:text-lg">
            {address}
          </p>
        </AnimatedSection>

        {/* Map */}
        <AnimatedSection direction="up" delay={0.25}>
          <div className="my-6">
            <GoogleMapLocation lat={lat} lng={lng} locationName={locationName} />
          </div>
        </AnimatedSection>

        {/* Map Button */}
        <AnimatedSection direction="up" delay={0.3}>
          <button 
            onClick={handleOpenDirections}
            className="bg-[#8b7355] hover:bg-[#6b5335] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Xem đường đi
          </button>
        </AnimatedSection>

        {/* Invitation Poem */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="mt-12 space-y-4 text-[#8b7355] leading-relaxed">
          <p className="text-base md:text-lg font-semibold">
            Gửi đến bạn tấm thiệp cưới đầy yêu thương.
          </p>
          <p className="text-sm md:text-base">
            Những ai nhận được lời mời này đều là những người đặc biệt với bọn mình.
          </p>
          <p className="text-sm md:text-base">
            Mong bạn và gia đình sẽ đến chung vui,
          </p>
          <p className="text-sm md:text-base">
            Cùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa. 
          </p>
          <p className="text-sm md:text-base">
            Cảm ơn vì luôn bên cạnh và yêu thương.
          </p>
          <p className="text-sm md:text-base flex items-center justify-center gap-2">
            Bọn mình rất mong được gặp bạn trong ngày vui này! ❤️
          </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection direction="up" delay={0.5}>
          <div className="flex justify-center items-center gap-8 md:gap-16 mt-12 pt-8 border-t border-[#e8dcc8]">
          <div className="text-[#8b7355] text-sm md:text-base tracking-wider cursor-pointer hover:text-[#6b5335] transition">
            FALL IN
          </div>
          <div className="text-[#8b7355] text-sm md:text-base tracking-wider cursor-pointer hover:text-[#6b5335] transition">
            LOVE
          </div>
          <div className="text-[#8b7355] text-sm md:text-base tracking-wider cursor-pointer hover:text-[#6b5335] transition">
            WEDDING
          </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
