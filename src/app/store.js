// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import openingsReducer from '../features/openings/OpeningSlice'; 


export const store = configureStore({
  reducer: {
    openings: openingsReducer,
  },
}); 

