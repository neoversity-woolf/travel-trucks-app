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
    items: [],
    camperDetails: null,
    currPage: 1,
    currPageAPI: 1,
    loading: false,
    error: null,
  },
  reducers: {
    changeCurrentPage(state, action) {
      state.currPage = action.payload;
      if (action.payload === 1) {
        state.currPageAPI = 1;
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
        console.log(action.payload);

        state.items = [...action.payload.items];
        state.currPageAPI = action.payload.currPageAPI;
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

export const { changeCurrentPage, clearCamperDetails } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
