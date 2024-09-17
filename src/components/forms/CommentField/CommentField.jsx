import clsx from 'clsx';
import { Field } from 'formik';

import css from './CommentField.module.css';

const labelClass = required => clsx(css.label, required && css.required);

export default function CommentField({
  commentName,
  commentPlaceholder,
  required,
  label = null,
}) {
  return (
    <label className={css.field}>
      <Field
        className={css.comment}
        name={commentName}
        placeholder={commentPlaceholder}
        required={required}
        as="textarea"
      ></Field>
      {label && <span className={labelClass(required)}>{label}</span>}
    </label>
  );
}
