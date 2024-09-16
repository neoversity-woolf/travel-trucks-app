import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, PER_PAGE } from '@utils/constants/apiConfig';

axios.defaults.baseURL = BASE_URL;

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    const { campers, filters } = thunkAPI.getState();
    const filteredCampers = [...campers.items];
    const allFilters = filters.allFilters;
    let currentPageAPI = campers.currentPageAPI;
    const currentPage = campers.currentPage;
    let isLastPage = false;

    try {
      if (filteredCampers.length < currentPage * PER_PAGE) {
        while (true) {
          const response = await axios.get(
            `/campers?page=${currentPageAPI}&limit=${PER_PAGE}${formatTypeQueryParam(
              allFilters.typeFilter
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              'transmission'
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              'ac'
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              'kitchen'
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              'tv'
            )}${formatEquipmentQueryParam(
              allFilters.equipmentFilter,
              'bathroom'
            )}`
          );

          for (let i = 0; i < response.data.items.length; i++) {
            let matchFilters = true;

            if (
              allFilters.locationFilter !== '' &&
              !response.data.items[i].location
                .toLowerCase()
                .includes(allFilters.locationFilter)
            ) {
              matchFilters = false;
            }

            if (matchFilters) {
              filteredCampers.push(response.data.items[i]);
            }
          }

          currentPageAPI += 1;

          if (response.data.total <= PER_PAGE * (currentPageAPI - 1)) {
            isLastPage = true;
            break;
          }

          if (filteredCampers.length >= PER_PAGE * currentPage) {
            break;
          }
        }
      }

      return {
        items: filteredCampers,
        currentPageAPI,
        isLastPage:
          (isLastPage &&
            filteredCampers.length > PER_PAGE * (currentPage - 1) &&
            filteredCampers.length <= PER_PAGE * currentPage) ||
          filteredCampers.length === 0,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredCampers = createAsyncThunk(
  'campers/fetchFilteredCampers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get();
      return response.data;
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
