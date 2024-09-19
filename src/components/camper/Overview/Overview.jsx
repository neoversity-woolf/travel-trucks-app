import { useSelector, useDispatch } from 'react-redux';
import { BsMap, BsStarFill, BsSuitHeart } from 'react-icons/bs';
import toast from 'react-hot-toast';
import clsx from 'clsx';

import { Button } from '@components';
import { selectFavorites } from '@redux/applicationStorageSelectors';
import { switchFavorites } from '@redux/applicationStorageSlice';

import css from './Overview.module.css';

const overviewClass = isGrid => clsx(css.overview, isGrid && css.overviewGrid);

export default function Overview({
  id,
  location,
  name,
  price,
  reviews,
  rating,
  isGrid = false,
}) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleClick = id => {
    const isFavourite = favorites.includes(id);

    isFavourite
      ? toast.success('Removed from favorites.', {
          icon: '❌',
        })
      : toast.success('Added to favorites.', {
          icon: '✅',
        });

    dispatch(switchFavorites(id));
  };

  return (
    <div className={overviewClass(isGrid)}>
      <h3 className={css.title}>{name}</h3>

      <div className={css.wrapper}>
        <p className={css.reviews}>
          <BsStarFill size={16} color="#ffc531" />
          {rating} ({reviews?.length} Reviews)
        </p>

        <p className={css.location}>
          <BsMap size={16} />
          {location?.split(',').reverse().join(', ')}
        </p>
      </div>

      <p className={css.price}>€{price}.00</p>
      {isGrid && (
        <Button
          className={css.btn}
          onClick={() => handleClick(id)}
          type="button"
        >
          <BsSuitHeart
            size={24}
            color={favorites.includes(id) ? '#E44848' : '#101828'}
          />
        </Button>
      )}
    </div>
  );
}
