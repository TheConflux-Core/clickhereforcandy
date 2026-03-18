import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-90" />
      
      {/* Floating Candy Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-10 text-6xl animate-[float_3s_ease-in-out_infinite]">🍫</span>
        <span className="absolute top-32 right-20 text-5xl animate-[float_4s_ease-in-out_infinite_0.5s]">🍭</span>
        <span className="absolute bottom-40 left-20 text-7xl animate-[float_3.5s_ease-in-out_infinite_1s]">🍬</span>
        <span className="absolute bottom-32 right-32 text-6xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">🍪</span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-heading font-black text-5xl lg:text-7xl mb-6 text-white drop-shadow-lg text-balance">
          Discover the Best Candy
          <br />
          <span className="text-[#FFD23F]">& Sweet Treats</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-white/95 mb-8 max-w-2xl mx-auto font-medium drop-shadow">
          Expert reviews, subscription box comparisons, and gift guides for every occasion
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/subscription-boxes"
            className="inline-block px-8 py-4 bg-white text-[#E91E8C] font-bold text-lg rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            🎁 Find Your Box
          </Link>
          <Link
            href="/best-of"
            className="inline-block px-8 py-4 bg-[#1A1A2E] text-white font-bold text-lg rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            🏆 Best Candy 2026
          </Link>
        </div>
      </div>
    </section>
  );
}
