import { ReviewItem } from '@components';

import css from './Reviews.module.css';

const reviews = [
  {
    reviewer_name: 'Alice',
    reviewer_rating: 5,
    comment:
      'The Britz 4 Berth is a fantastic choice for a comfortable and stylish road trip. The interior design is impressive, and the amenities provided a luxury touch. Highly recommended for couples seeking a premium RV experience.',
  },
  {
    reviewer_name: 'Bob',
    reviewer_rating: 3,
    comment:
      'Decent motorhome overall. The Britz 4 Berth provided a comfortable stay, but the lack of gas for cooking was a downside. The entertainment options were good, and the bed was comfortable. Worth considering for a short trip.',
  },
];

export default function Reviews() {
  return (
    <ul className={css.reviews}>
      {reviews.map((review, idx) => (
        <ReviewItem {...review} key={idx} />
      ))}
    </ul>
  );
}
