import { BrowserRouter } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Routing from './routes';
import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routing />
    </Layout>

    <ScrollToTop />
  </BrowserRouter>
)

export default App;
