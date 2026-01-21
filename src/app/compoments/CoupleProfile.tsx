export default function CoupleProfile() {
  return (
    <div className="bg-gradient-to-b from-[#f5f0ea] to-white rounded-lg shadow-2xl p-8 md:p-12 mt-8">
      <div className="text-center space-y-8">
        {/* Heart icon */}
        <div className="flex justify-center">
          <div className="w-8 h-8 bg-[#c9a87b] transform rotate-45 relative">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-[#c9a87b] rounded-full" />
            <div className="absolute -top-4 left-0 w-8 h-8 bg-[#c9a87b] rounded-full" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-serif text-4xl md:text-5xl text-[#c9a87b] tracking-[0.3em]">
          MY LOVER
        </h2>

        {/* Couple Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mt-12">
          {/* Groom */}
          <div className="space-y-4">
            <div className="relative w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder - Replace with actual groom photo */}
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-xs mt-2">Ảnh chú rể</p>
                </div>
              </div>
              <img 
                src="/image_wedding/LIU_5412.JPG" 
                alt="Văn Tùng"
                className="w-full h-full object-cover scale-150"
                style={{objectPosition: '50% 10%'}}
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#c9a87b]">
              Văn Tùng
            </h3>
          </div>

          {/* Bride */}
          <div className="space-y-4">
            <div className="relative w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder - Replace with actual bride photo */}
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-xs mt-2">Ảnh cô dâu</p>
                </div>
              </div>
              <img 
                src="/image_wedding/LIU_5169.JPG" 
                alt="Lương Lương"
                className="w-full h-full object-cover scale-260"
                style={{objectPosition: '80% 0%'}}
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#c9a87b]">
              Lương Lương
            </h3>
          </div>
        </div>

        {/* Love Poem - Vietnamese */}
        <div className="mt-12 space-y-2 text-[#8b7355] max-w-2xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed">
            Trái tim em,
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Tựa cánh chim <span className="text-[#c9a87b] font-semibold">nhỏ</span> giữa dòng hoang,
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Đã tìm thấy bầu trời của riêng <span className="text-[#c9a87b] font-semibold">mình</span>
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Trong đôi <span className="text-[#c9a87b] font-semibold">mắt anh.</span>
          </p>
        </div>

        {/* Love Poem - English */}
        <div className="mt-8 text-[#2c5f7f] max-w-2xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed italic">
            My heart, the bird of the wilderness has found
          </p>
          <p className="text-base md:text-lg leading-relaxed italic">
            its sky in your eye.
          </p>
        </div>
      </div>
    </div>
  );
}
