import { Main } from './Reports.styled';
import Categories from 'components/Categories/Categories';
import BalanceSummary from 'components/BalanceSummary/BalanceSummary';
import ExpenseChar from 'components/ExpenseChar/ExpenseChar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentMonthTransactions } from 'redux/report/report-operations';
import {
  getCurrentDate,
  getCurrentMonthTransactions,
} from 'redux/report/report-selectors';

export default function Reports() {
  const currentDate = useSelector(getCurrentDate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentMonthTransactions());
  }, [dispatch, currentDate]);

  const currentTrasactions = useSelector(getCurrentMonthTransactions);
  const {
    expenses: {
      totalSum: expensesTotalSum,
      categories: expensesCategories,
    } = {},
    income: { totalSum: incomeTotalSum, categories: incomeCategories } = {},
  } = currentTrasactions;

  const alcoholExpenses = [
    { description: 'Wine', sum: 25 },
    { description: 'Beer', sum: 15 },
    { description: 'Whiskey', sum: 40 },
    { description: 'Vodka', sum: 30 },
    { description: 'Rum', sum: 20 },
  ];

  return (
    <Main>
      <BalanceSummary
        expensesSum={expensesTotalSum || 0}
        incomeSum={incomeTotalSum || 0}
      />
      <Categories expenses={expensesCategories} income={incomeCategories} />
      <ExpenseChar transactions={alcoholExpenses} />
    </Main>
  );
}
