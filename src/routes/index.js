import {
    Route,
    Routes
} from 'react-router-dom';

import pages from '../contants/pages';

import Home from '../pages/Home';
import UnderConstruction from '../pages/UnderConstruction';
import Bookings from '../pages/Bookings';
import ConfirmedBooking from '../pages/Bookings/components/ConfirmedBooking';
import NotFound from '../pages/NotFound';

const Routing = () => {
  return (
    <Routes>
      <Route
        path={pages.get('home').path}
        element={<Home />}
      />

      <Route
        path={pages.get('about').path}
        element={<UnderConstruction />}
      />

      <Route
        path={pages.get('menu').path}
        element={<UnderConstruction />}
      />

      <Route
        path={pages.get('bookings').path}
        element={<Bookings />}
      />

      <Route
        path={pages.get('confirmedBooking').path}
        element={<ConfirmedBooking />}
      />

      <Route
        path={pages.get('orderOnline').path}
        element={<UnderConstruction />}
      />

      <Route
        path={pages.get('login').path}
        element={<UnderConstruction />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routing
