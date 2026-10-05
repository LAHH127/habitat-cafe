import { ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'Instagram', href: site.instagramUrl },
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-3xl tracking-[0.18em] text-ivory">
            HABITAT<span className="text-terracotta">.</span>
          </p>
          <p className="mt-3 font-serif italic text-ivory/70">Where habits have a home.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`Habitat Cafe on ${s.label}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-ivory/20 px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-terracotta hover:bg-terracotta hover:text-ivory"
              >
                {s.label}
                <ArrowUpRight size={12} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/50">Quick Links</p>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm transition-colors hover:text-amber">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/50">Contact</p>
          <address className="mt-5 space-y-1 text-sm leading-relaxed not-italic">
            {site.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <a href={site.phoneHref} className="mt-4 block font-serif text-lg text-ivory hover:text-amber">
            {site.phone}
          </a>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/50">Opening Hours</p>
          <p className="mt-5 text-sm leading-relaxed">
            Monday – Sunday
            <br />
            8:00 AM – 1:00 AM
          </p>
          <p className="mt-4 font-serif italic text-ivory/60">Late nights, every night.</p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-ivory/45 sm:flex-row sm:px-8">
          <p>© Habitat Cafe. All rights reserved.</p>
          <p>Banjara Hills · Hyderabad</p>
          <p>
            Made by <span className="text-ivory/70">Karthik</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
