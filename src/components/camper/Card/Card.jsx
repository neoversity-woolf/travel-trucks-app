import { Link } from 'react-router-dom';
import { BsMap, BsStarFill, BsSuitHeart } from 'react-icons/bs';
import { Button } from '@components';
import { Picture, BadgesList } from '@components/camper';

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
}) {
  return (
    <li className={css.card}>
      <Picture poster={poster} alt={name} />

      <div className={css.cardBody}>
        <div className={css.cardTop}>
          <h3 className={css.title}>{name}</h3>
          <p className={css.price}>€{price}</p>
          <Button iconOnly>
            <BsSuitHeart size={24} />
          </Button>

          <div className={css.wrapper}>
            <p className={css.reviews}>
              <BsStarFill size={16} color="#ffc531" />
              {rating} ({reviews.length} Reviews)
            </p>

            <p className={css.location}>
              <BsMap size={16} />
              {location.split(',').reverse().join(', ')}
            </p>
          </div>
        </div>

        <div className={css.cardCenter}>
          <p className={css.desc}>{description}</p>
        </div>

        <div className="cardBottom">
          <BadgesList />
        </div>

        <Link className="pageLink filled" to={`${id}`}>
          Show more
        </Link>
      </div>
    </li>
  );
}
