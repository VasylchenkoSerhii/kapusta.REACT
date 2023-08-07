import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  fetchCurrentMonthTransactions,
  fetchTransactions,
} from './report-operations';

export const initialState = {
  allTransactions: [],
  currentMonthTransactions: [],
  totalReportObject: null,
  selectedCashflow: 'Income',
  selectedCategory: '',
  currentDate: '',
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
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
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
    [fetchCurrentMonthTransactions.rejected](state, action) {
      console.log('not allowed transaction');
      state.error = action.payload;
    },
    [fetchCurrentMonthTransactions.fulfilled](state, action) {
      state.currentMonthTransactions = action.payload.data;
    },
  },
});

export const { setSelectedCashflow, setSelectedCategory, setCurrentDate } =
  reportSlice.actions;

export const reportReducer = reportSlice.reducer;
