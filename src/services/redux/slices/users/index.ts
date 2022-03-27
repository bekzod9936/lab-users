import { IUsers, ISUser, IDataUsers } from 'services/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUsers = {
  page: 1,
  user: {},
  users: [],
  userid: null,
  total_pages: 0,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setUsers: (state, action: PayloadAction<ISUser>) => {
      const { users, total_pages } = action.payload;
      state.users = users;
      state.total_pages = total_pages;
    },
    setUser: (state, action: PayloadAction<IDataUsers>) => {
      state.user = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userid = action.payload;
    },
  },
});

export const { setPage, setUser, setUsers, setUserId } = usersSlice.actions;

export default usersSlice.reducer;
