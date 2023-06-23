import { createSlice } from '@reduxjs/toolkit';
import { deleteTransaction, fetchTransactions } from './report-operations';

export const initialState = {
  allTransaction: [],
  error: null,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTransactions.fulfilled](state, action) {
      state.allTransaction = action.payload.data;
    },
    [deleteTransaction.fulfilled](state, action) {
      state.allTransactions = state.allTransactions.filter(
        t => t._id !== action.payload
      );
    },
  },
});

export const reportReducer = reportSlice.reducer;
