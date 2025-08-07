// src/features/openings/openingsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import openingsData from './OpeningData'; 


const openingsSlice = createSlice({
  name: 'openings',
  initialState: {
    list: openingsData,
    selectedOpening: null,
  },
  reducers: {
    selectOpening: (state, action) => {
      const openingId = parseInt(action.payload);
      state.selectedOpening = state.list.find((opening) => opening.id === openingId);
    },
  },
});

export const { selectOpening } = openingsSlice.actions;

export default openingsSlice.reducer; 

