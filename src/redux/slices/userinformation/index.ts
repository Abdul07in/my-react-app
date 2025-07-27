import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserInformation {
  name: string;
  email: string;
  role: string;
}

const initialState: UserInformation = {
  name: '',
  email: '',
  role: '',
};

const userInformationSlice = createSlice({
  name: 'userInformation',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<UserInformation>) => {
      return action.payload;
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userInformationSlice.actions;
export default userInformationSlice.reducer;
