// store.js
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../redux/currencySlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
