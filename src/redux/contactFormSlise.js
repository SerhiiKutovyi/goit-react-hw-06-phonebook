import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

export const contactSlice = createSlice({
  contact: 'book',
  initialState,
  reducers: {},
});
