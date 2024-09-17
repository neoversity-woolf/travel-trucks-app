import DatePicker from 'react-datepicker';
import clsx from 'clsx';

import css from './DateField.module.css';

const datePickerClass = () => clsx(css.input);

export default function DateField({ selectedDate = null, setFieldValue }) {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => setFieldValue('date', date)}
      dateFormat="dd/MM/yyyy"
      className={datePickerClass()}
      placeholderText="Booking date*"
    />
  );
}
