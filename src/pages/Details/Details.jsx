import { useParams } from 'react-router-dom';

import css from './Details.module.css';

export default function Details() {
  const { id } = useParams();
  console.log(id);
  // Fetch camper by id

  return <div className={css.details}>Details page</div>;
}
