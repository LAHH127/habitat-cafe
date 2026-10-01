import { Clock, MapPin } from 'lucide-react';
import Img from './Img';
import Reveal from './Reveal';

export default function Intro() {
  return (
    <section id="story" className="overflow-hidden py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="relative lg:col-span-6">
          <div
            className="absolute -left-4 -top-4 h-full w-full rounded-t-full border border-terracotta/30"
            aria-hidden="true"
          />
          <Img
            src="/images/intro-main.jpg"
            alt="The arched terrace of Habitat Cafe with warm ivory walls"
            className="aspect-[4/5] w-full rounded-t-full object-cover"
          />
          <Img
            src="/images/intro-overlap.jpg"
            alt="A quiet corner table at Habitat Cafe"
            className="absolute -bottom-10 -right-2 aspect-square w-44 rounded-2xl border-4 border-ivory object-cover shadow-2xl sm:w-60 lg:-right-8"
          />
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-terracotta">Our Story</p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl">
              Where habits <em className="italic text-espresso/90">have a home.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-base leading-relaxed text-espresso/75 sm:text-lg">
              A rooftop space designed for slow mornings, long conversations, beautiful plates and
              memorable evenings.
            </p>
            <p className="mt-4 text-base leading-relaxed text-espresso/75">
              Tucked above Road No. 4 in Green Valley, Habitat pairs warm terracotta, soft evening
              light and open skies — a place to return to, every day of the week.
            </p>
          </Reveal>
          <Reveal
            delay={220}
            className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-sand pt-7 text-sm text-espresso/70"
          >
            <span className="flex items-center gap-3">
              <Clock size={16} className="text-terracotta" aria-hidden="true" />
              Open every day · 8:00 AM – 1:00 AM
            </span>
            <span className="flex items-center gap-3">
              <MapPin size={16} className="text-terracotta" aria-hidden="true" />
              Terrace Floor, Banjara Hills
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
