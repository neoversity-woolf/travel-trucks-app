import { BsStarFill } from 'react-icons/bs';
import clsx from 'clsx';

import css from './Rating.module.css';

const ratingClass = isActive => clsx('star', isActive && 'active');
// Temp value
const rating = 3;

export default function Rating({ ratingCount }) {
  return (
    <div className={css.wrapper}>
      {ratingCount > 0 &&
        ratingCount.map((_, idx) => {
          const isActive = rating > idx + 1;

          return (
            <BsStarFill
              className={ratingClass(isActive)}
              size={16}
              color="#f2f4f7"
              key={idx}
            />
          );
        })}
    </div>
  );
}
