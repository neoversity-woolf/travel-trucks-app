import { NavLink, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { Overview, Picture, Description, BookingForm } from '@components';

import css from './Details.module.css';
import details from './fakeCamper.json';

const navLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

export default function Details() {
  const { id } = useParams();
  console.log(details);

  // Fetch camper by id
  // useEffect(() => {
  //   async function getCamper() {
  //     const response = await fetch(
  //       `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
  //     );
  //     const details = await response.json();
  //     setCamper(details);
  //   }
  //   getCamper();
  // }, [id]);

  return (
    <main className={css.details}>
      <Overview
        location={details.location}
        name={details.name}
        price={details.price}
        reviews={details.reviews}
        rating={details.rating}
      />

      <ul className={css.gallery}>
        {details?.gallery?.length > 0 &&
          details.gallery.map((item, idx) => (
            <li key={idx}>
              <Picture poster={item} alt={details.name} />
            </li>
          ))}
      </ul>

      <Description description={details.description} />

      <nav className={css.nav}>
        <NavLink className={navLinkClass} to="">
          Features
        </NavLink>
        <NavLink className={navLinkClass} to="reviews">
          Reviews
        </NavLink>
      </nav>

      <div className={css.wrapper}>
        <Outlet />
        <BookingForm />
      </div>
    </main>
  );
}
