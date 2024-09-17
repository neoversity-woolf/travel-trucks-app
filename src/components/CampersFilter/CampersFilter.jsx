import { useDispatch, useSelector } from 'react-redux';
import {
  BsMap,
  BsWind,
  BsDiagram3,
  BsCupHot,
  BsTv,
  BsDroplet,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
} from 'react-icons/bs';
import { Formik, Form, Field } from 'formik';
import { Button } from '@components';
import { locations } from '@utils/constants/campersLocation';
import { updateLocation, updateFilters } from '@redux/filtersSlice';
import { changeCurrentPage } from '@redux/campersSlice';
import { fetchCampers } from '@redux/campersOperations';

import css from './CampersFilter.module.css';

const initialValues = {
  location: '',
  form: null,
  AC: false,
  TV: false,
  bathroom: false,
  kitchen: false,
  transmission: false,
};

export default function CampersFilter() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { location, ...filters } = values;
    dispatch(updateLocation(location));
    dispatch(updateFilters(filters));
    dispatch(changeCurrentPage(1));
    dispatch(fetchCampers(values));

    actions.resetForm();
  };

  return (
    <aside className={css.filters}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <fieldset className={css.group}>
              <legend className={css.caption}>Location</legend>
              <label className={css.wrapper}>
                <BsMap className={css.fieldIcon} size={20} />
                <Field
                  className={css.field}
                  list="campersLocation"
                  name="location"
                  placeholder="Kyiv, Ukraine"
                  value={values.location}
                  onChange={evt => {
                    const normalizedValue = evt.target.value
                      .toLowerCase()
                      .split(',')
                      .slice(0, 1)
                      .join('');

                    setFieldValue('location', normalizedValue);
                  }}
                />
                <datalist id="campersLocation">
                  {locations.map((location, idx) => (
                    <option
                      value={`${
                        location.slice(0, 1).toUpperCase() + location.slice(1)
                      }, Ukraine`}
                      key={idx}
                    ></option>
                  ))}
                </datalist>
              </label>
            </fieldset>

            <div className={css.options}>
              <h2 className={css.title}>Filters</h2>
              <fieldset className={css.group}>
                <legend className={css.caption}>Vehicle equipment</legend>
                <label className={css.option}>
                  <Field className="visuallyHidden" type="checkbox" name="AC" />
                  <BsWind size={32} />
                  <span className={css.optionText}>AC</span>
                </label>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="checkbox"
                    name="transmission"
                  />
                  <BsDiagram3 size={32} />
                  <span className={css.optionText}>Automatic</span>
                </label>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="checkbox"
                    name="kitchen"
                  />
                  <BsCupHot size={32} />
                  <span className={css.optionText}>Kitchen</span>
                </label>
                <label className={css.option}>
                  <Field className="visuallyHidden" type="checkbox" name="TV" />
                  <BsTv size={32} />
                  <span className={css.optionText}>TV</span>
                </label>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="checkbox"
                    name="bathroom"
                  />
                  <BsDroplet size={32} />
                  <span className={css.optionText}>Bathroom</span>
                </label>
              </fieldset>

              <fieldset className={css.group}>
                <legend className={css.caption}>Vehicle type</legend>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="radio"
                    name="form"
                    value="van"
                  />
                  <BsGrid1X2 size={32} />
                  <span className={css.optionText}>Van</span>
                </label>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="radio"
                    name="form"
                    value="fullyIntegrated"
                  />
                  <BsGrid size={32} />
                  <span className={css.optionText}>Fully Integrated</span>
                </label>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="radio"
                    name="form"
                    value="alcove"
                  />
                  <BsGrid3X3Gap size={32} />
                  <span className={css.optionText}>Alcove</span>
                </label>
              </fieldset>
            </div>

            <Button type="submit" filled>
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </aside>
  );
}
