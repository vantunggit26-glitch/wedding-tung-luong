"use client";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 md:px-8 bg-white/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        {/* Thank You Section */}
        <div className="flex flex-col items-center justify-center">
          {/* Wedding Couple Image */}
          <div className="flex justify-center mb-8">
            <img 
              src="/images/wedding_img.png" 
              alt="Wedding Couple"
              className="w-40 h-40 md:w-56 md:h-56 object-contain select-none"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              onError={(e) => {
                // Fallback to SVG if image not found
                e.currentTarget.style.display = 'none';
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("viewBox", "0 0 200 200");
                svg.setAttribute("class", "w-40 h-40 md:w-56 md:h-56");
                svg.innerHTML = `
                  <g transform="translate(100 100)">
                    <!-- Groom -->
                    <ellipse cx="-30" cy="0" rx="20" ry="30" fill="#2d2d2d"/>
                    <circle cx="-30" cy="-25" r="15" fill="#f5d5c0"/>
                    <!-- Bride -->
                    <ellipse cx="30" cy="0" rx="20" ry="30" fill="#ffffff" stroke="#d4c4b0" stroke-width="2"/>
                    <circle cx="30" cy="-25" r="15" fill="#f5d5c0"/>
                    <!-- Heart -->
                    <path d="M-5,-40 Q-5,-50 0,-50 Q5,-50 5,-40 L0,-30 Z" fill="#c9a87b"/>
                  </g>
                `;
                e.currentTarget.parentElement?.appendChild(svg);
              }}
            />
          </div>
          
          {/* Thank You Text */}
          <div className="text-center mb-12">
            <h2 className="font-cursive text-5xl md:text-6xl text-[#c9a87b] mb-4 tracking-wider">
              Thank you
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#c9a87b] to-transparent mx-auto"></div>
          </div>

          {/* Footer Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center mb-8">
            {/* Left section - Contact */}
            <div>
              <h3 className="font-serif text-[#8b7355] font-semibold mb-3">Liên hệ</h3>
              <p className="text-[#8b7355] text-sm mb-1">
                <a href="tel:+84123456789" className="hover:text-[#c9a87b] transition">
                  +84 123 456 789
                </a>
              </p>
              <p className="text-[#8b7355] text-sm">
                <a href="mailto:wedding@example.com" className="hover:text-[#c9a87b] transition">
                  wedding@example.com
                </a>
              </p>
            </div>

            {/* Center section - Social */}
            <div>
              <h3 className="font-serif text-[#8b7355] font-semibold mb-3">Theo dõi</h3>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-[#8b7355] hover:text-[#c9a87b] transition font-light">
                  Facebook
                </a>
                <span className="text-[#8b7355]">/</span>
                <a href="#" className="text-[#8b7355] hover:text-[#c9a87b] transition font-light">
                  Instagram
                </a>
              </div>
            </div>

            {/* Right section - Location */}
            <div>
              <h3 className="font-serif text-[#8b7355] font-semibold mb-3">Địa điểm</h3>
              <p className="text-[#8b7355] text-sm">
                <a href="#" className="hover:text-[#c9a87b] transition">
                  Xem bản đồ 📍
                </a>
              </p>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="w-full pt-8 border-t border-[#e8dcc8]/20 text-center">
            <p className="text-[#8b7355] text-sm mb-2">
              © 2025 Wedding Invitation. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-[#8b7355]/60 text-xs">
              Cảm ơn bạn đã tham dự ngày trọng đại của chúng tôi 💕
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a87b]/20 to-transparent"></div>
    </footer>
  );
}
