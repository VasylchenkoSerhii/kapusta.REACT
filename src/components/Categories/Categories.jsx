import { useEffect, useState, useCallback } from 'react';
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
import { useDispatch } from 'react-redux';
import {
  setSelectedCategory,
  clearSelectedCategory,
} from 'redux/report/reportSlice';

export default function Categories({ expenses, income }) {
  const [activeCategory, setActiveCategory] = useState('expenses');
  const [firstCategorySelected, setFirstCategorySelected] = useState(false);
  const dispatch = useDispatch();

  const handleExpensesClick = () => {
    setActiveCategory('expenses');
    if (!expenses) {
      dispatch(clearSelectedCategory());
    }
  };

  const handleIncomeClick = () => {
    setActiveCategory('income');
    if (!income) {
      dispatch(clearSelectedCategory());
    }
  };

  const handleClick = useCallback(
    category => {
      let selectedCategory;
      if (activeCategory === 'expenses') {
        selectedCategory = expenses.filter(el => el.category === category);
        dispatch(setSelectedCategory(selectedCategory[0].descriptions));
      }
      if (activeCategory === 'income') {
        selectedCategory = income.filter(el => el.category === category);
        dispatch(setSelectedCategory(selectedCategory[0].descriptions));
      }
    },
    [activeCategory, dispatch, expenses, income]
  );

  useEffect(() => {
    setFirstCategorySelected(false);
  }, [activeCategory, expenses, income]);

  useEffect(() => {
    if (!firstCategorySelected) {
      if (activeCategory === 'expenses' && expenses) {
        handleClick(expenses[0].category);
      }
      if (activeCategory === 'income' && income) {
        handleClick(income[0].category);
      }
      setFirstCategorySelected(true);
    }
  }, [activeCategory, expenses, income, firstCategorySelected, handleClick]);

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
                  <CategoriesBtn
                    type='button'
                    onClick={() => handleClick(category)}
                  >
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
                  <CategoriesBtn
                    type='button'
                    onClick={() => handleClick(category)}
                  >
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
