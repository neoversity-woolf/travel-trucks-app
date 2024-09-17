import clsx from 'clsx';
import { Field } from 'formik';

import css from './TextField.module.css';

const labelClass = required => clsx(css.label, required && css.required);

export default function TextField({
  fieldType = 'text',
  fieldName,
  required,
  fieldPlaceholder = null,
  label = null,
}) {
  return (
    <label className={css.field}>
      <Field
        className={css.input}
        type={fieldType}
        name={fieldName}
        placeholder={fieldPlaceholder}
      />
      {label && <span className={labelClass(required)}>{label}</span>}
    </label>
  );
}
