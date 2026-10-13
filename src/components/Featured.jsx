import { ArrowUpRight } from 'lucide-react';
import { featuredItems } from '../data/menu';
import Img from './Img';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Featured() {
  return (
    <section className="bg-ivory py-14 lg:py-20">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 100}>
              <a
                href="#menu"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand bg-cream transition-all duration-300 hover:border-terracotta/40 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/20">
                  <Img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta">
                      {item.category}
                    </span>
                    <span className="font-serif text-base font-semibold text-terracotta">
                      ₹{item.price}
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-medium text-charcoal">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 line-clamp-2 text-xs leading-relaxed text-espresso/70">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-sand/60 pt-3 text-[10px] uppercase tracking-[0.2em] text-charcoal/70 transition-colors group-hover:text-terracotta">
                    <span>Explore Dish</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
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
