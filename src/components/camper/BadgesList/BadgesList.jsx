import { Badge } from '@components/camper';
import { badges } from '@utils/constants/badges';

import css from './BadgesList.module.css';

export default function BadgesList() {
  return (
    <ul className={css.badges}>
      {badges.map((badge, idx) => {
        const key = Object.keys(badge)[0];
        const value = badge[key];

        if (value === 'string') {
          return <Badge name={value} iconType={idx} key={idx} />;
        }
        if (value === true) {
          return <Badge name={key} iconType={idx} key={idx} />;
        }
      })}
    </ul>
  );
}
