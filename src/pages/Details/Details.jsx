import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { NotFound } from '@pages';
import {
  Overview,
  Picture,
  Description,
  BookingForm,
  Features,
  Reviews,
} from '@components';
import { fetchCamperById } from '@redux/campersOperations';
import {
  selectLoading,
  selectError,
  selectCamperDetails,
} from '@redux/campersSelectors';
import { clearCamperDetails } from '@redux/campersSlice';

import css from './Details.module.css';

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperDetails);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isValidId = id => /^[0-9]+$/.test(id);

  useEffect(() => {
    if (!isValidId(id)) {
      console.log('Invalid ID, cancelling request');
      return;
    }

    dispatch(fetchCamperById(id));

    return () => {
      dispatch(clearCamperDetails());
    };
  }, [dispatch, id]);

  if (!isValidId(id)) {
    return <NotFound path="/catalog" pageName="Catalog" />;
  }

  if (!camper || loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops! We have some error</p>;
  }

  return (
    <main className={css.details}>
      <Overview
        location={camper?.location}
        name={camper?.name}
        price={camper?.price}
        reviews={camper?.reviews}
        rating={camper?.rating}
      />

      <ul className={css.gallery}>
        {camper?.gallery?.length > 0 &&
          camper.gallery.map((item, idx) => (
            <li key={idx}>
              <Picture poster={item} alt={camper.name} />
            </li>
          ))}
      </ul>

      <Description description={camper?.description} />

      <Tabs className={css.wrapper}>
        <TabList>
          <Tab>Features</Tab>
          <Tab>Reviews</Tab>
        </TabList>

        <TabPanel>
          <Features />
        </TabPanel>
        <TabPanel>
          <Reviews />
        </TabPanel>
        <BookingForm camperId={id} />
      </Tabs>
    </main>
  );
}
