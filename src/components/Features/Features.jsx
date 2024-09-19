import { useSelector } from 'react-redux';
import { selectCamperDetails } from '@redux/campersSelectors';
import { Details, BadgesList } from '@components';

import css from './Features.module.css';

export default function Features() {
  const camper = useSelector(selectCamperDetails);

  return (
    <article className={css.features}>
      <h2 className="visuallyHidden">Features</h2>
      <BadgesList camper={camper} />
      <Details />
    </article>
  );
}
