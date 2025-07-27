import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 1,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 1,
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
