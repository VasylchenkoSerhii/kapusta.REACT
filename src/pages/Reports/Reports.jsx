import { Main } from './Reports.styled';
import Categories from 'components/Categories/Categories';
import BalanceSummary from 'components/BalanceSummary/BalanceSummary';

export default function Reports() {
  return (
    <Main>
      <BalanceSummary />
      <Categories />
    </Main>
  );
}
