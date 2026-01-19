export default function PhotoGallery() {
  const photos = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 mt-8">
      <div className="text-center space-y-8">
        <h2 className="font-serif text-3xl md:text-4xl text-[#c9a87b] tracking-wide">
          Our Story
        </h2>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {photos.map((num) => (
            <div
              key={num}
              className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <svg
                    className="w-12 h-12 mx-auto opacity-30"
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
                  <p className="text-xs mt-2">Ảnh {num}</p>
                </div>
              </div>
              {/* Uncomment when you have images */}
              {/* <img 
                src={`/images/gallery-${num}.jpg`}
                alt={`Our moment ${num}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
