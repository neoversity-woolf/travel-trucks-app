import { useSelector } from 'react-redux';
import { Card, Button } from '@components';
import { selectCampers } from '@redux/campersSelectors';

import css from './CampersList.module.css';

export default function CampersList() {
  const campers = useSelector(selectCampers);

  return (
    <section className={css.campers}>
      <h2 className="visuallyHidden">Campers list</h2>
      <ul className={css.list}>
        {campers.map(camper => (
          <Card {...camper} key={camper.id} />
        ))}
      </ul>

      <Button outlined centered onClick={() => {}}>
        Load more
      </Button>
    </section>
  );
}
