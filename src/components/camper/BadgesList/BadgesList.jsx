import { Badge } from '@components/camper';

import css from './BadgesList.module.css';

export default function BadgesList({ camper }) {
  const badges = [
    { transmission: camper?.transmission },
    { engine: camper?.engine },
    { AC: camper?.AC },
    { bathroom: camper?.bathroom },
    { kitchen: camper?.kitchen },
    { TV: camper?.TV },
    { radio: camper?.radio },
    { refrigerator: camper?.refrigerator },
    { microwave: camper?.microwave },
    { gas: camper?.gas },
    { water: camper?.water },
  ];

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
