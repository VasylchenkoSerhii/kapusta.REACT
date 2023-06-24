import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setBalance } from 'redux/auth/auth-operations';

export const deleteTransaction = createAsyncThunk(
  'report/deleteTransaction',
  async (credentials, { rejectWithValue, getState, dispatch }) => {
    const { id, sum, income } = credentials;
    const balance = +getState().auth.user.balance;
    try {
      await axios.delete(`transactions/${id}`);
      const updateBalance = income ? balance - sum : balance + sum;
      dispatch(setBalance({ balance: updateBalance }));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  'report/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/transactions');
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
