import { createSlice } from '@reduxjs/toolkit';

const applicationStorageSlice = createSlice({
  name: 'persistentComponents',
  initialState: {
    favorites: [],
    booking: {},
  },
  reducers: {
    changeBooking(state, action) {
      const { id, date, email } = action.payload;

      state.booking = {
        ...state.booking,
        [id]: { ...state.booking[id], [date]: email },
      };
    },
    switchFavorites(state, action) {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          favorite_i => favorite_i !== action.payload
        );
      } else {
        state.favorites = [...state.favorites, action.payload];
      }
    },
  },
});

export const { changeBooking, switchFavorites } =
  applicationStorageSlice.actions;
export const applicationStorageReducer = applicationStorageSlice.reducer;
