import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  fetchTransactions,
} from './report-operations';

export const initialState = {
  allTransactions: [],
  totalReportObject: null,
  selectedCashflow: 'Income',
  selectedCategory: '',
  error: null,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setSelectedCashflow: (state, action) => {
      state.selectedCashflow = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: {
    [fetchTransactions.fulfilled](state, action) {
      state.allTransactions = action.payload.data;
    },
    [addTransaction.fulfilled](state, action) {
      state.error = null;
      if (state.allTransactions) {
        state.allTransactions.push(action.payload.data);
      } else {
        state.allTransactions = [action.payload.data];
      }
    },
    [addTransaction.rejected](state, action) {
      console.log('not allowed transaction');
      state.error = action.payload;
    },
    [deleteTransaction.fulfilled](state, action) {
      state.allTransactions = state.allTransactions.filter(
        t => t._id !== action.payload
      );
    },
  },
});

export const { setSelectedCashflow, setSelectedCategory } = reportSlice.actions;

export const reportReducer = reportSlice.reducer;
