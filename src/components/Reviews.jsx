import { Star, ArrowUpRight, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { ratingSummary, reviews, REVIEWS_SOURCE } from '../data/reviews';
import { site } from '../data/site';

function Stars({ n, className = 'h-4 w-4' }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < n ? 'fill-amber text-amber' : 'fill-sand text-sand'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { rating, total, breakdown } = ratingSummary;

  return (
    <section id="reviews" className="bg-sand-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Word of mouth"
          title="What the city is saying."
          copy={`Real reviews from our ${REVIEWS_SOURCE} listing — unedited and in our guests' own words.`}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Aggregate rating card */}
          <Reveal>
            <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-cream p-10 text-center shadow-[0_20px_60px_-30px_rgba(30,26,22,0.35)] ring-1 ring-sand">
              <p className="font-serif text-7xl font-light text-charcoal">{rating}</p>
              <div className="mt-3">
                <Stars n={Math.round(rating)} className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm tracking-wide text-espresso/70">
                {total.toLocaleString('en-IN')} reviews on {REVIEWS_SOURCE}
              </p>

              <div className="mt-8 w-full space-y-2.5">
                {breakdown.map((b) => (
                  <div key={b.stars} className="flex items-center gap-3 text-xs text-espresso/70">
                    <span className="w-3 text-right font-medium">{b.stars}</span>
                    <Star className="h-3 w-3 fill-amber text-amber" />
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sand">
                      <div
                        className="h-full rounded-full bg-terracotta"
                        style={{ width: `${((b.count / total) * 100).toFixed(1)}%` }}
                      />
                    </div>
                    <span className="w-10 text-right tabular-nums">{b.count.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-9 inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal transition hover:border-terracotta hover:text-terracotta"
              >
                Read all reviews
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Review cards */}
          <div className="grid gap-6 sm:grid-cols-1">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure className="relative h-full rounded-3xl bg-cream p-8 ring-1 ring-sand transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(30,26,22,0.35)] sm:p-10">
                  <Quote className="absolute right-8 top-8 h-8 w-8 text-sand" aria-hidden="true" />
                  <div className="flex items-center justify-between gap-4">
                    <Stars n={r.stars} />
                    <span className="text-xs tracking-wide text-espresso/50">{r.when}</span>
                  </div>
                  <blockquote className="mt-5 max-w-3xl font-serif text-lg leading-relaxed text-espresso sm:text-xl">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta font-serif text-lg text-ivory">
                      {r.name.charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-wide text-charcoal">{r.name}</p>
                      <p className="text-xs text-espresso/60">{r.meta}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-xs tracking-wide text-espresso/50">
            Reviews sourced from our public {REVIEWS_SOURCE} listing and shown as published there.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
