import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCampers,
  fetchCamperById,
  loadNextPageAndFetchCampers,
} from '@redux/campersOperations';

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
    page: 1,
    isEndOfCollection: false,
    loading: false,
    error: null,
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
      // if (action.payload === 1) {
      //   state.page = 1;
      //   state.items = [];
      //   state.isLastPage = false;
      // }
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
      .addCase(fetchCamperById.rejected, handleRejected)
      .addCase(loadNextPageAndFetchCampers.pending, handlePending)
      .addCase(loadNextPageAndFetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.page = action.payload.page;
        state.isEndOfCollection = action.payload.isEndOfCollection;
        state.items = state.items.concat(action.payload.items);
      })
      .addCase(loadNextPageAndFetchCampers.rejected, handleRejected);
  },
});

export const { changePage, clearCamperDetails } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
