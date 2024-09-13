import { useParams } from 'react-router-dom';

import css from './Details.module.css';
import details from './faceCamper.json';

export default function Details() {
  const { id } = useParams();
  console.log(details);

  // Fetch camper by id
  // useEffect(() => {
  //   async function getCamper() {
  //     const response = await fetch(
  //       `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
  //     );
  //     const details = await response.json();
  //     setCamper(details);
  //   }
  //   getCamper();
  // }, [id]);

  return <main className={css.details}>Details page</main>;
}
