import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, register, setBalance } from './auth-operations';

export const initialState = {
  user: {
    email: '',
    balance: 'null',
  },
  token: null,
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
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.message = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { email: '' };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(setBalance.fulfilled, (state, {payload: {newUserBalance}}) => {
        state.user.balance = newUserBalance;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { changeBalance } = authSlice.actions;
