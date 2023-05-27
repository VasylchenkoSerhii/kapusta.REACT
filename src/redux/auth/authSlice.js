import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './auth-operations';

export const initialState = {
  user: {
    email: '',
    token: null,
  },
  isLoading: false,
  isLogin: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
        state.isLogin = false;
        state.message = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLogin = false;
        state.message = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
