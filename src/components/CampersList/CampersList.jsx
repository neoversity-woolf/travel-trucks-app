import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from '@components';
import { selectFilters } from '@redux/filtersSelectors';
import { selectCampers, selectEndOfCollection } from '@redux/campersSelectors';
import { loadNextPageAndFetchCampers } from '@redux/campersOperations';

import css from './CampersList.module.css';

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const isEndOfCollection = useSelector(selectEndOfCollection);

  return (
    <section className={css.campers}>
      <h2 className="visuallyHidden">Campers list</h2>
      <ul className={css.list}>
        {campers.map(camper => (
          <Card {...camper} key={camper.id} />
        ))}
      </ul>

      {!isEndOfCollection && (
        <Button
          onClick={() => dispatch(loadNextPageAndFetchCampers(filters))}
          outlined
          centered
        >
          Load more
        </Button>
      )}
    </section>
  );
}
