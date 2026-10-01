import Img from './Img';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const moments = [
  {
    n: '01',
    title: 'Slow Mornings',
    copy: 'Breakfast, coffee and relaxed conversations.',
    img: '/images/experience/mornings.jpg',
    alt: 'Morning coffee on the terrace',
  },
  {
    n: '02',
    title: 'Rooftop Afternoons',
    copy: 'Open-air seating, greenery and city views.',
    img: '/images/experience/afternoons.jpg',
    alt: 'Afternoon light over the rooftop seating',
  },
  {
    n: '03',
    title: 'Golden Evenings',
    copy: 'Warm lighting, intimate seating and a lively rooftop atmosphere.',
    img: '/images/experience/evenings.jpg',
    alt: 'The terrace glowing at golden hour',
  },
  {
    n: '04',
    title: 'Late-Night Conversations',
    copy: 'A relaxed destination that stays open late.',
    img: '/images/experience/late.jpg',
    alt: 'The rooftop late at night',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-sand-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="From morning to midnight"
          title={
            <>
              The Habitat <em className="italic text-espresso/90">Experience</em>
            </>
          }
        />

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {moments.map((m, i) => (
            <Reveal key={m.n} delay={i * 100} className={i % 2 === 1 ? 'lg:mt-12' : ''}>
              <div className="group">
                <div className="relative overflow-hidden rounded-xl">
                  <Img
                    src={m.img}
                    alt={m.alt}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/60 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-3 left-4 font-serif text-4xl italic text-ivory [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
                    {m.n}
                  </span>
                </div>
                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-2 h-px w-8 shrink-0 bg-terracotta" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-xl">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-espresso/70">{m.copy}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
