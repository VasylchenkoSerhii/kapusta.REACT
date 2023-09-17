import { Hero, Main } from './Reports.styled';
import Categories from 'components/Categories/Categories';
import BalanceSummary from 'components/BalanceSummary/BalanceSummary';
import ExpenseChar from 'components/ExpenseChar/ExpenseChar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentMonthTransactions } from 'redux/report/report-operations';
import {
  getCurrentDate,
  getCurrentMonthTransactions,
  getSelectedCategory,
} from 'redux/report/report-selectors';

export default function Reports() {
  const currentDate = useSelector(getCurrentDate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentMonthTransactions());
  }, [dispatch, currentDate]);

  const currentTrasactions = useSelector(getCurrentMonthTransactions);
  const transactions = useSelector(getSelectedCategory);
  const {
    expenses: {
      totalSum: expensesTotalSum,
      categories: expensesCategories,
    } = {},
    income: { totalSum: incomeTotalSum, categories: incomeCategories } = {},
  } = currentTrasactions;

  return (
    <Main>
      <Hero>
        <BalanceSummary
          expensesSum={expensesTotalSum || 0}
          incomeSum={incomeTotalSum || 0}
        />
        {(expensesCategories || incomeCategories) && (
          <Categories expenses={expensesCategories} income={incomeCategories} />
        )}
        {transactions && <ExpenseChar transactions={transactions} />}
      </Hero>
    </Main>
  );
}
