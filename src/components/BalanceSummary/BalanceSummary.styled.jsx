import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const WrapperPeriod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PeriodSubheading = styled.p`
  margin-bottom: 5px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const BalanceSubheading = styled.p`
  margin-bottom: 8px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const PeriodContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 142px;
  margin-left: auto;
  margin-right: auto;
`;

export const PeriodBtn = styled.button`
  height: 17px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Period = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.14;
  color: #000000;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 183px;
  height: 44px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  text-align: center;
  border: 2px solid #000000;
  border-radius: 22px;
`;

export const BalanceValye = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: #000000;
`;

export const ExpensesIncomeList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 85px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px 25px;
  list-style: none;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
`;

export const ExpensesIncomeItem = styled.li`
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 70px;
    left: 118px;
    top: -11px;

    border: 1px solid #e0e5eb;
  }
`;

export const ExpensesIncome = styled.p`
  margin-bottom: 4px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Expenses = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: #e53935;
`;

export const Income = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: #407946;
`;
