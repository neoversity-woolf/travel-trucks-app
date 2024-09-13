import { Link } from 'react-router-dom';

import css from './Home.module.css';

function Home() {
  return (
    <main className={css.main}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.slogan}>
        You can find everything you want in our catalog
      </p>
      <Link to="/catalog" className="pageLink filled">
        View Now
      </Link>
    </main>
  );
}

export default Home;
