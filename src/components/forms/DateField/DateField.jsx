import DatePicker from 'react-datepicker';
import clsx from 'clsx';
import arrowIcon from '/icons/arrow-calendar.svg';

import css from './DateField.module.css';

const datePickerClass = () => clsx(css.input);

export default function DateField({ selectedDate = null, setFieldValue }) {
  const today = new Date();

  return (
    <DatePicker
      className={datePickerClass()}
      selected={selectedDate}
      onChange={date => setFieldValue('date', date)}
      dateFormat="dd/MM/yyyy"
      minDate={today}
      placeholderText="Booking date*"
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px',
          }}
        >
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            type="button"
          >
            <img src={arrowIcon} alt="Triangle arrow" width={24} height={24} />
          </button>
          <span className="react-datepicker__current-month">
            {date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          </span>
          <button
            style={{ transform: 'rotate(180deg)' }}
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            type="button"
          >
            <img src={arrowIcon} alt="Triangle arrow" width={24} height={24} />
          </button>
        </div>
      )}
    />
  );
}
