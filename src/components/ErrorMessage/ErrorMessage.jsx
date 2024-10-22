import css from './ErrorMessage.module.css';

export default function ErrorMessage({ text }) {
  return <div className={css.error}>{text}</div>;
}
