import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { NotFound } from '@pages';
import { Overview, Picture, Description, BookingForm } from '@components';
import { fetchCamperById } from '@redux/campersOperations';
import {
  selectLoading,
  selectError,
  selectCamperDetails,
} from '@redux/campersSelectors';
import { clearCamperDetails } from '@redux/campersSlice';

import css from './Details.module.css';

const navLinkClass = ({ isActive }) =>
  clsx(css.link, isActive ? css.active : '');

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperDetails);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isValidId = id => /^[0-9]+$/.test(id);

  useEffect(() => {
    if (!isValidId(id)) {
      console.log('Invalid ID, cancelling request');
      return;
    }

    dispatch(fetchCamperById(id));

    return () => {
      dispatch(clearCamperDetails());
    };
  }, [dispatch, id]);

  if (!isValidId(id)) {
    return <NotFound path="/catalog" pageName="Catalog" />;
  }

  if (!camper || loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops! We have some error</p>;
  }

  return (
    <main className={css.details}>
      <Overview
        location={camper?.location}
        name={camper?.name}
        price={camper?.price}
        reviews={camper?.reviews}
        rating={camper?.rating}
      />

      <ul className={css.gallery}>
        {camper?.gallery?.length > 0 &&
          camper.gallery.map((item, idx) => (
            <li key={idx}>
              <Picture poster={item} alt={camper.name} />
            </li>
          ))}
      </ul>

      <Description description={camper?.description} />

      <nav className={css.nav}>
        <NavLink className={navLinkClass} to="./" end>
          Features
        </NavLink>
        <NavLink className={navLinkClass} to="reviews">
          Reviews
        </NavLink>
      </nav>

      <div className={css.wrapper}>
        <Outlet />
        <BookingForm camperId={id} />
      </div>
    </main>
  );
}
