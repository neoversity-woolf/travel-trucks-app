import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { campersReducer } from './campersSlice';
import { filtersReducer } from './filtersSlice';
import { applicationStorageReducer } from './applicationStorageSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'campersPersistentComponents',
  storage,
  whitelist: ['favorites', 'booking'],
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    persistentComponents: persistReducer(
      persistConfig,
      applicationStorageReducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
