import { Link } from 'react-router-dom';

import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <main className={css.notFoundWrapper}>
      <h1 className={css.title}>Oops!</h1>
      <p className={css.desc}>Sorry, an unexpected error has occured.</p>
      <p className={css.errorText}>Not Found</p>
      <Link className={css.link} to="/">
        Back to Home page
      </Link>
    </main>
  );
}
