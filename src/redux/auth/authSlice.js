import { createSlice } from '@reduxjs/toolkit';
import {
  logOut,
  login,
  refreshUser,
  register,
  setBalance,
} from './auth-operations';

export const initialState = {
  user: {
    email: '',
    balance: 'null',
  },
  isLoginApiDone: false,
  token: null,
  accessToken: null,
  isRefreshing: false,
  isLoading: false,
  isLoggedIn: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeBalance(state, { payload }) {
      state.user.balance = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.message = '';
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.email = payload.user;
        state.isLoading = false;
        state.message = 'Verify your email, please.';
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.message = payload;
      })
      .addCase(login.pending, state => {
        state.isLogin = false;
        state.isLoading = true;
        state.message = '';
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user.email = { email: payload.email, balance: payload.balance };
        state.accessToken = payload.token;
        state.token = payload.token;
        state.isLoginApiDone = true;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoginApiDone = true;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.message = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { email: '', balance: null };
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.message = '';
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoginApiDone = true;
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoginApiDone = true;
        state.isRefreshing = false;
      })
      .addCase(
        setBalance.fulfilled,
        (state, { payload: { newUserBalance } }) => {
          state.user.balance = newUserBalance;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
export const { changeBalance } = authSlice.actions;
