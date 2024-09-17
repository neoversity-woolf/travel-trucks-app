import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, PER_PAGE } from '@utils/constants/apiConfig';
import { filterFalseValues } from '@utils/helpers/filterFalseValues';

axios.defaults.baseURL = BASE_URL;

export const fetchCampers = createAsyncThunk(
  'campers/fetchFilteredCampers',
  async (filters = {}, thunkAPI) => {
    try {
      const { campers } = thunkAPI.getState();
      const filteredParams = filterFalseValues(filters);
      const params = new URLSearchParams(filteredParams);
      let currPage = campers.currPage;

      const response = await axios.get(
        `${BASE_URL}/campers?page=${currPage}&limit=${PER_PAGE}&${params}`
      );

      let totalPages = Math.ceil(response.data.total / PER_PAGE);
      console.log('totalPages:', totalPages);

      return { items: response.data.items, totalPages };
    } catch (error) {
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
