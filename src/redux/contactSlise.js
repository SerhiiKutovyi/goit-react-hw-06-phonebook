import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

export const userContactSlice = createSlice({
  contact: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = userContactSlice.actions;
export default userContactSlice.reducer;
