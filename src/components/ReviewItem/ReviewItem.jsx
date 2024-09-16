import { Rating } from '@components';
import css from './ReviewItem.module.css';

export default function ReviewItem({
  reviewer_name,
  reviewer_rating,
  comment,
}) {
  return (
    <li>
      <div className={css.wrapper}>
        <div className={css.avatar}>
          {reviewer_name.includes('https') ? (
            <img className={css.img} src={reviewer_name} alt={reviewer_name} />
          ) : (
            <p className={css.placeholder}>{reviewer_name.slice(0, 1)}</p>
          )}
        </div>
        <p className={css.name}>{reviewer_name}</p>
        <Rating activeStars={reviewer_rating} ratingCount={5} />
      </div>
      <p className={css.comment}>{comment}</p>
    </li>
  );
}
