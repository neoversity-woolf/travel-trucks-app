import { Camper, Button } from '@components';

import css from './CampersList.module.css';
import { items } from './fakeCampers.json';

export default function CampersList() {
  return (
    <section className={css.campers}>
      <h2 className="visuallyHidden">Campers list</h2>
      <ul className={css.list}>
        {items.map(item => (
          <Camper {...item} key={item.id} />
        ))}
      </ul>

      <Button outlined centered onClick={() => {}}>
        Load more
      </Button>
    </section>
  );
}
