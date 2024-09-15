import { CamperDetails } from '@components';
import { BadgesList } from '@components/camper';

import css from './Features.module.css';

export default function Features() {
  return (
    <article className={css.features}>
      <h2 className="visuallyHidden">Features</h2>
      <BadgesList />
      <CamperDetails />
    </article>
  );
}
