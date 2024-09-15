import { useId } from 'react';
import clsx from 'clsx';

import css from './TextField.module.css';

const labelClass = required => clsx(css.label, required && css.required);

export default function TextField({
  fieldType = 'text',
  fieldName,
  required,
  fieldPlaceholder = null,
  value,
  label = null,
}) {
  const fielId = useId();

  return (
    <label className={css.field} htmlFor={fielId}>
      <input
        className={css.input}
        type={fieldType}
        name={fieldName}
        id={fielId}
        placeholder={fieldPlaceholder}
        value={value}
        required={required}
      />
      {label && <span className={labelClass(required)}>{label}</span>}
    </label>
  );
}
