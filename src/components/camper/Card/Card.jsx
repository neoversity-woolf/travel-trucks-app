import { Link } from 'react-router-dom';
import { Picture, Overview, Description, BadgesList } from '@components/camper';

import css from './Card.module.css';

export default function Card({
  id,
  name,
  price,
  rating,
  location,
  description,
  gallery: [poster],
  reviews,
  ...camper
}) {
  return (
    <li className={css.card}>
      <Picture poster={poster} alt={name} />

      <div className={css.cardBody}>
        <Overview {...{ id, price, rating, location, reviews, name }} isGrid />

        <div className={css.cardCenter}>
          <Description description={description} short />
        </div>

        <div className={css.cardBottom}>
          <BadgesList camper={camper} />
        </div>

        <Link
          className="pageLink filled"
          to={`${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </Link>
      </div>
    </li>
  );
}
