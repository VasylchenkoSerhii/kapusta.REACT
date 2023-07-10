import Sprite from '../../images/currentPeriod.svg';
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
  WrapperPeriod,
  BackLink,
  BackLinkText,
  WrapperForTabletGroup,
  WrapperPeriodAndBalance,
  WrapperBackLink,
  BackLinkIcon,
  BalanceGroupWrapper,
} from './BalanceSummary.styled';

export default function BalanceSummary() {
  return (
    <Section>
      <WrapperForTabletGroup>
        <WrapperBackLink>
          <BackLink to='/balance'>
            <BackLinkIcon width={16} height={16}>
              <use href={`${Sprite}#icon-arrow-back`}></use>
            </BackLinkIcon>
          </BackLink>
          <BackLinkText>Main page</BackLinkText>
        </WrapperBackLink>
        <WrapperPeriodAndBalance>
          <WrapperPeriod>
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
          </WrapperPeriod>
          <BalanceGroupWrapper>
            <BalanceSubheading>Balance:</BalanceSubheading>
            <BalanceWrapper>
              <BalanceValye>55 000.00 UAH</BalanceValye>
            </BalanceWrapper>
          </BalanceGroupWrapper>
        </WrapperPeriodAndBalance>
      </WrapperForTabletGroup>
      <ExpensesIncomeList>
        <ExpensesIncomeItem>
          <ExpensesIncome>Expenses:</ExpensesIncome>
          <Expenses>- 18 000.00 UAH</Expenses>
        </ExpensesIncomeItem>
        <ExpensesIncomeItem>
          <ExpensesIncome>Income:</ExpensesIncome>
          <Income>+ 45 000.00 UAH</Income>
        </ExpensesIncomeItem>
      </ExpensesIncomeList>
    </Section>
  );
}
