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
import { campersReducer } from './campers/slice';
import { filtersReducer } from './filters/slice';
import { persistentComponentsReducer } from './persistentComponents/slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'persistentComponents',
  storage,
  whitelist: ['favorites', 'booking'],
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    persistentComponents: persistReducer(
      persistConfig,
      persistentComponentsReducer
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
