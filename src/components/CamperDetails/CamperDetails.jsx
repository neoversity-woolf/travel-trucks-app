import css from './CamperDetails.module.css';

export default function CamperDetails() {
  return (
    <div className={css.detailsInfo}>
      <h3 className={css.detailsCaption}>Vehicle details</h3>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <p>Form</p>
          <p>Panel truck</p>
        </li>
        <li className={css.detailsItem}>
          <p>Length</p>
          <p>5.4 m</p>
        </li>
        <li className={css.detailsItem}>
          <p>Width</p>
          <p>2.01 m</p>
        </li>
        <li className={css.detailsItem}>
          <p>Height</p>
          <p>2.05 m</p>
        </li>
        <li className={css.detailsItem}>
          <p>Tank</p>
          <p>132 I</p>
        </li>
        <li className={css.detailsItem}>
          <p>Consumption</p>
          <p>12.4l/100km</p>
        </li>
      </ul>
    </div>
  );
}
