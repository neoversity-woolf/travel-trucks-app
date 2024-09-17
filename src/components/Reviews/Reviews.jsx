import { useSelector } from 'react-redux';
import { ReviewItem } from '@components';
import { selectCamperDetails } from '@redux/campersSelectors';

import css from './Reviews.module.css';

export default function Reviews() {
  const { reviews } = useSelector(selectCamperDetails);

  return (
    <ul className={css.reviews}>
      {reviews.map((review, idx) => (
        <ReviewItem {...review} key={idx} />
      ))}
    </ul>
  );
}
