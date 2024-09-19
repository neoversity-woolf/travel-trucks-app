import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL, PER_PAGE } from '@utils/constants/apiConfig';
import { filterFalseValues } from '@utils/helpers/filterFalseValues';

axios.defaults.baseURL = BASE_URL;

const handleRequest = async (url, errorMessage) => {
  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(errorMessage);
    }
    return response;
  } catch (error) {
    toast.error(errorMessage);
    throw error;
  }
};

const checkEndOfCollection = (total, page) => {
  const totalPages = Math.ceil(total / PER_PAGE);
  return page >= totalPages || totalPages === 1;
};

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async ({ filters, isNextPage = false }, thunkAPI) => {
    const {
      campers: { page, items },
    } = thunkAPI.getState();

    const currentPage = isNextPage ? page + 1 : page;

    try {
      const filteredParams = filterFalseValues(filters);
      const params = new URLSearchParams(filteredParams);
      const url = `/campers?page=${currentPage}&limit=${PER_PAGE}&${params}`;
      const response = await handleRequest(url, 'Failed to fetch campers.');

      const isEndOfCollection = checkEndOfCollection(
        response.data.total,
        currentPage
      );

      if (!response.data.total) {
        toast.error('No campers matching your search query.');
        return { items: [], page: currentPage, isEndOfCollection };
      }
      if (isEndOfCollection && isNextPage) {
        toast.success('End of collection.');
      }
      if (!isNextPage) {
        toast.success(`Hooray ✨ We found ${response.data.total} campers.`);
      }

      const newItems = isNextPage
        ? [...items, ...response.data.items]
        : response.data.items;

      return {
        items: newItems,
        page: currentPage,
        isEndOfCollection,
      };
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
