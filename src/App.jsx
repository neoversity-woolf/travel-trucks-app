import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Catalog, Details, NotFound } from '@pages';
import { Header, Features, Reviews } from '@components';

function App() {
  // Fetch
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Details />}>
          <Route index element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
