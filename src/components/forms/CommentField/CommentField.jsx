import { useId } from 'react';
import clsx from 'clsx';

import css from './CommentField.module.css';

const labelClass = required => clsx(css.label, required && css.required);

export default function CommentField({
  commentName,
  commentPlaceholder,
  required,
  label = null,
}) {
  const commentId = useId();
  return (
    <label className={css.field} htmlFor={commentId}>
      <textarea
        className={css.comment}
        name={commentName}
        id={commentId}
        placeholder={commentPlaceholder}
        required={required}
      ></textarea>
      {label && <span className={labelClass(required)}>{label}</span>}
    </label>
  );
}
