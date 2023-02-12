import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addAction: (state, action) => {
      state.contacts.push(action.payload);
    },

    deleteAction: (state, action) => {
      state.contacts = state.contacts.filter(
        data => data.id !== action.payload
      );
    },

    filterActon: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addAction, deleteAction, filterActon } = userSlice.actions;
export const userReducer = userSlice.reducer;
