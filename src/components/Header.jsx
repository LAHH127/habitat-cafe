import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useScrolled } from '../hooks';
import { site } from '../data/site';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const scrolled = useScrolled(48);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled
            ? 'bg-ivory/95 text-charcoal shadow-[0_1px_0_0_rgba(30,26,22,0.08)] backdrop-blur'
            : 'bg-transparent text-ivory'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="font-serif text-2xl tracking-[0.18em]" aria-label="Habitat Cafe — home">
            HABITAT<span className="text-terracotta">.</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-60 ${
                  scrolled ? 'text-charcoal/80' : 'text-ivory/90'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#reserve"
              className={`hidden px-6 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors lg:inline-block ${
                scrolled
                  ? 'bg-charcoal text-ivory hover:bg-terracotta'
                  : 'bg-ivory text-charcoal hover:bg-terracotta hover:text-ivory'
              }`}
            >
              Reserve a Table
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="-mr-2 p-2 lg:hidden"
              aria-label="Open menu"
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ivory text-charcoal lg:hidden">
          <div className="flex h-20 items-center justify-between px-5">
            <span className="font-serif text-2xl tracking-[0.18em]">
              HABITAT<span className="text-terracotta">.</span>
            </span>
            <button type="button" onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center px-8" aria-label="Mobile">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-sand py-4 font-serif text-3xl"
              >
                <span className="mr-4 text-sm italic text-terracotta">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-8 pb-10">
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="block bg-terracotta py-4 text-center text-xs uppercase tracking-[0.25em] text-ivory"
            >
              Reserve a Table
            </a>
            <a href={site.phoneHref} className="mt-4 block text-center font-serif text-lg">
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
