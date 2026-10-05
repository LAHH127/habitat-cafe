import { ArrowUpRight } from 'lucide-react';
import { featuredItems } from '../data/menu';
import Img from './Img';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Featured() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="House Favourites"
          title={
            <>
              Plates worth <em className="italic text-espresso/90">returning</em> for.
            </>
          }
          copy="A few of the dishes our regulars rarely skip — from the first coffee to the last bite of dessert."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 100}>
              <a href="#menu" className="group relative block overflow-hidden rounded-2xl">
                <Img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent"
                  aria-hidden="true"
                />
                {item.illustration && (
                  <span className="absolute right-4 top-4 rounded-full bg-charcoal/55 px-3 py-1 text-[9px] uppercase tracking-[0.22em] text-ivory/85 backdrop-blur-sm">
                    Illustrative image
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber">{item.category}</p>
                  <h3 className="mt-2 font-serif text-2xl text-ivory">{item.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ivory/75">{item.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-serif text-lg text-amber">₹{item.price}</span>
                    <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ivory/80 transition-colors group-hover:text-amber">
                      Explore
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
