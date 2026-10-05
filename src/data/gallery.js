const g = (file, category, caption) => ({
  src: `/images/gallery/${file}`,
  category,
  caption,
});

export const galleryFilters = [
  { key: 'all', label: 'All' },
  { key: 'day', label: 'Day' },
  { key: 'rooftop', label: 'Rooftop' },
  { key: 'night', label: 'Night' },
  { key: 'food', label: 'Food' },
  { key: 'details', label: 'Details' },
];

// All photographs are original Habitat Cafe photos.
export const galleryItems = [
  g('01.jpg', 'night', 'The Habitat sign lights up at dusk'),
  g('02.jpg', 'rooftop', 'Terrace seating under the open sky'),
  g('03.jpg', 'details', 'The coffee bar, mid-pour'),
  g('04.jpg', 'details', 'The spiral staircase up to the terrace'),
  g('05.jpg', 'rooftop', 'Blue-hour skyline from the rooftop'),
  g('06.jpg', 'night', 'String lights after dark'),
  g('07.jpg', 'day', 'The courtyard on a bright afternoon'),
  g('08.jpg', 'day', 'Morning sun on the curved bench'),
  g('09.jpg', 'rooftop', 'Greenery between the tables'),
  g('10.jpg', 'night', 'Evenings in the arched courtyard'),
  g('11.jpg', 'food', 'Grilled plates from the Habitat kitchen'),
];
