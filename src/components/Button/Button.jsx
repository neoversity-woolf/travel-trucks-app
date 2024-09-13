import clsx from 'clsx';
import css from './Button.module.css';

const buttonClass = ({ filled, outlined, centered, iconOnly }) =>
  clsx(
    filled && css.filled,
    outlined && css.outlined,
    centered && css.centered,
    iconOnly && css.iconOnly
  );

export default function Button({ children, type = 'button', ...params }) {
  return (
    <button className={buttonClass(params)} type={type}>
      {children}
    </button>
  );
}
