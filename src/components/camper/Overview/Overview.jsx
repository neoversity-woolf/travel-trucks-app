import { BsMap, BsStarFill, BsSuitHeart } from 'react-icons/bs';
import clsx from 'clsx';
import { Button } from '@components';

import css from './Overview.module.css';

const overviewClass = isGrid => clsx(css.overview, isGrid && css.overviewGrid);

export default function Overview({
  location,
  name,
  price,
  reviews,
  rating,
  isGrid = false,
}) {
  return (
    <div className={overviewClass(isGrid)}>
      <h3 className={css.title}>{name}</h3>

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

      <p className={css.price}>€{price}.00</p>
      {isGrid && (
        <Button iconOnly>
          <BsSuitHeart size={24} />
        </Button>
      )}
    </div>
  );
}
