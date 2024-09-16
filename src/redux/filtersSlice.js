import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      location: '',
      type: '',
      equipment: [],
    },
  },
  reducers: {
    changeFilter(state, action) {
      const { filterType, value } = action.payload;
      state.filters[filterType] =
        filterType === 'location' ? value.trim().toLowerCase() : value;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
