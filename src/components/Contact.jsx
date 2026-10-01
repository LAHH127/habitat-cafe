import { Clock, AtSign, MapPin, Navigation, Phone } from 'lucide-react';
import { site } from '../data/site';
import Reveal from './Reveal';

const btnClass =
  'flex items-center justify-center gap-2 rounded-full border border-charcoal/25 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-charcoal hover:text-ivory';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-sand bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.35em] text-terracotta">Find Us</p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-6xl">
            Habitat <em className="italic text-espresso/90">Cafe</em>
          </h2>
          <address className="mt-8 space-y-1 text-lg leading-relaxed text-espresso/80 not-italic">
            {site.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-sand bg-ivory p-6">
              <Phone size={18} className="text-terracotta" aria-hidden="true" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-espresso/55">Phone</p>
              <a href={site.phoneHref} className="mt-1 block font-serif text-xl hover:text-terracotta">
                {site.phone}
              </a>
            </div>
            <div className="rounded-xl border border-sand bg-ivory p-6">
              <Clock size={18} className="text-terracotta" aria-hidden="true" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-espresso/55">Hours</p>
              <p className="mt-1 font-serif text-xl">Mon – Sun</p>
              <p className="text-sm text-espresso/70">8:00 AM – 1:00 AM</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex h-full flex-col rounded-2xl border border-sand bg-ivory p-7 sm:p-10">
            <MapPin size={22} className="text-terracotta" aria-hidden="true" />
            <h3 className="mt-5 font-serif text-2xl">Visit the rooftop</h3>
            <p className="mt-3 text-sm leading-relaxed text-espresso/70">
              We are on the terrace floor of Vimbri Boulevard in Green Valley — look for the arches
              above Road No. 4, and take the stairs up.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className={btnClass}
                aria-label="Open Habitat Cafe on Google Maps"
              >
                <MapPin size={14} aria-hidden="true" />
                Google Maps
              </a>
              <a href={site.phoneHref} className={btnClass}>
                <Phone size={14} aria-hidden="true" />
                Call
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className={btnClass}
                aria-label="Get directions to Habitat Cafe"
              >
                <Navigation size={14} aria-hidden="true" />
                Directions
              </a>
              <a href={site.instagramUrl} className={btnClass} aria-label="Habitat Cafe on Instagram">
                <AtSign size={14} aria-hidden="true" />
                Instagram
              </a>
            </div>
            <p className="mt-auto pt-8 text-xs italic text-espresso/50">
              Open every day — slow mornings, golden evenings, and late nights until 1 AM.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
