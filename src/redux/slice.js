import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addAction: (state, action) => {
      console.log(state);
      console.log(state.contacts);
      state.contacts.push(action.payload);
    },

    deleteAction: (state, { payload }) => {
      state.users = state.users.filter(data => data.id !== payload);
    },
  },
});

export const { addAction, deleteAction } = userSlice.actions;
export const userReducer = userSlice.reducer;
