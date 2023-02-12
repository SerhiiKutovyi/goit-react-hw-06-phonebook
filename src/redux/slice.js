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

    deleteAction: (state, { payload }) => {
      state.users = state.contacts.filter(data => data.id !== payload);
    },
  },
});

export const { addAction, deleteAction } = userSlice.actions;
export const userReducer = userSlice.reducer;
