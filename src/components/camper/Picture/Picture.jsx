import css from './Picture.module.css';

export default function Picture({ poster, alt }) {
  return (
    <div className={css.cardThumb}>
      <img className={css.cardIll} src={poster?.original} alt={alt} />
    </div>
  );
}
