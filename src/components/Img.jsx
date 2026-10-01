import { useState } from 'react';

function ArchMotif() {
  return (
    <svg viewBox="0 0 64 84" fill="none" aria-hidden="true" className="h-14 w-11">
      <path
        d="M4 80V36C4 18.3 16.5 6 32 6s28 12.3 28 30v44"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 80V40c0-11 7.2-19 16-19s16 8 16 19v40"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </svg>
  );
}

// When a photo file is missing, render a branded placeholder so the slot
// still reads as intentional design. Real photos dropped into public/images/
// replace this automatically.
export default function Img({ src, alt = '', className = '', eager = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt || 'Habitat Cafe photograph coming soon'}
        className={`relative flex min-h-40 flex-col items-center justify-center gap-5 overflow-hidden bg-gradient-to-b from-espresso via-[#31251c] to-[#241a13] px-6 py-10 text-center text-ivory/50 ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(184,92,56,0.28), transparent 70%)',
          }}
          aria-hidden="true"
        />
        <ArchMotif />
        <div>
          <p className="font-serif text-lg tracking-[0.38em] text-ivory/85">HABITAT</p>
          <p className="mt-1.5 text-[9px] uppercase tracking-[0.32em] text-ivory/45">
            Photograph coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      {...(eager ? { fetchPriority: 'high' } : {})}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
