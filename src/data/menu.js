// ---------------------------------------------------------------------------
// SAMPLE MENU DATA — NOT the official Habitat Cafe menu.
// Replace these items and prices with the real menu from the cafe before
// going live. Set MENU_NOTE to null once the real menu is in place.
// ---------------------------------------------------------------------------

export const MENU_NOTE =
  'Menu shown is a sample selection — the full menu is available at the cafe.';

export const categories = [
  'Breakfast',
  'Small Plates',
  'Soups & Salads',
  'Mains',
  'Pasta',
  'Asian / Thai',
  'Indian',
  'Desserts',
  'Coffee',
  'Beverages',
];

let nextId = 0;
const item = (category, name, desc, price, opts = {}) => ({
  id: ++nextId,
  category,
  name,
  desc,
  price,
  veg: !!opts.veg,
  featured: !!opts.featured,
  sub: opts.sub || null,
  image: opts.image || null,
  illustration: !!opts.illustration,
});

export const items = [
  // Breakfast
  item('Breakfast', 'Classic Eggs on Toast', 'Eggs any style on sourdough, whipped butter, chives.', 285),
  item('Breakfast', 'Masala Omelette', 'Three-egg omelette, onion, chilli, coriander, toasted bread.', 265, { veg: true }),
  item('Breakfast', 'Ricotta Hotcakes', 'Whipped ricotta pancakes, honey butter, seasonal fruit.', 325, { veg: true }),
  item('Breakfast', 'Habitat Big Breakfast', 'Eggs any style, chicken sausage, grilled tomato, hash browns, sourdough.', 425, { featured: true, image: '/images/dishes/dish-1.jpg', illustration: true }),
  item('Breakfast', 'Avocado Sourdough', 'Smashed avocado, feta, chilli oil, toasted seeds.', 395, { veg: true }),
  item('Breakfast', 'Granola & Yoghurt Bowl', 'House granola, Greek yoghurt, berry compote.', 295, { veg: true }),

  // Small Plates
  item('Small Plates', 'Bruschetta al Pomodoro', 'Tomato, garlic, basil, olive oil on grilled bread.', 295, { veg: true }),
  item('Small Plates', 'Hummus & Pita', 'Chickpea hummus, smoked paprika, warm pita.', 365, { veg: true }),
  item('Small Plates', 'Loaded Nachos', 'Cheese sauce, salsa, beans, jalapeños, sour cream.', 345, { veg: true }),
  item('Small Plates', 'Crispy Corn', 'Charred corn, peri-peri butter, lime.', 315, { veg: true }),
  item('Small Plates', 'Paneer Tikka Skewers', 'Char-grilled paneer, mint chutney, pickled onion.', 385, { veg: true, featured: true, image: '/images/dishes/dish-2.jpg', illustration: true }),
  item('Small Plates', 'Chicken Sliders', 'Mini brioche, fried chicken, chipotle mayo.', 395),

  // Soups & Salads
  item('Soups & Salads', 'Tomato Basil Soup', 'Slow-roasted tomato, fresh basil, cream swirl.', 265, { veg: true }),
  item('Soups & Salads', 'Cream of Mushroom', 'Button mushrooms, truffle oil, sourdough soldiers.', 295, { veg: true }),
  item('Soups & Salads', 'Caesar Salad', 'Romaine, parmesan, sourdough croutons, caesar dressing.', 365),
  item('Soups & Salads', 'Greek Salad', 'Cucumber, tomato, olives, feta, oregano.', 385, { veg: true }),
  item('Soups & Salads', 'Quinoa & Roasted Veg', 'Quinoa, pumpkin, peppers, pomegranate, lemon dressing.', 425, { veg: true }),
  item('Soups & Salads', 'Chicken Tikka Salad', 'Char-grilled chicken tikka, onion, mint yoghurt.', 445),

  // Mains
  item('Mains', 'Grilled Chicken Steak', 'Herb-marinated chicken, mash, pan jus.', 645),
  item('Mains', 'Paneer Lababdar', 'Cottage cheese, rich tomato-cashew gravy, naan.', 495, { veg: true }),
  item('Mains', 'Fish & Chips', 'Battered fish, chips, tartare, lemon.', 595),
  item('Mains', 'Mushroom Risotto', 'Arborio rice, parmesan, truffle shavings.', 545, { veg: true }),
  item('Mains', 'Lamb Burger', 'Lamb patty, cheddar, caramelised onion, brioche.', 625),
  item('Mains', 'Mezze Platter', 'Hummus, muhammara, falafel, warm pita, olives.', 695, { veg: true }),

  // Pasta
  item('Pasta', 'Arrabbiata', 'Tomato, garlic, chilli, basil, parmesan.', 445, { veg: true }),
  item('Pasta', 'Alfredo', 'Cream, parmesan, garlic butter.', 465, { veg: true }),
  item('Pasta', 'Pesto Basil', 'Basil pesto, pine nuts, olive oil.', 475, { veg: true }),
  item('Pasta', 'Aglio e Olio', 'Garlic, olive oil, chilli flakes, parsley.', 425, { veg: true }),
  item('Pasta', 'Chicken Carbonara', 'Egg, parmesan, crispy chicken, black pepper.', 545),

  // Asian / Thai
  item('Asian / Thai', 'Pad Thai', 'Rice noodles, tamarind, tofu, peanuts, bean sprouts.', 545, { veg: true, featured: true, image: '/images/dishes/dish-3.jpg', illustration: true }),
  item('Asian / Thai', 'Thai Green Curry', 'Coconut curry, vegetables, jasmine rice.', 525, { veg: true }),
  item('Asian / Thai', 'Hakka Noodles', 'Wok-tossed noodles, vegetables, burnt garlic.', 425, { veg: true }),
  item('Asian / Thai', 'Kung Pao Chicken', 'Chicken, peanuts, dried chilli, sichuan pepper.', 545),
  item('Asian / Thai', 'Vietnamese Summer Rolls', 'Rice paper, vermicelli, mint, peanut dip.', 425, { veg: true }),
  item('Asian / Thai', 'Ramen Bowl', 'Noodles, rich broth, soft egg, greens, chilli oil.', 575),

  // Indian
  item('Indian', 'Butter Chicken', 'Charcoal chicken, tomato-fenugreek gravy, cream.', 595, { featured: true, image: '/images/dishes/dish-4.jpg', illustration: true }),
  item('Indian', 'Dal Makhani', 'Black lentils, butter, cream, slow-cooked overnight.', 445, { veg: true }),
  item('Indian', 'Hyderabadi Chicken Biryani', 'Aged basmati, saffron, fried onion, raita.', 595),
  item('Indian', 'Veg Biryani', 'Aged basmati, vegetables, mint, raita.', 495, { veg: true }),
  item('Indian', 'Palak Paneer', 'Spinach gravy, cottage cheese, garlic tadka.', 465, { veg: true }),
  item('Indian', 'Tandoori Mixed Grill', 'Chicken tikka, seekh kebab, tandoori wings.', 795),

  // Desserts
  item('Desserts', 'Tiramisu', 'Espresso-soaked savoiardi, mascarpone, cocoa.', 365, { veg: true, featured: true, image: '/images/dishes/dish-5.jpg', illustration: true }),
  item('Desserts', 'Basque Cheesecake', 'Burnt-top cheesecake, berry coulis.', 395, { veg: true }),
  item('Desserts', 'Chocolate Lava Cake', 'Molten centre, vanilla ice cream.', 345, { veg: true }),
  item('Desserts', 'Gulab Jamun Cheesecake', 'Cheesecake base, gulab jamun, rose drizzle.', 385, { veg: true }),
  item('Desserts', 'Affogato', 'Vanilla gelato, double espresso.', 285, { veg: true }),
  item('Desserts', 'Ice Cream Sundae', 'Three scoops, roasted nuts, chocolate sauce, wafer.', 325, { veg: true }),

  // Coffee
  item('Coffee', 'Espresso', 'Double shot, single origin.', 195),
  item('Coffee', 'Americano', 'Espresso, hot water, clean and bold.', 215),
  item('Coffee', 'Cappuccino', 'Espresso, steamed milk, deep foam.', 245),
  item('Coffee', 'Café Latte', 'Espresso, silky milk, latte art.', 255),
  item('Coffee', 'Flat White', 'Double ristretto, velvet microfoam.', 265),
  item('Coffee', 'Mocha', 'Espresso, chocolate, steamed milk.', 285),
  item('Coffee', 'Cold Coffee', 'Blended cold coffee, whipped cream.', 275),
  item('Coffee', 'Vietnamese Cold Coffee', 'Dark robusta, condensed milk, served over ice.', 295, { featured: true, image: '/images/dishes/dish-6.jpg', illustration: true }),

  // Beverages
  item('Beverages', 'Masala Chai', 'Assam tea, ginger, cardamom, milk.', 165, { sub: 'Classics' }),
  item('Beverages', 'Fresh Lime Soda', 'Sweet, salt or mixed — your habit, your way.', 185, { sub: 'Classics' }),
  item('Beverages', 'Iced Tea', 'Lemon or peach, brewed fresh.', 225, { sub: 'Classics' }),
  item('Beverages', 'Hot Chocolate', 'Dark chocolate, steamed milk, cocoa dust.', 265, { sub: 'Classics' }),
  item('Beverages', 'Virgin Mint Mojito', 'Mint, lime, soda, crushed ice.', 245, { sub: 'Refreshers' }),
  item('Beverages', 'Watermelon Cooler', 'Fresh watermelon, mint, no added sugar.', 255, { sub: 'Refreshers' }),
  item('Beverages', 'Mango Smoothie', 'Alphonso mango, yoghurt, honey.', 285, { sub: 'Refreshers' }),
  item('Beverages', 'Berry Blast', 'Mixed berries, banana, oat milk.', 295, { sub: 'Refreshers' }),
  item('Beverages', 'Habitat Sunset Cooler', 'Orange, grenadine, soda, over ice.', 275, { sub: 'Signature' }),
  item('Beverages', 'Espresso Freakshake', 'Coffee, vanilla ice cream, chocolate, wafer.', 345, { sub: 'Signature' }),
];

export const featuredItems = items.filter((i) => i.featured);
