"use client";

import { useState, useEffect } from "react";
import Countdown from "./Countdown";
import AnimatedSection from "./AnimatedSection";
import OptimizedImage from "./OptimizedImage";

interface InvitationCardProps {
  groomName: string;
  brideName: string;
  eventDate: Date;
}

export default function InvitationCard({
  groomName,
  brideName,
  eventDate,
}: InvitationCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images - Add your images to /public/images/
  const carouselImages: any[] = [
    // "/images/slide-1.jpg",
    // "/images/slide-2.jpg",
    // "/images/slide-3.jpg",
  ];

  // Auto slide
  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isOpen, carouselImages.length]);

  return (
    <>
    <AnimatedSection direction="up">
      <div className="bg-white rounded-lg shadow-2xl relative overflow-visible">
      {/* Flower decoration - Top left - Yellow/orange flowers with green leaves */}
      <div className="absolute top-20 -left-16 md:top-12 md:-left-16 w-40 h-30 md:w-56 md:h-56 pointer-events-none z-50">
        <img 
          src="/images/flower_1.png" 
          alt="Flower decoration"
          className="w-full h-full object-contain transform rotate-[35deg]"
          onError={(e) => {
            // Fallback to SVG if image not found
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <svg viewBox="0 0 200 200" className="w-full h-full hidden">
          <g transform="rotate(35 100 100)">
            {/* Stem */}
            <path d="M20,20 Q30,60 40,100 L50,140" stroke="#5a7c4f" strokeWidth="3" fill="none" />
            {/* Leaves */}
            <ellipse cx="25" cy="50" rx="8" ry="15" fill="#6b8e5f" opacity="0.8" transform="rotate(-30 25 50)" />
            <ellipse cx="35" cy="80" rx="10" ry="18" fill="#6b8e5f" opacity="0.8" transform="rotate(20 35 80)" />
            <ellipse cx="45" cy="110" rx="9" ry="16" fill="#5a7c4f" opacity="0.7" transform="rotate(-25 45 110)" />
            {/* Yellow/Orange flowers */}
            <circle cx="20" cy="25" r="6" fill="#ffa500" opacity="0.9" />
            <circle cx="18" cy="32" r="5" fill="#ffb52e" opacity="0.85" />
            <circle cx="26" cy="30" r="4" fill="#ff8c00" opacity="0.9" />
            <circle cx="15" cy="20" r="5" fill="#ffd700" opacity="0.8" />
            <circle cx="24" cy="22" r="3" fill="#ffa500" opacity="0.85" />
            <circle cx="22" cy="18" r="4" fill="#ffb52e" opacity="0.9" />
            {/* More small flowers */}
            <circle cx="30" cy="28" r="3" fill="#ffd700" opacity="0.8" />
            <circle cx="28" cy="35" r="4" fill="#ff8c00" opacity="0.85" />
          </g>
        </svg>
      </div>



      {/* Content */}
      <div className="relative z-10 text-center space-y-6 p-8 md:p-12 min-h-0">
        {/* Header Section - Custom Design */}
        <div className="w-full mb-4">
          {/* Top text row */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-[#8b7355] text-sm md:text-base font-montserrat tracking-widest uppercase animate-slideInLeft" style={{animationDelay: '0.2s'}}>You are</span>
            <span className="text-[#c9a87b] text-sm md:text-base font-montserrat tracking-widest uppercase animate-fadeIn" style={{animationDelay: '0.4s'}}>The Love of</span>
            <span className="text-[#8b7355] text-sm md:text-base font-montserrat tracking-widest uppercase animate-slideInRight" style={{animationDelay: '0.6s'}}>My Life</span>
          </div>
          
          {/* Main title */}
          <div className="mb-8">
            <h1 className="font-serif font-medium text-6xl md:text-7xl text-[#8b7355] mb-6 tracking-wide animate-scaleIn" style={{animationDelay: '0.8s'}}>
              Thiệp mời
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="text-[#8b7355] text-sm md:text-base tracking-[0.3em] uppercase font-light animate-slideInTop" style={{animationDelay: '1s'}}>
              CHẠM ĐỂ MỞ THIỆP
            </div>
        </div>

        {/* Couple names */}
        <div className="font-serif text-xl md:text-2xl text-[#8b7355] tracking-wide mb-8 mt-4 animate-fadeIn" style={{animationDelay: '1.2s'}}>
          {groomName}{brideName}
        </div>

        {/* Envelope */}
        <div className="my-8 flex justify-center">
          <div
            className="envelope-wrapper relative w-72 h-48 md:w-80 md:h-52 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Envelope Shadow */}
            <div className="envelope-shadow absolute inset-0 bg-black/20 blur-xl rounded-sm transform translate-y-2" />
            
            {/* Envelope Container */}
            <div className={`envelope-container relative w-full h-full transition-all duration-1000 ${isOpen ? 'open' : 'close'}`}>
              {/* Back of envelope */}
              <div className="absolute inset-0 bg-[#e8dcc8] rounded-sm shadow-2xl" />
              
              {/* Front pocket */}
              <div className="front-pocket absolute bottom-0 left-0 right-0 h-3/5 bg-[#d4c4b0] rounded-b-sm" style={{
                clipPath: 'polygon(0 20%, 50% 0, 100% 20%, 100% 100%, 0 100%)'
              }} />
              
              {/* Front flap - Triangle that opens */}
              <div 
                className={`front-flap absolute top-0 left-0 right-0 transition-all duration-1000 origin-top ${
                  isOpen ? 'flap-open' : ''
                }`}
                style={{
                  borderLeft: '144px solid transparent',
                  borderRight: '144px solid transparent',
                  borderTop: '96px solid #c9b8a0',
                  transformStyle: 'preserve-3d',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}
              />
              
              {/* Wax seal */}
              <div
                className={`wax-seal absolute top-20 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full transition-all duration-700 flex items-center justify-center ${
                  isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, #8b7355 0%, #6b5645 100%)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)'
                }}
              >
                <div className="text-white text-xs font-serif">❤</div>
              </div>
              
              {/* Letter inside */}
              {/* <div className={`letter absolute inset-4 bg-white rounded-sm shadow-lg transition-all duration-1000 ${
                isOpen ? 'letter-show' : 'letter-hide'
              }`}>
                <div className="w-full h-full flex items-center justify-center p-4 text-center">
                  <div className="text-[#8b7355] text-sm">
                    <p className="font-cursive text-lg mb-2">💝</p>
                    <p>Trân trọng kính mời</p>
                  </div>
                </div>
              </div> */}
              
              {/* Hearts animation when opened */}
              {isOpen && (
                <div className="hearts-container absolute inset-0 pointer-events-none">
                  <div className="heart-float text-red-400 absolute" style={{left: '20%', animationDelay: '0s'}}>❤</div>
                  <div className="heart-float text-pink-400 absolute" style={{left: '50%', animationDelay: '0.3s'}}>💕</div>
                  <div className="heart-float text-red-300 absolute" style={{left: '80%', animationDelay: '0.6s'}}>💖</div>
                </div>
              )}
            </div>
          </div>
        </div>
        

        {/* Carousel Section - Full screen when closed */}
        {!isOpen && (
          <div className="-mx-8 md:-mx-12 my-8">
            <div className="relative w-full h-0 md:h-0 overflow-hidden">
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {carouselImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      idx === currentSlide
                        ? "opacity-100 translate-x-0"
                        : idx < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center text-gray-500">
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
                        <p className="text-sm mt-2">Ảnh {idx + 1}</p>
                      </div>
                    </div>
                    {/* Uncomment when you have images */}
                    {/* <img 
                      src={img} 
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Invitation text - Slide from top and fade in when envelope opens */}
        {isOpen && (
          <>
          {/* Flower decoration - Bottom right - White flowers with green leaves */}
          <div className="absolute bottom-32 -right-12 md:bottom-40 md:-right-16 w-40 h-40 md:w-56 md:h-56 pointer-events-none z-50">
            <img 
              src="/images/flower_2.png" 
              alt="Flower decoration"
              width={224}
              height={224}
              className="w-full h-full object-contain transform rotate-[-35deg]"
              onError={(e: any) => {
                // Fallback to SVG if image not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <svg viewBox="0 0 200 200" className="w-full h-full hidden">
              <g transform="rotate(-35 100 100)">
                {/* Stem */}
                <path d="M180,180 Q170,150 160,120 L150,90" stroke="#5a7c4f" strokeWidth="3" fill="none" />
                {/* Leaves */}
                <ellipse cx="175" cy="150" rx="10" ry="18" fill="#6b8e5f" opacity="0.8" transform="rotate(30 175 150)" />
                <ellipse cx="165" cy="125" rx="12" ry="20" fill="#6b8e5f" opacity="0.8" transform="rotate(-20 165 125)" />
                <ellipse cx="155" cy="100" rx="11" ry="19" fill="#5a7c4f" opacity="0.7" transform="rotate(25 155 100)" />
                {/* White flowers - Large bloom */}
                <circle cx="180" cy="175" r="8" fill="#ffffff" opacity="0.95" />
                <circle cx="186" cy="178" r="7" fill="#f5f5f5" opacity="0.9" />
                <circle cx="184" cy="170" r="7" fill="#ffffff" opacity="0.95" />
                <circle cx="177" cy="182" r="6" fill="#fafafa" opacity="0.9" />
                <circle cx="190" cy="172" r="6" fill="#f8f8f8" opacity="0.9" />
                {/* Center of flower */}
                <circle cx="184" cy="176" r="4" fill="#e8dcc8" opacity="0.8" />
                {/* Small buds */}
                <circle cx="175" cy="168" r="5" fill="#ffffff" opacity="0.9" />
                <circle cx="192" cy="180" r="4" fill="#fafafa" opacity="0.85" />
              </g>
            </svg>
          </div>
          <div 
            className="space-y-6"
            style={{animation: "slideInFromTop 0.8s ease-out forwards, fadeIn 0.8s ease-out forwards"}}
          >
            {/* TRÂN TRỌNG KÍNH MỜI */}
            <div className="text-[#8b7355] text-sm md:text-base tracking-[0.3em] uppercase font-light">
              TRÂN TRỌNG KÍNH MỜI
            </div>

            {/* Tên khách mời */}
            <div className="font-serif font-medium text-3xl md:text-4xl text-[#c9a87b] my-6">
              Tên khách mời
            </div>

            {/* Invitation text */}
            <div className="space-y-1 text-[#8b7355] text-sm md:text-base">
              <p>Đến dự buổi tiệc chung vui</p>
              <p>Cùng gia đình chúng tôi tổ chức</p>
            </div>

            {/* Date and time - Main highlight */}
            <div className="font-serif font-medium text-2xl md:text-4xl text-[#c9a87b] my-8 tracking-wide leading-tight">
              16 GIỜ 00 | THỨ BẢY | 07.03.2026
            </div>

            {/* Lunar date */}
            <div className="text-[#8b7355] text-xs md:text-sm">
              (Nhằm ngày 20 tháng 01 năm Bính Ngọ)
            </div>

            {/* Location */}
            {/* <div className="mt-8 pt-8 border-t border-[#e8dcc8]">
              <p className="text-[#8b7355] text-sm">
                Địa điểm: <span className="font-semibold">Sẽ cập nhật sau</span>
              </p>
            </div> */}
          </div>
          </>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        /* Envelope animations */
        .front-flap.flap-open {
          transform: rotateX(-180deg);
          transform-origin: top;
        }
        
        .letter-hide {
          transform: translateY(100%);
          opacity: 0;
        }
        
        .letter-show {
          transform: translateY(0);
          opacity: 1;
        }
        
        /* Hearts floating animation */
        .heart-float {
          animation: floatUp 3s ease-in-out infinite;
          font-size: 1.5rem;
          top: 50%;
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) scale(1);
            opacity: 0;
          }
        }
        
        /* Content slide and fade animations */
        @keyframes slideInFromTop {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
    </AnimatedSection>

    {/* Countdown Card - Separate independent section */}
    <AnimatedSection direction="up" delay={0.2}>
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 text-center mt-8">
        <Countdown targetDate={new Date('2026-03-08')} />
      </div>
    </AnimatedSection>
    </>
  );
}
