import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 32px;
  padding-bottom: 40px;
  font-family: ${p => p.theme.fonts.bodu};
`;

export const MainWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 348px;
    padding: 20px 0px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);
  }

  @media screen and (min-width: 1200px) {
    width: 1034px;
    padding: 20px 225px;
  }
`;

export const WrapperExpenses = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ExpensesBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ExpensesText = styled.span`
  margin-left: 15px;
  margin-right: 15px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  text-transform: uppercase;
`;

export const CategoriesList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-gap: 40px 20px;
  justify-content: space-evenly;
  list-style: none;
  padding: 0px 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 56px);
  }
`;

export const CategoriesItem = styled.li`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: 0.24px;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    :nth-child(3n)::after {
      content: '';
      display: block;
      width: 87.5%;
      height: 1px;
      background-color: #e0e5eb;
      position: absolute;
      left: 18px;
      right: 0px;
      transform: translateY(20px);
    }

    :nth-last-child(-n + 1)::after {
      content: '';
      display: block;
      width: 87.5%;
      height: 1px;
      background-color: #e0e5eb;
      position: absolute;
      left: 18px;
      right: 0px;
      transform: translateY(20px);
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CategoriesSum = styled.p`
  margin-bottom: 5px;
`;

export const CategoriesBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CategoriesIcon = styled.svg`
  fill: #071f41;

  transition: fill 150ms linear;

  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.accent};
  }
`;

export const BackgroundIcon = styled.div`
  width: 59px;
  height: 46px;
  margin-bottom: 15px;
  border-radius: 20px;
  background: #f5f6fb;

  transition: background-color 150ms linear;

  &:hover,
  &:focus {
    background-color: #ffdac0;
  }
`;

export const CategoriesName = styled.p`
  display: flex;
  justify-content: center;
`;
