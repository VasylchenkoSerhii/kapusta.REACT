import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setBalance } from 'redux/auth/auth-operations';

axios.defaults.baseURL = 'https://kapusta-es4s.onrender.com';

export const addTransaction = createAsyncThunk(
  'report/addTransaction',
  async (inputData, { rejectWithValue, getState, dispatch }) => {
    const { income, sum } = inputData;
    const balance = +getState().auth.user.balance;

    const updatedBalance = income ? balance + +sum : balance - sum;

    if (updatedBalance < 0) {
      return rejectWithValue("You don't have enough money");
    }

    dispatch(setBalance({ balance: updatedBalance }));

    try {
      const url = inputData.income
        ? '/transactions/income'
        : '/transactions/expenses';
      const res = await axios.post(url, inputData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
