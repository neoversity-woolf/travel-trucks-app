import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import logoPath from '@assets/logo.svg';

import css from './Header.module.css';

const navLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

export default function Header() {
  return (
    <header className={css.header}>
      <Link className={css.logo} to="/">
        <img src={logoPath} alt="Campers site logo" width={136} height={16} />
      </Link>
      <nav className={css.nav}>
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={navLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
