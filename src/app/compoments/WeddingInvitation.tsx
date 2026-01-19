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

export default function WeddingInvitation() {
  // Thông tin sự kiện (bạn có thể thay đổi)
  const eventDate = new Date("2025-10-25T16:00:00");
  const groomName = "";
  const brideName = "";

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

        <LocationSection />
        
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
