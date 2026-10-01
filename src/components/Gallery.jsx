import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryFilters, galleryItems } from '../data/gallery';
import Img from './Img';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const touchStartX = useRef(null);

  const filtered =
    filter === 'all' ? galleryItems : galleryItems.filter((g) => g.category === filter);

  useEffect(() => {
    if (lightbox === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, filtered.length]);

  const step = (dir) => setLightbox((i) => (i + dir + filtered.length) % filtered.length);

  return (
    <section id="gallery" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              The rooftop, <em className="italic text-espresso/90">captured.</em>
            </>
          }
        />

        <Reveal delay={100}>
          <div
            className="no-scrollbar -mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
            role="tablist"
            aria-label="Gallery filters"
          >
            {galleryFilters.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setFilter(f.key);
                    setLightbox(null);
                  }}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                    active
                      ? 'border-charcoal bg-charcoal text-ivory'
                      : 'border-sand text-espresso/70 hover:border-charcoal/40 hover:text-charcoal'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={filter} className="masonry mt-12 columns-2 gap-5 md:columns-3 lg:columns-4">
          {filtered.map((g, i) => (
            <Reveal key={g.src} delay={Math.min(i, 6) * 70}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-lg text-left"
                aria-label={`Open image: ${g.caption}`}
              >
                <Img
                  src={g.src}
                  alt={g.caption}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 pt-10 text-xs tracking-wide text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {g.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {lightbox !== null && filtered[lightbox] && (
          <div
            className="fixed inset-0 z-[70] flex flex-col bg-charcoal/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchStartX.current = null;
            }}
          >
            <div className="flex items-center justify-between px-5 py-4 text-ivory">
              <span className="text-xs tracking-[0.3em] text-ivory/60">
                {lightbox + 1} / {filtered.length}
              </span>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="rounded-full border border-ivory/20 p-2.5 transition hover:bg-ivory hover:text-charcoal"
                aria-label="Close viewer"
              >
                <X size={18} />
              </button>
            </div>
            <div className="relative flex flex-1 items-center justify-center px-4 pb-6">
              <button
                type="button"
                onClick={() => step(-1)}
                className="absolute left-3 z-10 rounded-full border border-ivory/20 p-2.5 text-ivory transition hover:bg-ivory hover:text-charcoal sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <figure className="max-h-full text-center">
                <Img
                  src={filtered[lightbox].src}
                  alt={filtered[lightbox].caption}
                  eager
                  className="max-h-[76vh] w-auto rounded-lg object-contain"
                />
                <figcaption className="mt-4 font-serif italic text-ivory/80">
                  {filtered[lightbox].caption}
                </figcaption>
              </figure>
              <button
                type="button"
                onClick={() => step(1)}
                className="absolute right-3 z-10 rounded-full border border-ivory/20 p-2.5 text-ivory transition hover:bg-ivory hover:text-charcoal sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
