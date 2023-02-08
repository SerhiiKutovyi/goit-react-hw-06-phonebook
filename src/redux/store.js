import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, filtersReducer } from './reducer';

export const store = configureStore({
  reducer: { rootReducer },
  filters: { filtersReducer },
});
