import { Link } from 'react-router-dom';
import { BsMap, BsStarFill, BsSuitHeart } from 'react-icons/bs';
import { BsWind, BsDiagram3 } from 'react-icons/bs';
import { Button } from '@components';

import css from './Camper.module.css';

export default function Camper({
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
      <div className={css.cardThumb}>
        <img className={css.cardIll} src={poster.original} alt={name} />
      </div>

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
          <ul className={css.cardOptions}>
            <li className={css.option}>
              <BsDiagram3 size={20} />
              <span>Automatic</span>
            </li>
            <li className={css.option}>
              <span>Petrol</span>
            </li>
            <li className={css.option}>
              <span>Kitchen</span>
            </li>
            <li className={css.option}>
              <BsWind size={20} />
              <span>AC</span>
            </li>
          </ul>
        </div>

        <Link to={`${id}`}>Show more</Link>
      </div>
    </li>
  );
}
