import { Route, Routes } from 'react-router-dom';

import { Home, Catalog, Details, Features, Reviews, NotFound } from '@pages';
import { Header } from '@components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/details" element={<Details />}>
          <Route path="feature" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
