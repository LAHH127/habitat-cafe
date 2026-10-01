import { Armchair, ArrowRight, Building2, Lamp, Landmark, Sofa, Trees, Wind } from 'lucide-react';
import Img from './Img';
import Reveal from './Reveal';
import { useReveal } from '../hooks';

const highlights = [
  { icon: Landmark, label: 'Repeating arches' },
  { icon: Armchair, label: 'Rooftop seating' },
  { icon: Sofa, label: 'Curved furniture' },
  { icon: Trees, label: 'Greenery' },
  { icon: Wind, label: 'Open-air spaces' },
  { icon: Lamp, label: 'Warm evening lighting' },
  { icon: Building2, label: 'Skyline atmosphere' },
];

const detailShots = [
  { src: '/images/architecture/arches.jpg', alt: 'The repeating terracotta arches' },
  { src: '/images/architecture/seating.jpg', alt: 'Curved seating on the terrace' },
  { src: '/images/architecture/greenery.jpg', alt: 'Tropical greenery between tables' },
];

export default function Architecture() {
  const { ref, visible } = useReveal();

  return (
    <>
      <section id="ambience" className="relative">
        <div ref={ref} className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <Img
            src="/images/architecture/wide.jpg"
            alt="The arched rooftop architecture of Habitat Cafe"
            className={`h-full w-full object-cover transition-transform duration-[2000ms] ease-out ${
              visible ? 'scale-100' : 'scale-125'
            }`}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 px-6 text-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber">The Space</p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
                Designed for the way <em className="italic">you want to stay.</em>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={(i % 4) * 80}>
                <div className="flex h-full flex-col gap-4 rounded-xl border border-sand p-6 transition-colors hover:border-terracotta/50">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <h.icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-serif text-lg leading-snug">{h.label}</span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={240}>
              <a
                href="#contact"
                className="flex h-full flex-col justify-between gap-4 rounded-xl bg-charcoal p-6 text-ivory transition-colors hover:bg-espresso"
              >
                <span className="font-serif text-lg leading-snug">
                  Come see it <em className="italic text-amber">in person.</em>
                </span>
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-ivory/70">
                  Find us
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {detailShots.map((s, i) => (
              <Reveal key={s.src} delay={i * 100}>
                <div className="group overflow-hidden rounded-xl">
                  <Img
                    src={s.src}
                    alt={s.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
