import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      location: '',
      form: null,
      equipment: {
        transmission: false,
        AC: false,
        TV: false,
        bathroom: false,
        kitchen: false,
      },
    },
  },
  reducers: {
    updateLocation: (state, action) => {
      state.filters.location = action.payload;
    },
    updateForm: (state, action) => {
      state.filters.form = action.payload;
    },
    updateEquipment: (state, action) => {
      state.filters.equipment = {
        ...state.filters.equipment,
        ...action.payload,
      };
    },
  },
});

export const { updateLocation, updateForm, updateEquipment } =
  filtersSlice.actions;

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
