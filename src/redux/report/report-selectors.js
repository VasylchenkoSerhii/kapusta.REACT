export const getTotalReportObject = state => state.report.totalReportObject;
export const getSelectedCashflow = state => state.report.selectedCashflow;
export const getSelectedCategory = state => state.report.selectedCategory;
export const getDifference = state => state.report.difference;
export const getTotalIncome = state =>
  state.report.totalReportObject.income.totalSum;
export const getTotalExpenses = state =>
  state.report.totalReportObject.expenses.totalSum;
export const getAllTransactions = state => state.report.allTransactions;
export const getError = state => state.report.error;
export const getCurrentDate = state => state.report.currentDate;
export const getCurrentMonthTransactions = state =>
  state.report.currentMonthTransactions;
