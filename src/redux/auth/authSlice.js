import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

export const initialState = {
  user: {
    email: '',
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
      });
  },
});

export const authReducer = authSlice.reducer;
