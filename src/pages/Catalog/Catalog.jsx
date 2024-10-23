import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CampersList, CampersFilter, ErrorMessage } from '@components';
import { fetchCampers } from '@redux/campersOperations';
import { selectError } from '@redux/campersSelectors';
import { resetState } from '@redux/campersSlice';

import css from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers({ filters: {} }));

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return (
    <main className={css.main}>
      <h1 className="visuallyHidden">Campers catalog</h1>
      <CampersFilter />
      <CampersList />
      {error && <ErrorMessage text="Some error ..." />}
    </main>
  );
}
