import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './campersOperations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    openFeatures: true,
    camperDetails: null,
    items: [],
    currentPage: 1,
    currentPageAPI: 1,
    isLastPage: false,
    loading: false,
    error: null,
  },
  reducers: {
    changeOpenFeatures(state, action) {
      state.openFeatures = action.payload;
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
      if (action.payload === 1) {
        state.currentPageAPI = 1;
        state.items = [];
        state.isLastPage = false;
      }
    },
    clearCamperDetails(state) {
      state.camperDetails = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...action.payload.items];
        state.currentPageAPI = action.payload.currentPageAPI;
        state.isLastPage = action.payload.isLastPage;
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

export const { changeCurrentPage, clearCamperDetails, changeOpenFeatures } =
  campersSlice.actions;
export const campersReducer = campersSlice.reducer;
