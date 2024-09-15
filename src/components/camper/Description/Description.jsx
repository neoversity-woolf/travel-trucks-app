import clsx from 'clsx';
import css from './Description.module.css';

const descriptionClass = short => clsx(css.desc, short && css.short);

export default function Description({ description, short = false }) {
  return <p className={descriptionClass(short)}>{description}</p>;
}
