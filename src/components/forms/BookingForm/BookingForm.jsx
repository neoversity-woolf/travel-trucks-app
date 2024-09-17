import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Button, TextField, DateField, CommentField } from '@components';
import { selectBooking } from '@redux/applicationStorageSelectors';
import { changeBooking } from '@redux/applicationStorageSlice';

import 'react-datepicker/dist/react-datepicker.css';
import css from './BookingForm.module.css';

const BookingValidationSchema = Yup.object().shape({
  userName: Yup.string().required('Name is required'),
  userEmail: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  date: Yup.date()
    .required('Date is required.')
    .min(new Date(), 'You can select date starting from tomorrow.'),
});

const initialValues = {
  userName: '',
  userEmail: '',
  userComment: '',
  date: null,
};

export default function BookingForm({ camperId }) {
  const dispatch = useDispatch();
  // TODO: check if selected bookingDate
  // TODO: is in bookingData from Local Storage
  // const bookingData = useSelector(selectBooking);

  const handleSubmit = async (values, actions) => {
    try {
      await BookingValidationSchema.validate(values, { abortEarly: false });
      const bookingDate = format(values.date, 'dd/MM/yyyy');

      const bookingInfo = {
        id: camperId,
        date: bookingDate,
        email: values.userEmail,
      };

      dispatch(changeBooking(bookingInfo));
      toast.success('Form submitted successfully!');
      actions.resetForm();
    } catch (error) {
      console.log(error);
      toast.error("This didn't work.");
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue, values }) => (
        <Form className={css.form} noValidate>
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
            <DateField
              selectedDate={values.date}
              setFieldValue={setFieldValue}
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
        </Form>
      )}
    </Formik>
  );
}
