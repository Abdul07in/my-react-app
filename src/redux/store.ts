import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import userInformationReducer from './slices/userinformation';
import authReducer from './slices/auth';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInformation: userInformationReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
