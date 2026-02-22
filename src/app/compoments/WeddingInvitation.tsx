"use client";

// import NavigationTabs from "./NavigationTabs";
import InvitationCard from "./InvitationCard";
import LocationSection from "./LocationSection";
import WeddingPhoto from "./WeddingPhoto";
import ThankYouSection from "./ThankYouSection";
import CoupleProfile from "./CoupleProfile";
import PhotoGallery from "./PhotoGallery";
import LoveStorySection from "./LoveStorySection";
import SaveTheDateSection from "./SaveTheDateSection";

interface WeddingInvitationProps {
  isBrideSide?: boolean;
}

export default function WeddingInvitation({ isBrideSide = true }: WeddingInvitationProps) {
  // Thông tin sự kiện (bạn có thể thay đổi)
  const eventDate = new Date("2026-03-07T16:00:00");
  const groomName = "";
  const brideName = "";

  // Thông tin địa điểm
  const brideLocation = {
    title: "TƯ GIA NHÀ GÁI",
    address: "Số nhà 15, ngách 24, ngõ 302, đường Hồng Thái, xã Ô Diên",
    mapUrl: "https://www.google.com/maps/dir//21.1359668,105.6851399/@21.135973,105.6846785,19z/data=!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
    lat: 21.1359668,
    lng: 105.6851399,
    locationName: "Tiệc nhà gái"
  };

  const groomLocation = {
    title: "TƯ GIA NHÀ TRAI",
    address: "Số nhà 6, ngõ 18, đường Thống Nhất xóm Cát, xã Đan Phượng",
    mapUrl: "https://www.google.com/maps/dir//21.0719766,105.6623363/@21.0719766,105.6623363,19z/data=!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
    lat: 21.0719766,
    lng: 105.6623363,
    locationName: "Tiệc nhà trai"
  };

  const location = isBrideSide ? brideLocation : groomLocation;

  return (
    <div className="flex items-center justify-center min-h-screen py-10 px-4">
      <div className="max-w-2xl w-full">
        {/* <NavigationTabs /> */}
        
        <InvitationCard 
          groomName={groomName}
          brideName={brideName}
          eventDate={eventDate}
        />

        {/* Footer message */}
        <div className="text-center mt-8 text-[#8b7355] text-sm">
          <p>Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi</p>
        </div>

        <LocationSection 
          title={location.title}
          address={location.address}
          mapUrl={location.mapUrl}
          lat={location.lat}
          lng={location.lng}
          locationName={location.locationName}
        />
        
        <WeddingPhoto />
        
        <ThankYouSection />
        
        <CoupleProfile />
        
        <PhotoGallery />

        <LoveStorySection />

        <SaveTheDateSection eventDate={eventDate} />
      </div>
    </div>
  );
}
