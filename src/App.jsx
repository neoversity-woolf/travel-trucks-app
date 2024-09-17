import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('@pages/Home/Home'));
const Catalog = lazy(() => import('@pages/Catalog/Catalog'));
const Details = lazy(() => import('@pages/Details/Details'));
const NotFound = lazy(() => import('@pages/NotFound/NotFound'));
const Header = lazy(() => import('@components/Header/Header'));
const Features = lazy(() => import('@components/Features/Features'));
const Reviews = lazy(() => import('@components/Reviews/Reviews'));

function App() {
  // Fetch
  useEffect(() => {}, []);

  return (
    <Suspense fallback={''}>
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
      <Toaster />
    </Suspense>
  );
}

export default App;
