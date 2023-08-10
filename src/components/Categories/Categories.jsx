import { useState } from 'react';
import Sprite from '../../images/currentPeriod.svg';
import {
  BackgroundIcon,
  CategoriesBtn,
  CategoriesIcon,
  CategoriesItem,
  CategoriesList,
  CategoriesName,
  CategoriesSum,
  ExpensesBtn,
  ExpensesText,
  MainWrapper,
  Section,
  WrapperExpenses,
} from './Categories.styled';

export default function Categories({ expenses, income }) {
  const [activeCategory, setActiveCategory] = useState('expenses');

  const handleExpensesClick = () => {
    setActiveCategory('expenses');
  };

  const handleIncomeClick = () => {
    setActiveCategory('income');
  };

  return (
    <Section>
      <MainWrapper>
        <WrapperExpenses>
          <ExpensesBtn
            type='button'
            onClick={
              activeCategory === 'expenses'
                ? handleIncomeClick
                : handleExpensesClick
            }
          >
            <svg width={6} height={15}>
              <use href={`${Sprite}#icon-arrow-left`}></use>
            </svg>
          </ExpensesBtn>
          <ExpensesText>
            {activeCategory === 'expenses' ? 'Expenses' : 'Income'}
          </ExpensesText>
          <ExpensesBtn
            type='button'
            onClick={
              activeCategory === 'expenses'
                ? handleIncomeClick
                : handleExpensesClick
            }
          >
            <svg width={6} height={15}>
              <use href={`${Sprite}#icon-arrow-right`}></use>
            </svg>
          </ExpensesBtn>
        </WrapperExpenses>
        <CategoriesList>
          {activeCategory === 'expenses'
            ? expenses &&
              expenses.map(({ category, sum }, index) => (
                <CategoriesItem key={index}>
                  <CategoriesSum>{sum}</CategoriesSum>
                  <CategoriesBtn type='button'>
                    <BackgroundIcon>
                      <CategoriesIcon width={56} height={56}>
                        <use href={`${Sprite}#${category.toLowerCase()}`}></use>
                      </CategoriesIcon>
                    </BackgroundIcon>
                  </CategoriesBtn>
                  <CategoriesName>{category}</CategoriesName>
                </CategoriesItem>
              ))
            : income &&
              income.map(({ category, sum }, index) => (
                <CategoriesItem key={index}>
                  <CategoriesSum>{sum}</CategoriesSum>
                  <CategoriesBtn type='button'>
                    <BackgroundIcon>
                      <CategoriesIcon width={56} height={56}>
                        <use href={`${Sprite}#${category.toLowerCase()}`}></use>
                      </CategoriesIcon>
                    </BackgroundIcon>
                  </CategoriesBtn>
                  <CategoriesName>{category}</CategoriesName>
                </CategoriesItem>
              ))}
        </CategoriesList>
      </MainWrapper>
    </Section>
  );
}
