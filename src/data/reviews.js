// REVIEW DATA — every entry below is a REAL review of Habitat Cafe (listed on
// Google Maps as "Tonique Habitat Cafe"), copied verbatim from the Google Maps
// listing. No review has been invented, edited, or paraphrased.
//
// Google serves review text as a snippet ending in an ellipsis; the full review
// opens on Google Maps. Each card therefore links through to the listing.

export const REVIEWS_SOURCE = 'Google Maps';

// Aggregate figures shown in the section header, taken from the live listing.
export const ratingSummary = {
  rating: 4.5,
  total: 6563,
  breakdown: [
    { stars: 5, count: 4766 },
    { stars: 4, count: 1042 },
    { stars: 3, count: 311 },
    { stars: 2, count: 129 },
    { stars: 1, count: 315 },
  ],
};

export const reviews = [
  {
    name: 'Kiran',
    meta: 'Local Guide · 70 reviews',
    stars: 5,
    when: '3 months ago',
    text: 'We went for lunch and tried a good mix of dishes. The 3 Shrooms Soup was a comforting start—rich, earthy, and well balanced without being overly heavy. The Rock Shrimp Tempura was a clear highlight: perfectly crisp on the outside, juicy …',
  },
  {
    name: 'sonali khan',
    meta: 'Local Guide · 50 reviews',
    stars: 5,
    when: '2 months ago',
    text: 'The ambiance is bright, airy, and incredibly inviting, especially during the day. The restaurant is spread across two floors and offers both indoor and outdoor seating, making it a comfortable place to relax. …',
  },
  {
    name: 'Pritam Patro',
    meta: 'Local Guide · 130 reviews',
    stars: 5,
    when: 'a month ago',
    text: 'Habitat Cafe is such a cozy and beautiful place to spend some time. The ambience is really Instagram-worthy without feeling overdone, and the food was excellent. The service was warm, quick, and attentive, which made the experience even …',
  },
];
