import { useSelector } from 'react-redux';
import { selectCamperDetails } from '@redux/campersSelectors';

import css from './Details.module.css';

export default function Details() {
  const camper = useSelector(selectCamperDetails);
  const details = {
    form: camper?.form,
    length: camper?.length,
    width: camper?.width,
    height: camper?.height,
    tank: camper?.tank,
    consumption: camper?.consumption,
  };

  return (
    <div className={css.detailsInfo}>
      <h3 className={css.detailsCaption}>Vehicle details</h3>
      <ul className={css.detailsList}>
        {Object.entries(details).map(([key, value], idx) => (
          <li className={css.detailsItem} key={idx}>
            <p>{key}</p>
            <p>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
