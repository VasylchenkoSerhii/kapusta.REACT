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

export default function Categories() {
  const categories = [
    'Transport',
    'Products',
    'Health',
    'Alcohol',
    'Entertainment',
    'Housing',
    'Technique',
    'Communal, communication',
    'Sports, hobbies',
    'Education',
    'Other',
  ];

  const income = ['salary', 'other'];

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
            onClick={handleExpensesClick}
            disabled={activeCategory === 'expenses'}
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
            onClick={handleIncomeClick}
            disabled={activeCategory === 'income'}
          >
            <svg width={6} height={15}>
              <use href={`${Sprite}#icon-arrow-right`}></use>
            </svg>
          </ExpensesBtn>
        </WrapperExpenses>
        <CategoriesList>
          {activeCategory === 'expenses'
            ? categories.map((el, index) => (
                <CategoriesItem key={index}>
                  <CategoriesSum>5 000.00</CategoriesSum>
                  <CategoriesBtn type='button'>
                    <BackgroundIcon>
                      <CategoriesIcon width={56} height={56}>
                        <use href={`${Sprite}#${el.toLowerCase()}`}></use>
                      </CategoriesIcon>
                    </BackgroundIcon>
                  </CategoriesBtn>
                  <CategoriesName>{el}</CategoriesName>
                </CategoriesItem>
              ))
            : income.map((el, index) => (
                <CategoriesItem key={index}>
                  <CategoriesSum>5 000.00</CategoriesSum>
                  <CategoriesBtn type='button'>
                    <BackgroundIcon>
                      <CategoriesIcon width={56} height={56}>
                        <use href={`${Sprite}#${el.toLowerCase()}`}></use>
                      </CategoriesIcon>
                    </BackgroundIcon>
                  </CategoriesBtn>
                  <CategoriesName>{el}</CategoriesName>
                </CategoriesItem>
              ))}
        </CategoriesList>
      </MainWrapper>
    </Section>
  );
}
