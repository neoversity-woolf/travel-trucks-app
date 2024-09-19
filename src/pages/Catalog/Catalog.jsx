import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CampersList, CampersFilter } from '@components';
import { fetchCampers } from '@redux/campersOperations';

import css from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers({ filters: {} }));
  }, [dispatch]);

  return (
    <main className={css.main}>
      <h1 className="visuallyHidden">Campers catalog</h1>
      <CampersFilter />
      <CampersList />
    </main>
  );
}
