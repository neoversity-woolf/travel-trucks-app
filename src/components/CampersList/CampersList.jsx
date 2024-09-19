import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from '@components';
import { selectFilters } from '@redux/filtersSelectors';
import {
  selectCampers,
  selectEndOfCollection,
  selectError,
} from '@redux/campersSelectors';
import { fetchCampers } from '@redux/campersOperations';

import css from './CampersList.module.css';

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const isEndOfCollection = useSelector(selectEndOfCollection);
  const error = useSelector(selectError);

  return (
    <section className={css.campers}>
      <h2 className="visuallyHidden">Campers list</h2>
      <ul className={css.list}>
        {campers.map(camper => (
          <Card {...camper} key={camper.id} />
        ))}
      </ul>

      {!error && !isEndOfCollection && (
        <Button
          onClick={() => dispatch(fetchCampers({ filters, isNextPage: true }))}
          outlined
          centered
        >
          Load more
        </Button>
      )}
    </section>
  );
}
