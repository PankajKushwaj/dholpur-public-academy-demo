import React, { useState, useEffect } from 'react';
import { sampleGallery } from '../config/siteConfig';
import { Images, Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Sports', 'Laboratories', 'Events', 'Arts'];

  const filteredItems = selectedCategory === 'All'
    ? sampleGallery
    : sampleGallery.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeImage = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24 bg-surface scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-agency uppercase bg-navy-100 text-navy-900 border border-navy-200 mb-3">
            <Images className="w-3.5 h-3.5 text-royal-600" />
            <span>CAMPUS LIFE IN PICTURES</span>
          </div>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-3 sm:mb-4 tracking-tight">
            Visual Highlights & Student Life
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Moments of joy, focused inquiry, sportsmanship, and artistic expression captured across our academy grounds.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] sm:text-xs font-semibold bg-navy-900 text-gold-400 border border-gold-400/30 text-left sm:text-center">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>Sample Educational Imagery for Layout Demonstration</span>
          </div>
        </div>

        {/* Filter Categories: Scrollable on mobile */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 pb-3 sm:pb-0 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 sm:px-4 py-2.5 rounded text-xs sm:text-sm font-semibold transition-all duration-150 flex-shrink-0 min-h-[40px] ${
                  isActive
                    ? 'bg-navy-900 text-gold-300 font-bold shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Image Grid: 1 col on xs, 2 col on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-200 aspect-[4/3] active:scale-[0.99]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Scrim */}
              <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 sm:p-5">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gold-400 text-navy-950 uppercase tracking-agency">
                    {item.category}
                  </span>
                  <div className="p-1 rounded bg-white/20 text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-white font-bold text-sm leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Mobile Touch Ergonomics */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/95 backdrop-blur-sm animate-fade-in"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button with 44x44px target */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white transition focus:outline-none z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Desktop Side Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
              }}
              className="hidden sm:flex absolute left-4 lg:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
              }}
              className="hidden sm:flex absolute right-4 lg:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Box */}
            <div
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl max-h-[55vh] sm:max-h-[70vh] border border-white/20">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="w-full h-full object-contain max-h-[55vh] sm:max-h-[70vh]"
                />
              </div>

              {/* Caption & Mobile Navigation Bar */}
              <div className="mt-3 sm:mt-4 text-center max-w-xl text-white px-2">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-agency bg-gold-400 text-navy-950 mb-1">
                  {activeImage.category}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold">
                  {activeImage.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  {activeImage.description}
                </p>

                {/* Mobile Bottom Thumb Controls */}
                <div className="mt-3 flex sm:hidden items-center justify-center gap-4">
                  <button
                    onClick={() => setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length)}
                    className="p-2.5 rounded-full bg-white/15 active:bg-white/30 text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-slate-300 font-medium">
                    {lightboxIndex! + 1} / {filteredItems.length}
                  </span>
                  <button
                    onClick={() => setLightboxIndex((prev) => (prev! + 1) % filteredItems.length)}
                    className="p-2.5 rounded-full bg-white/15 active:bg-white/30 text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="hidden sm:block mt-2 text-[11px] text-slate-400 font-medium">
                  {lightboxIndex! + 1} of {filteredItems.length} images (Use ← / → keys)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
