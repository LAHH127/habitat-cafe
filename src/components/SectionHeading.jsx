import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, copy, center = true, dark = false, className = '' }) {
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      <p className={`text-[11px] uppercase tracking-[0.35em] ${dark ? 'text-amber' : 'text-terracotta'}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl ${dark ? 'text-ivory' : 'text-charcoal'}`}
      >
        {title}
      </h2>
      {copy && (
        <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-ivory/70' : 'text-espresso/70'}`}>
          {copy}
        </p>
      )}
    </Reveal>
  );
}
