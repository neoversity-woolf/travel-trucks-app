import css from './Button.module.css';

export default function Button({ content, type = 'button' }) {
  return (
    <button className={css.home} type={type}>
      {content}
    </button>
  );
}
