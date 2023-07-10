import axios from 'axios';
const { createAsyncThunk } = require('@reduxjs/toolkit');

axios.defaults.baseURL = 'http://localhost:3000/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/regiser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().auth.token;
    if (persistedToken === null) return rejectWithValue();
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const setBalance = createAsyncThunk(
  'auth/setBalance',
  async (balance, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('users/balance', balance);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
