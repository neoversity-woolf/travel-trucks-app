import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import css from './CardSkeleton.module.css';

export default function CardSkeleton() {
  return (
    <li className={css.card}>
      <div className={css.cardImage}>
        <Skeleton width="100%" height={320} borderRadius={10} />
      </div>

      <div className={css.cardBody}>
        <div width="100%" className={css.cardTop}>
          <Skeleton height={32} />
          <Skeleton height={32} />
          <Skeleton height={24} />
        </div>
        <Skeleton width="100%" height={24} />
        <div className={css.cardBottom}>
          <Skeleton height={48} borderRadius={100} />
          <Skeleton height={48} borderRadius={100} />
          <Skeleton height={48} borderRadius={100} />
          <Skeleton height={48} borderRadius={100} />
        </div>
        <Skeleton width={166} height={56} borderRadius={200} />
      </div>
    </li>
  );
}
