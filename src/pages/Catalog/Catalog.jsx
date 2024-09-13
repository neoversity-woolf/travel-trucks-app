import { CampersList, CampersFilter } from '@components';

import css from './Catalog.module.css';

export default function Catalog() {
  return (
    <main className={css.main}>
      <h1 className="visuallyHidden">Campers catalog</h1>
      <CampersFilter />
      <CampersList />
    </main>
  );
}
