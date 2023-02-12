import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slice';

const reducer = (state = userReducer) => {
  return state;
};

export const store = configureStore({
  reducer: {
    user: reducer,
  },
});
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
