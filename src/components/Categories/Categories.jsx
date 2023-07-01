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

  return (
    <Section>
      <MainWrapper>
        <WrapperExpenses>
          <ExpensesBtn type='button'>
            <svg width={6} height={15}>
              <use href={`${Sprite}#icon-arrow-left`}></use>
            </svg>
          </ExpensesBtn>
          <ExpensesText>Expenses</ExpensesText>
          <ExpensesBtn type='button'>
            <svg width={6} height={15}>
              <use href={`${Sprite}#icon-arrow-right`}></use>
            </svg>
          </ExpensesBtn>
        </WrapperExpenses>
        <CategoriesList>
          {categories.map((el, index) => (
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
