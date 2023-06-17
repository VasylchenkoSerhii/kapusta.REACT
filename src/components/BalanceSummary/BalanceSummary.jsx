import Sprite from '../../images/currentPeriod.svg';
import { Link } from 'react-router-dom';
import {
  BalanceValye,
  BalanceWrapper,
  Period,
  PeriodBtn,
  PeriodContainer,
  BalanceSubheading,
  ExpensesIncomeList,
  ExpensesIncomeItem,
  ExpensesIncome,
  Expenses,
  Income,
  PeriodSubheading,
  Section,
} from './BalanceSummary.styled';

export default function BalanceSummary() {
  return (
    <Section>
      <Link></Link>
      <div>
        <PeriodSubheading>Current period:</PeriodSubheading>
        <PeriodContainer>
          <PeriodBtn type='button'>
            <svg width={6} height={15}>
              <use href={`${Sprite}#icon-arrow-left`}></use>
            </svg>
          </PeriodBtn>
          <Period>November 2019</Period>
          <PeriodBtn type='button'>
            <svg width={6} height={15}>
              <use href={`${Sprite}#icon-arrow-right`}></use>
            </svg>
          </PeriodBtn>
        </PeriodContainer>
      </div>
      <div>
        <BalanceSubheading>Balance:</BalanceSubheading>
        <BalanceWrapper>
          <BalanceValye>55 000.00 UAH</BalanceValye>
        </BalanceWrapper>
      </div>
      <ExpensesIncomeList>
        <ExpensesIncomeItem>
          <ExpensesIncome>Expenses:</ExpensesIncome>
          <Expenses>- 18 000.00 UAH.</Expenses>
        </ExpensesIncomeItem>
        <ExpensesIncomeItem>
          <ExpensesIncome>Income:</ExpensesIncome>
          <Income>+ 45 000.00 UAH.</Income>
        </ExpensesIncomeItem>
      </ExpensesIncomeList>
    </Section>
  );
}
