import { items } from '../data/menu';
import Img from './Img';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const groups = [
  { name: 'Coffee', list: items.filter((i) => i.category === 'Coffee') },
  { name: 'Signature', list: items.filter((i) => i.sub === 'Signature') },
  { name: 'Refreshers', list: items.filter((i) => i.sub === 'Refreshers') },
  { name: 'Classics', list: items.filter((i) => i.sub === 'Classics') },
];

export default function Beverages() {
  return (
    <section className="bg-charcoal py-24 text-ivory lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            center={false}
            dark
            eyebrow="Coffee & Beverages"
            title={
              <>
                Stay for <em className="italic text-amber">another.</em>
              </>
            }
            copy="From a quiet morning espresso to a late-night cooler — the bar stays open as long as we do."
          />
          <Reveal delay={150}>
            <Img
              src="/images/beverages/pour.jpg"
              alt="Coffee being poured at the Habitat bar"
              className="mt-10 aspect-[16/10] w-full rounded-2xl object-cover lg:aspect-[4/3]"
            />
          </Reveal>
        </div>

        <div className="space-y-10">
          {groups
            .filter((g) => g.list.length > 0)
            .map((g, gi) => (
              <Reveal key={g.name} delay={gi * 90}>
                <h3 className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-amber">
                  {g.name}
                  <span className="h-px flex-1 bg-ivory/15" aria-hidden="true" />
                </h3>
                <ul>
                  {g.list.map((it) => (
                    <li
                      key={it.id}
                      className="flex items-baseline gap-4 border-b border-ivory/10 py-3.5"
                    >
                      <span className="font-serif text-lg">{it.name}</span>
                      <span className="mx-1 flex-1 border-b border-dotted border-ivory/20" aria-hidden="true" />
                      <span className="font-serif text-amber">₹{it.price}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
