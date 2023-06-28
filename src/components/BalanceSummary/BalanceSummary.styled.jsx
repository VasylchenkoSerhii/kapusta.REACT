import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0px 20px;
  font-family: ${p => p.theme.fonts.bodu};

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0px 123px;
  }
`;

export const WrapperForTabletGroup = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
`;

export const WrapperBackLink = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

export const BalanceGroupWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

export const WrapperPeriodAndBalance = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;

    > div:nth-child(1) {
      order: 2;
    }

    & > div:nth-child(2) {
      order: 1;
    }
  }
`;

export const BackLink = styled(Link)`
  margin-bottom: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 15px;
  }
`;

export const BackLinkIcon = styled.svg`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BackLinkText = styled.p`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const WrapperPeriod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 767px) {
    margin-bottom: 0px;
  }
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

  @media screen and (min-width: 767px) {
    margin-bottom: 0px;
    margin-right: 20px;
  }
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
  width: 125px;
  height: 44px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  text-align: center;
  border: 2px solid #000000;
  border-radius: 22px;

  @media screen and (min-width: 768px) {
    margin-right: 102px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 280px;
  }
`;

export const BalanceValye = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: #000000;
`;

export const ExpensesIncomeList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 280px;
  height: 85px;
  padding: 10px 20px 25px;
  list-style: none;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    min-width: 704px;
    height: 50px;
    padding: 15px 0px;
  }
`;

export const ExpensesIncomeItem = styled.li`
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 70px;
    left: 49.5%;
    top: 6px;

    border: 1px solid #e0e5eb;
  }

  @media screen and (min-width: 768px) {
    display: flex;

    &:not(:last-child)::after {
      height: 36px;
    }
  }
`;

export const ExpensesIncome = styled.p`
  margin-bottom: 4px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
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
