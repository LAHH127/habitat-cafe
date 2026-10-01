import { useState } from 'react';
import { CheckCircle2, Phone } from 'lucide-react';
import { site } from '../data/site';
import Reveal from './Reveal';

const inputClass =
  'w-full rounded-lg border border-sand bg-ivory px-4 py-3.5 text-sm outline-none transition placeholder:text-espresso/40 focus:border-terracotta';

const labelClass = 'mb-2 block text-[11px] uppercase tracking-[0.2em] text-espresso/60';

const timeOptions = (() => {
  const out = [];
  for (let h = 8; h < 24; h += 1) {
    for (const m of [0, 30]) {
      const hh = h.toString().padStart(2, '0');
      const mm = m.toString().padStart(2, '0');
      const labelH = ((h + 11) % 12) + 1;
      const ampm = h < 12 ? 'AM' : 'PM';
      out.push({ value: `${hh}:${mm}`, label: `${labelH}:${mm} ${ampm}` });
    }
  }
  return out;
})();

const today = new Date().toISOString().split('T')[0];

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    request: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const reset = () => {
    setSubmitted(false);
    setForm({ name: '', phone: '', date: '', time: '19:00', guests: '2', request: '' });
  };

  return (
    <section id="reserve" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.35em] text-terracotta">Reservations</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl">
            Make a habit of <em className="italic text-espresso/90">coming back.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-espresso/75">
            Send us a request and our team will call to confirm your table. For long evenings and
            larger groups, tell us in the special request — we will do our best.
          </p>
          <div className="mt-10 flex items-center gap-5 rounded-2xl bg-charcoal p-7 text-ivory">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta text-ivory">
              <Phone size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Prefer to call?</p>
              <a
                href={site.phoneHref}
                className="mt-1 block font-serif text-2xl transition-colors hover:text-amber"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-sand bg-cream p-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-olive/15 text-olive">
                <CheckCircle2 size={26} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-3xl leading-snug">
                Your reservation request has been received.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-espresso/70">
                Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''} — our team will call you
                on {site.phone} to confirm your table. Until then, please treat this as a request,
                not a confirmed booking.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 border border-charcoal/30 px-6 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-charcoal hover:text-ivory"
              >
                Make another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-2xl border border-sand bg-cream p-7 shadow-sm sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="res-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="res-phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="res-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="res-date" className={labelClass}>
                    Date
                  </label>
                  <input
                    id="res-date"
                    name="date"
                    type="date"
                    required
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="res-time" className={labelClass}>
                    Time
                  </label>
                  <select
                    id="res-time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {timeOptions.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="res-guests" className={labelClass}>
                    Number of Guests
                  </label>
                  <select
                    id="res-guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="res-request" className={labelClass}>
                    Special Request <span className="normal-case text-espresso/40">(optional)</span>
                  </label>
                  <textarea
                    id="res-request"
                    name="request"
                    rows={3}
                    value={form.request}
                    onChange={handleChange}
                    placeholder="A quiet corner, a celebration, dietary needs…"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-7 w-full bg-terracotta py-4 text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-espresso"
              >
                Request a Table
              </button>
              <p className="mt-4 text-center text-xs leading-relaxed text-espresso/55">
                This sends a request only — our team confirms every table by phone.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
