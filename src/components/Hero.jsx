import Img from './Img';
import { useParallax } from '../hooks';

export default function Hero() {
  const parallaxRef = useParallax(0.22);

  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[620px] items-center justify-center overflow-hidden bg-charcoal"
    >
      <div ref={parallaxRef} className="absolute -top-[8%] left-0 h-[116%] w-full will-change-transform">
        <Img
          src="/images/hero.jpg"
          alt="Habitat Cafe rooftop terrace at dusk, terracotta arches and warm evening light"
          eager
          className="hero-zoom h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-charcoal/35" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-ivory">
        <p
          className="hero-fade flex items-center gap-4 text-[10px] uppercase tracking-[0.45em] text-ivory/80 sm:text-xs"
          style={{ animationDelay: '150ms' }}
        >
          <span className="h-px w-10 bg-amber/80" aria-hidden="true" />
          Rooftop Cafe · Banjara Hills · Hyderabad
          <span className="h-px w-10 bg-amber/80" aria-hidden="true" />
        </p>
        <h1
          className="hero-fade mt-6 font-serif text-[clamp(3.8rem,14vw,10.5rem)] font-light leading-[0.95] tracking-[0.06em] [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]"
          style={{ animationDelay: '300ms' }}
        >
          HABITAT
        </h1>
        <p
          className="hero-fade mt-4 font-serif text-xl italic text-ivory/90 sm:text-2xl"
          style={{ animationDelay: '450ms' }}
        >
          Where habits have a home
        </p>
        <div
          className="hero-fade mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
          style={{ animationDelay: '600ms' }}
        >
          <a
            href="#reserve"
            className="w-full bg-terracotta px-9 py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-espresso sm:w-auto"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="w-full border border-ivory/50 px-9 py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-ivory hover:text-charcoal sm:w-auto"
          >
            Explore Menu
          </a>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-ivory/80 transition-colors hover:text-ivory"
        aria-label="Scroll down to our story"
      >
        <span className="mb-3 block text-center text-[9px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="scroll-line mx-auto">
          <span />
        </span>
      </a>
    </section>
  );
}
