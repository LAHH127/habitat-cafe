import { Star, ArrowUpRight, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { ratingSummary, reviews, REVIEWS_SOURCE } from '../data/reviews';
import { site } from '../data/site';

function Stars({ n, className = 'h-3.5 w-3.5' }) {
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
    <section id="reviews" className="bg-sand-light py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Word of mouth"
          title="What the city is saying."
          copy={`Real reviews from our ${REVIEWS_SOURCE} listing — unedited and in our guests' own words.`}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
          {/* Compact Aggregate Rating Card */}
          <Reveal>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-cream p-6 text-center ring-1 ring-sand shadow-sm">
              <p className="font-serif text-5xl font-light text-charcoal">{rating}</p>
              <div className="mt-2.5">
                <Stars n={Math.round(rating)} className="h-4 w-4" />
              </div>
              <p className="mt-2 text-xs tracking-wide text-espresso/70">
                {total.toLocaleString('en-IN')} reviews on {REVIEWS_SOURCE}
              </p>

              <div className="mt-6 w-full space-y-2">
                {breakdown.map((b) => (
                  <div key={b.stars} className="flex items-center gap-2.5 text-[11px] text-espresso/70">
                    <span className="w-2.5 text-right font-medium">{b.stars}</span>
                    <Star className="h-2.5 w-2.5 fill-amber text-amber" />
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-sand">
                      <div
                        className="h-full rounded-full bg-terracotta"
                        style={{ width: `${((b.count / total) * 100).toFixed(1)}%` }}
                      />
                    </div>
                    <span className="w-9 text-right tabular-nums">{b.count.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-1.5 rounded-full border border-charcoal/15 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:border-terracotta hover:text-terracotta"
              >
                Read all reviews
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Compact 2-column Review cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <figure className="relative flex h-full flex-col justify-between rounded-2xl bg-cream p-5 ring-1 ring-sand transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <Quote className="absolute right-5 top-5 h-5 w-5 text-sand/60" aria-hidden="true" />
                  <div>
                    <div className="flex items-center justify-between gap-3 pr-6">
                      <Stars n={r.stars} />
                      <span className="text-[11px] tracking-wide text-espresso/50">{r.when}</span>
                    </div>
                    <blockquote className="mt-3 text-xs leading-relaxed text-espresso/85 sm:text-[13px]">
                      “{r.text}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-sand/50 pt-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta font-serif text-xs text-ivory">
                      {r.name.charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-charcoal">{r.name}</p>
                      <p className="text-[10px] text-espresso/60">{r.meta}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-[11px] tracking-wide text-espresso/50">
            Reviews sourced from our public {REVIEWS_SOURCE} listing and shown as published there.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
