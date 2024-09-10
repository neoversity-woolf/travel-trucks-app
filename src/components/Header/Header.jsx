import { Link, NavLink } from 'react-router-dom';
import logoPath from '@assets/logo.svg';

import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <Link className={css.logo} to="/">
        <img src={logoPath} alt="Campers site logo" width={136} height={16} />
      </Link>
      <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </nav>
    </header>
  );
}

export default Header;
