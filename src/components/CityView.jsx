import Img from './Img';
import Reveal from './Reveal';
import { useParallax } from '../hooks';

export default function CityView() {
  const parallaxRef = useParallax(0.18);

  return (
    <section className="relative flex h-[75vh] min-h-[480px] items-center justify-center overflow-hidden bg-charcoal">
      <div ref={parallaxRef} className="absolute -top-[8%] left-0 h-[116%] w-full will-change-transform">
        <Img
          src="/images/skyline.jpg"
          alt="The Hyderabad skyline seen from the Habitat rooftop"
          className="h-full w-full scale-110 object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-charcoal/35" aria-hidden="true" />
      <Reveal className="relative z-10 px-6 text-center text-ivory">
        <h2 className="font-serif text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
          Above the city.
          <br />
          <em className="italic text-amber">Away from the ordinary.</em>
        </h2>
        <p className="mt-7 text-[11px] uppercase tracking-[0.4em] text-ivory/75">
          Banjara Hills · Hyderabad
        </p>
      </Reveal>
    </section>
  );
}
