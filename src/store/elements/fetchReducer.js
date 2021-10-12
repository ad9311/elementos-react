import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../../api/fetchAPI';

const FETCH_ELEMENTS = 'periodic_table/FETCH_ELEMENTS/fulfilled';

const initialState = {
  status: 'default',
  elements: [],
};

export const fetchElements = createAsyncThunk('periodic_table/FETCH_ELEMENTS', async () => {
  const elements = await fetchAPI();
  return elements;
});

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ELEMENTS:
      return {
        status: 'ready',
        elements: [...state.elements, ...action.payload],
      };
    default:
      return state;
  }
};

export default fetchReducer;
