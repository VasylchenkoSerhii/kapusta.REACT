import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance } from 'redux/auth/auth-selector';
import { format, addMonths, subMonths, parseISO } from 'date-fns';
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
import { setCurrentDate } from 'redux/report/reportSlice';

export default function BalanceSummary() {
  const balance = useSelector(getBalance);
  const dispatch = useDispatch();

  const getCurrentMonthAndYear = () => {
    const currentDate = new Date();
    const currentMonthAndYear = format(currentDate, 'yyyy-MM');
    return currentMonthAndYear;
  };

  const [date, setDate] = useState(getCurrentMonthAndYear);

  useEffect(() => {
    const year = format(parseISO(date), 'yyyy');
    const currentMonth = format(parseISO(date), 'MM');
    dispatch(setCurrentDate({ year, currentMonth }));
  }, [date, dispatch]);

  const goToPreviousMonth = () => {
    setDate(prevDate => format(subMonths(parseISO(prevDate), 1), 'yyyy-MM'));
  };

  const goToNextMonth = () => {
    setDate(prevDate => format(addMonths(parseISO(prevDate), 1), 'yyyy-MM'));
  };

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
              <PeriodBtn type='button' onClick={goToPreviousMonth}>
                <svg width={6} height={15}>
                  <use href={`${Sprite}#icon-arrow-left`}></use>
                </svg>
              </PeriodBtn>
              <Period>{format(parseISO(date), 'MMMM yyyy')}</Period>
              <PeriodBtn type='button' onClick={goToNextMonth}>
                <svg width={6} height={15}>
                  <use href={`${Sprite}#icon-arrow-right`}></use>
                </svg>
              </PeriodBtn>
            </PeriodContainer>
          </WrapperPeriod>
          <BalanceGroupWrapper>
            <BalanceSubheading>Balance:</BalanceSubheading>
            <BalanceWrapper>
              {balance !== null ? (
                <BalanceValye>{balance} UAH</BalanceValye>
              ) : (
                <BalanceValye>0 UAH</BalanceValye>
              )}
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
