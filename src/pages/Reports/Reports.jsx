import { Main } from './Reports.styled';
import Categories from 'components/Categories/Categories';
import BalanceSummary from 'components/BalanceSummary/BalanceSummary';
import ExpenseChar from 'components/ExpenseChar/ExpenseChar';

export default function Reports() {
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
