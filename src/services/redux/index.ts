import login from './slices/login';
import users from './slices/users';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { users, login },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
