const pagesData = [
  { key: 'home', name: 'Home', path: '/', anchorable: true },
  { key: 'about', name: 'About', path: '/about', anchorable: true },
  { key: 'menu', name: 'Menu', path: '/menu', anchorable: true },
  { key: 'bookings', name: 'Reservations', path: '/bookings', anchorable: true },
  { key: 'confirmedBooking', name: 'Confirmed Booking', path: '/confirmed-booking', anchorable: false },
  { key: 'orderOnline', name: 'Order Online', path: '/order-online', anchorable: true },
  { key: 'login', name: 'Login', path: '/login', anchorable: true }
];

const pages = new Map();

pagesData.forEach(page => {
  pages.set(page.key, { name: page.name, path: page.path, anchorable: page.anchorable });
});

export default pages;
