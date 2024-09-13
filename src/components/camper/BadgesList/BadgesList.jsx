import { Badge } from '@components/camper';
import css from './BadgesList.module.css';

const badges = [
  { transmission: 'manual' },
  { engine: 'petrol' },
  { AC: true },
  { bathroom: true },
  { kitchen: true },
  { TV: true },
  { radio: true },
  { refrigerator: true },
  { microwave: true },
  { gas: false },
  { water: true },
];

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
