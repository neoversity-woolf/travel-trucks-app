import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from '@redux/campersOperations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  camperDetails: null,
  page: 1,
  isEndOfCollection: false,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    changePage(state, action) {
      if (action.payload === 1) {
        state.items = [];
        state.page = 1;
        state.isEndOfCollection = false;
      }
      state.page = action.payload;
    },
    clearCamperDetails(state) {
      state.camperDetails = null;
    },
    resetState(state) {
      state.items = [];
      state.page = 1;
      state.isEndOfCollection = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...action.payload.items];
        state.page = action.payload.page;
        state.isEndOfCollection = action.payload.isEndOfCollection;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.camperDetails = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const { changePage, clearCamperDetails, resetState } =
  campersSlice.actions;
export const campersReducer = campersSlice.reducer;
