import { useDispatch } from 'react-redux';
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
import {
  updateLocation,
  updateForm,
  updateEquipment,
} from '@redux/filtersSlice';

import css from './CampersFilter.module.css';

const initialValues = {
  location: '',
  form: null,
  equipment: {
    AC: false,
    TV: false,
    bathroom: false,
    kitchen: false,
    transmission: false,
  },
};

export default function CampersFilter() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const locationNormalized = values.location.split(',').slice(0, 1).join('');
    dispatch(updateLocation(locationNormalized));
    dispatch(updateForm(values.form));
    dispatch(updateEquipment(values.equipment));

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
                  <Field
                    className="visuallyHidden"
                    type="checkbox"
                    name="AC"
                    checked={values.equipment.AC}
                    onChange={evt =>
                      setFieldValue('equipment.AC', evt.target.checked)
                    }
                  />
                  <BsWind size={32} />
                  <span className={css.optionText}>AC</span>
                </label>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="checkbox"
                    name="transmission"
                    checked={values.equipment.transmission}
                    onChange={evt =>
                      setFieldValue(
                        'equipment.transmission',
                        evt.target.checked
                      )
                    }
                  />
                  <BsDiagram3 size={32} />
                  <span className={css.optionText}>Automatic</span>
                </label>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="checkbox"
                    name="kitchen"
                    checked={values.equipment.kitchen}
                    onChange={evt =>
                      setFieldValue('equipment.kitchen', evt.target.checked)
                    }
                  />
                  <BsCupHot size={32} />
                  <span className={css.optionText}>Kitchen</span>
                </label>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="checkbox"
                    name="TV"
                    checked={values.equipment.TV}
                    onChange={evt =>
                      setFieldValue('equipment.TV', evt.target.checked)
                    }
                  />
                  <BsTv size={32} />
                  <span className={css.optionText}>TV</span>
                </label>
                <label className={css.option}>
                  <Field
                    className="visuallyHidden"
                    type="checkbox"
                    name="bathroom"
                    checked={values.equipment.bathroom}
                    onChange={evt =>
                      setFieldValue('equipment.bathroom', evt.target.checked)
                    }
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
