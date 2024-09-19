import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL, PER_PAGE } from '@utils/constants/apiConfig';
import { filterFalseValues } from '@utils/helpers/filterFalseValues';

axios.defaults.baseURL = BASE_URL;

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      const {
        campers: { page, isEndOfCollection },
      } = thunkAPI.getState();

      const response = await axios.get(
        `/campers?page=${page}&limit=${PER_PAGE}`
      );

      if (response.status !== 200) {
        toast.error('Sorry, something went wrong on server.');
        return {
          items: [],
          page,
          isEndOfCollection,
        };
      }
      if (!response.data.total) {
        toast.error(
          'Sorry, there are no campers matching your search query.\n Please try again.'
        );

        return {
          items: response.data.items,
          page,
          isEndOfCollection,
        };
      }

      toast.success(`Hooray ✨ We found ${response.data.total} campers.`);
      return {
        items: response.data.items,
        page,
        isEndOfCollection,
      };
    } catch (error) {
      toast.error('Sorry, something went wrong on server.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadNextPageAndFetchCampers = createAsyncThunk(
  'campers/loadNextCampers',
  async (filters, thunkAPI) => {
    const {
      campers: { page, items },
    } = thunkAPI.getState();

    const nextPage = page + 1;

    try {
      const filteredParams = filterFalseValues(filters);
      const params = new URLSearchParams(filteredParams);
      const response = await axios.get(
        `/campers?page=${nextPage}&limit=${PER_PAGE}&${params}`
      );

      let totalPages = Math.ceil(response?.data?.total / PER_PAGE);
      const isLastPage = nextPage >= totalPages || totalPages === 1;

      if (isLastPage) {
        toast.success('End of collection.');
        return {
          items: response.data.items,
          page: nextPage,
          isEndOfCollection: isLastPage,
        };
      }

      return {
        items: response.data.items,
        page: nextPage,
        isEndOfCollection: false,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
