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

// 12 slots — swap file names / add entries to match the real photo set.
export const galleryItems = [
  g('01.jpg', 'rooftop', 'Rooftop seating under the open sky'),
  g('02.jpg', 'day', 'Morning light over the terrace'),
  g('03.jpg', 'details', 'Terracotta arches up close'),
  g('04.jpg', 'food', 'From the kitchen'),
  g('05.jpg', 'night', 'Amber evenings at Habitat'),
  g('06.jpg', 'rooftop', 'Golden hour on the terrace'),
  g('07.jpg', 'day', 'Greenery between the tables'),
  g('08.jpg', 'food', 'Plates worth returning for'),
  g('09.jpg', 'night', 'Late-night conversations'),
  g('10.jpg', 'details', 'Curves, textures and detail'),
  g('11.jpg', 'food', 'Something sweet'),
  g('12.jpg', 'rooftop', 'Above the city'),
];
