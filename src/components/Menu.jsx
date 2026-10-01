import { useMemo, useState } from 'react';
import { Leaf, Search } from 'lucide-react';
import { categories, items, MENU_NOTE } from '../data/menu';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

function MenuCard({ item, showCat = false }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-sand bg-cream p-6 transition-all duration-300 hover:border-terracotta/50 hover:shadow-[0_20px_40px_-24px_rgba(58,44,34,0.35)]">
      {showCat && (
        <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-terracotta">{item.category}</p>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-lg leading-snug">{item.name}</h3>
        {item.veg && (
          <span
            className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-olive/70 text-olive"
            title="Vegetarian"
            aria-label="Vegetarian"
          >
            <Leaf size={10} strokeWidth={2.5} aria-hidden="true" />
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso/70">{item.desc}</p>
      <p className="mt-5 border-t border-sand pt-4 font-serif text-lg text-terracotta">₹{item.price}</p>
    </article>
  );
}

export default function Menu() {
  const [tab, setTab] = useState(categories[0]);
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const visible = useMemo(() => {
    if (searching) {
      return items.filter((it) => `${it.name} ${it.desc} ${it.category}`.toLowerCase().includes(q));
    }
    if (showAll) return items;
    return items.filter((it) => it.category === tab);
  }, [q, searching, showAll, tab]);

  return (
    <section id="menu" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Menu"
          title={
            <>
              Something for <em className="italic text-espresso/90">every habit.</em>
            </>
          }
        />
        {MENU_NOTE && (
          <Reveal delay={100}>
            <p className="mt-4 text-center font-serif text-sm italic text-espresso/55">{MENU_NOTE}</p>
          </Reveal>
        )}

        <Reveal delay={150}>
          <div
            className="no-scrollbar -mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
            role="tablist"
            aria-label="Menu categories"
          >
            {categories.map((c) => {
              const active = !showAll && !searching && tab === c;
              return (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setTab(c);
                    setShowAll(false);
                  }}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                    active
                      ? 'border-charcoal bg-charcoal text-ivory'
                      : 'border-sand text-espresso/70 hover:border-charcoal/40 hover:text-charcoal'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mx-auto mt-8 max-w-md">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/40"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu — try ‘biryani’ or ‘coffee’"
              className="w-full rounded-full border border-sand bg-cream py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-espresso/40 focus:border-terracotta"
              aria-label="Search the menu"
            />
          </div>
        </Reveal>

        {showAll && !searching ? (
          <div className="mt-14 space-y-14">
            {categories.map((cat) => {
              const list = items.filter((it) => it.category === cat);
              if (!list.length) return null;
              return (
                <div key={cat}>
                  <h3 className="border-b border-sand pb-3 font-serif text-2xl">{cat}</h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((it) => (
                      <MenuCard key={it.id} item={it} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((it) => (
              <MenuCard key={it.id} item={it} showCat={searching} />
            ))}
          </div>
        )}

        {visible.length === 0 && (
          <p className="mt-12 text-center font-serif text-lg italic text-espresso/60">
            Nothing matches that search — try another craving.
          </p>
        )}

        <Reveal className="mt-14 text-center">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="border border-charcoal/30 px-9 py-4 text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-charcoal hover:text-ivory"
          >
            {showAll ? 'Browse by category' : 'View Full Menu'}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
