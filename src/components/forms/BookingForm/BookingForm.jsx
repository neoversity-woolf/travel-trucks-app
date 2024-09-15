import { Button } from '@components';
import { TextField, CommentField } from '@components';
import css from './BookingForm.module.css';

export default function BookingForm() {
  return (
    <form className={css.form}>
      <p className={css.caption}>Book your campervan now</p>
      <small className={css.lead}>
        Stay connected! We are always ready to help you.
      </small>

      <div className={css.group}>
        <TextField
          fieldName={'userName'}
          fieldPlaceholder={'Ted Bekker'}
          label={'Name'}
          required
        />
        <TextField
          fieldName={'userEmail'}
          fieldPlaceholder={'example@mail.com'}
          label={'Email'}
          required
        />
        <CommentField
          commentName={'userComment'}
          commentPlaceholder={'Type your message here'}
          label={'Comment'}
        />
      </div>

      <Button type={'submit'} filled centered>
        Send
      </Button>
    </form>
  );
}
