import React from 'react'
import Sprite from '../../images/sprite.svg';
import { Arrow, BalockCalendar, BlockBalance,BlockExpInc,BlockHeader,BlockProduct,BlockReports, ButtonBalance, ButtonCalendar, ButtonContainer, ButtonExp, ButtonInc, ButtonTo,CalculateInput, CalculatorContainer, CalculatorImage, CalendarDate, CalendarImage, CategoryContainer, CategoryImageDown, CategoryImageUp, CategoryInput, CategoryItem, CategoryList, ClearBtn, Error, FormBalance, Hero, ImageBg, InputBalance, InputBtn, MainForm, ProductContainer, ProductForm, ProductInput, Reports, Section, TextBg, Title, TitleBalance, TitleMessageBg, Tooltip, ViewCalculator, ViewCalendar } from './Balance.styled'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Calculator } from 'react-mac-calculator';
import 'react-calendar/dist/Calendar.css';
import { Formik} from 'formik';

export default function Balance() {
  const [value, setValue] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [numberValue, setNumberValue] = useState('');
  const [isRotated, setIsRotated] = useState(false);

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setTooltipVisible(false); // Скрываем всплывающее сообщение при изменении значения
  };

  const initialValues = {
    product: '',
    category: '',
    number: '',
  };

  const categories = ['Transport', 'Products', 'Health','Alcohol','Entertainment','Housing','Technique','Communal, communication','Sports, hobbies','Education','Other'];

  const handleSubmit = (values) => {
    console.log(values.product);
    console.log(values.category); // Обработка отправки формы
    console.log(values.number);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category, setFieldValue) => {
    setFieldValue('category', category);
    toggleMenu();
  };

  const handleNumberInputChange = (e) => {
    setNumberValue(e.target.value);
  };

  const handleToggleCalculator = () => {
    setShowCalculator(!showCalculator);
  };

  const handleCalculatorResult = (result) => {
    setNumberValue(result);
  };

  const handleIconClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <Section>
      <Hero>
        <ButtonTo>
          <Arrow width={18} height={18}>
            <use xlinkHref={`${Sprite}#back-arrow`}></use>
          </Arrow>
          to transaction
        </ButtonTo>
        <BlockHeader>
        <BlockReports>
          <Title>
            Reports
          </Title>
          <Reports width={24} height={24}>
            <use xlinkHref={`${Sprite}#bar_chart`}></use>
          </Reports>
        </BlockReports>
        <BlockBalance>
          <TitleBalance>
            Balance:
          </TitleBalance>
          <FormBalance>
            <InputBalance
              placeholder="00.00 UAH"
              value={value}
              onChange={handleInputChange}
              onFocus={() => setTooltipVisible(true)}
              onBlur={() => setTooltipVisible(false)}
            />
            <ButtonBalance>Confirm</ButtonBalance>
          </FormBalance>
        </BlockBalance>
        </BlockHeader>
        <Tooltip show={tooltipVisible}>
            <ImageBg />
            <TitleMessageBg>Hello! To get started, enter the<br />current balance of your account!<br /></TitleMessageBg>
            <TextBg>You can't spend money until you have it :)</TextBg>
        </Tooltip>
        {/* <BlockButton> */}
          <ButtonExp>Expenses</ButtonExp>
          <ButtonInc>Income</ButtonInc>
        {/* </BlockButton> */}
        <BlockExpInc>
          <BalockCalendar>
            <ButtonCalendar onClick={handleCalendarToggle}>
              <CalendarImage/>
              <CalendarDate>{selectedDate.toLocaleDateString()}</CalendarDate>
            </ButtonCalendar>
            {showCalendar && (
              <ViewCalendar>
                <Calendar onChange={handleDateChange} value={selectedDate} />
              </ViewCalendar>
            )}
          </BalockCalendar>
          <BlockProduct>
            <ProductForm>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                {({ values, handleSubmit, handleChange, setFieldValue }) => (
                <MainForm onSubmit={handleSubmit}>
                  <ProductContainer>
                  <ProductInput
                    type="text"
                    name='product'
                    value={values.product}
                    onChange={handleChange}
                    placeholder='Product description'
                  />
                  <Error name='product' component='div' />
                  <CategoryContainer>
                  <CategoryInput
                    type="text"
                    name="category"
                    value={values.category}
                    onClick={toggleMenu}
                    placeholder="Product category"
                  />
                  <Error name='category' component='div' />
                  {isRotated ? (
                  <CategoryImageUp onClick={() => { toggleMenu(); handleIconClick()}}/>
                  ) : (
                  <CategoryImageDown onClick={() => { toggleMenu(); handleIconClick()}}/>
                  )}
                  <CategoryList>
                    {isOpen && categories.map((category, index) => (
                      <CategoryItem key={index} onClick={() => handleCategorySelect(category, setFieldValue)}>
                        {category}
                      </CategoryItem>
                    ))}
                  </CategoryList>
                  </CategoryContainer>
                  <CalculatorContainer>
                    <CalculateInput
                      type="text"
                      name="number"
                      placeholder="0,00"
                      value={values.number}
                      onChange={handleChange}
                    />
                    <Error name='number' component='div' />
                    <CalculatorImage onClick={handleToggleCalculator} />
                  </CalculatorContainer>
                  {showCalculator && (
                    <ViewCalculator>
                    <Calculator
                      value={numberValue}
                      onChange={handleNumberInputChange}
                      onResult={handleCalculatorResult}
                    />
                    </ViewCalculator>
                  )}
                  </ProductContainer>
                  <ButtonContainer>
                    <InputBtn type="submit">Input</InputBtn>
                    <ClearBtn type="submit">Clear</ClearBtn>
                  </ButtonContainer>
                  </MainForm>
                )}
              </Formik>
            </ProductForm>
          </BlockProduct>
        </BlockExpInc>
      </Hero>
    </Section>
  )
}

