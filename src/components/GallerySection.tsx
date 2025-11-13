"use client";

import React, { useState, useEffect } from "react";
import { X, Maximize2, Camera, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  caption: string;
}

interface GallerySectionProps {
  items: GalleryItem[];
}

export const GallerySection = ({ items }: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute('data-id') || '0');
          setVisibleItems(prev => new Set([...prev, id]));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedImage]);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const getItemStyle = (index: number) => {
    const patterns = [
      { rotation: -2, offset: { x: -4, y: 4 } },
      { rotation: 2, offset: { x: 4, y: -4 } },
      { rotation: -1, offset: { x: -2, y: 2 } },
      { rotation: 1, offset: { x: 2, y: -2 } },
    ];
    const pattern = patterns[index % patterns.length];
    return {
      transform: `rotate(${pattern.rotation}deg)`,
    };
  };

  return (
    <>
      <div className="relative min-h-screen bg-background py-20">
        {/* Header */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 mb-20">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter bg-primary text-primary-foreground px-12 py-6 border-brutal-thicc shadow-brutal-xl skew-brutal">
              Gallery
              <Camera className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 text-secondary animate-wiggle" />
            </h1>
          </div>
          <div className="mt-12 max-w-3xl">
            <p className="text-xl md:text-2xl font-bold leading-relaxed bg-accent text-accent-foreground px-8 py-6 border-brutal shadow-brutal-lg">
              Snapshots from our journey — the wins, the chaos, the late nights, the whiteboard wars, the chai breaks.
              <br />
              <span className="text-2xl md:text-3xl font-black uppercase">
                This is where ARIES lives outside the code.
              </span>
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {items.map((item, index) => (
              <div
                key={item.id}
                data-id={item.id}
                className={`gallery-item break-inside-avoid transition-all duration-700 ${
                  visibleItems.has(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${(index % 3) * 100}ms`,
                  ...getItemStyle(index)
                }}
              >
                <div className="group relative cursor-pointer hover-lift">
                  <div className="relative border-brutal-thick shadow-brutal-lg hover:shadow-brutal-xl bg-card overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => openModal(item)}
                        className="bg-secondary text-secondary-foreground px-6 py-3 border-brutal shadow-brutal font-black uppercase flex items-center gap-2 hover-lift"
                      >
                        <Maximize2 className="w-5 h-5" />
                        View
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 bg-secondary border-brutal shadow-brutal px-4 py-3">
                    <p className="text-sm md:text-base font-black uppercase tracking-tight">
                      {item.caption}
                    </p>
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent border-brutal flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun decorative elements */}
        <div className="fixed top-20 right-10 w-24 h-24 bg-primary border-brutal-thick shadow-brutal-lg animate-bounce pointer-events-none hidden lg:block" />
        <div className="fixed bottom-20 left-10 w-32 h-32 bg-secondary border-brutal-thick shadow-brutal-lg animate-wiggle pointer-events-none hidden lg:block" />
        <div className="fixed top-1/2 right-1/4 w-16 h-16 bg-accent border-brutal shadow-brutal animate-bounce pointer-events-none hidden xl:block" style={{ animationDelay: '1s' }} />
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-foreground/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full animate-slide-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-16 h-16 bg-destructive text-white border-brutal-thick shadow-brutal-xl hover-lift flex items-center justify-center z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="border-brutal-thicc shadow-brutal-xl bg-background overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            <div className="mt-6 bg-secondary border-brutal-thick shadow-brutal-lg px-8 py-6">
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-center">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};
