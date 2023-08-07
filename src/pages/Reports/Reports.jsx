import { Main } from './Reports.styled';
import Categories from 'components/Categories/Categories';
import BalanceSummary from 'components/BalanceSummary/BalanceSummary';
import ExpenseChar from 'components/ExpenseChar/ExpenseChar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentMonthTransactions } from 'redux/report/report-operations';

export default function Reports() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentMonthTransactions());
  }, [dispatch]);

  const alcoholExpenses = [
    { description: 'Wine', sum: 25 },
    { description: 'Beer', sum: 15 },
    { description: 'Whiskey', sum: 40 },
    { description: 'Vodka', sum: 30 },
    { description: 'Rum', sum: 20 },
  ];

  return (
    <Main>
      <BalanceSummary />
      <Categories />
      <ExpenseChar transactions={alcoholExpenses} />
    </Main>
  );
}
