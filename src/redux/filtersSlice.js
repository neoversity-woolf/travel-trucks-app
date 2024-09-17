import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      location: '',
      form: null,
      transmission: false,
      AC: false,
      TV: false,
      bathroom: false,
      kitchen: false,
    },
  },
  reducers: {
    updateLocation: (state, action) => {
      state.filters.location = action.payload;
    },
    updateFilters: (state, action) => {
      state.filters.equipment = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
});

export const { updateLocation, updateFilters } = filtersSlice.actions;

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
