import { IProfile, IDataUsers } from 'services/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IProfile = {
  id: localStorage.getItem('id'),
  token: localStorage.getItem('token'),
  profile: { email: localStorage.getItem('email') },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Partial<IDataUsers>>) => {
      localStorage.setItem('email', action.payload.email!);
      state.profile = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem('token', action.payload);
      state.token = action.payload;
    },
    clearLogIn: (state, action: PayloadAction) => {
      state.token = null;
      state.profile = {};
      state.id = null;
    },
  },
});

export const { setToken, clearLogIn, setProfile } = profileSlice.actions;

export default profileSlice.reducer;
