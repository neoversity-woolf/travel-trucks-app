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
import { Button } from '@components';

import css from './CampersFilter.module.css';

export default function CampersFilter() {
  return (
    <aside className={css.filters}>
      <form className={css.form}>
        <fieldset className={css.group}>
          <legend className={css.caption}>Location</legend>
          <label className={css.wrapper}>
            <BsMap className={css.fieldIcon} size={20} />
            <input
              className={css.field}
              list="campersLocation"
              name="location"
              placeholder="Kyiv, Ukraine"
            />
            <datalist id="campersLocation">
              <option value="kyiv">Kyiv, Ukraine</option>
              <option value="kharkiv">Kharkiv, Ukraine</option>
            </datalist>
          </label>
        </fieldset>

        <div className={css.options}>
          <h2 className={css.title}>Filters</h2>
          <fieldset className={css.group}>
            <legend className={css.caption}>Vehicle equipment</legend>
            <label className={css.option}>
              <input
                className="visuallyHidden"
                type="checkbox"
                name="camperEquipment"
                id=""
                value="ac"
              />
              <BsWind size={32} />
              <span className={css.optionText}>AC</span>
            </label>
            <label className={css.option}>
              <input
                className="visuallyHidden"
                type="checkbox"
                name="camperEquipment"
                id=""
                value="automatic"
              />
              <BsDiagram3 size={32} />
              <span className={css.optionText}>Automatic</span>
            </label>
            <label className={css.option}>
              <input
                className="visuallyHidden"
                type="checkbox"
                name="kitchen"
                id=""
                value="true"
              />
              <BsCupHot size={32} />
              <span className={css.optionText}>Kitchen</span>
            </label>
            <label className={css.option}>
              <input
                className="visuallyHidden"
                type="checkbox"
                name="TV"
                id=""
                value="true"
              />
              <BsTv size={32} />
              <span className={css.optionText}>TV</span>
            </label>
            <label className={css.option}>
              <input
                className="visuallyHidden"
                type="checkbox"
                name="bathroom"
                id=""
                value="true"
              />
              <BsDroplet size={32} />
              <span className={css.optionText}>Bathroom</span>
            </label>
          </fieldset>

          <fieldset className={css.group}>
            <legend className={css.caption}>Vehicle type</legend>
            <label className={css.option}>
              <input
                className="visuallyHidden"
                type="radio"
                name="form"
                value="van"
              />
              <BsGrid1X2 size={32} />
              <span className={css.optionText}>Van</span>
            </label>
            <label className={css.option}>
              <input
                className="visuallyHidden"
                type="radio"
                name="form"
                value="fullyIntegrated"
              />
              <BsGrid size={32} />
              <span className={css.optionText}>Fully Integrated</span>
            </label>
            <label className={css.option}>
              <input
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
      </form>
    </aside>
  );
}
