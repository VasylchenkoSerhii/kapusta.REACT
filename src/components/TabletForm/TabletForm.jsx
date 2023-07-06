import { Formik } from "formik";
import { Calculator } from 'react-mac-calculator';
import { ButtonContainer, CalculateInput, CalculatorContainer, CalculatorImage, CategoryContainer, CategoryImageDown, CategoryImageUp, CategoryInput, CategoryItem, CategoryList, ClearBtn, Error, InputBtn, MainForm, ProductContainer, ProductForm, ProductInput, ViewCalculator } from "./TabletForm.styled";
import { useState } from "react";
import { CalendarComponent } from "components/CalendarComponent/CalendarComponent";

export const TabletForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [numberValue, setNumberValue] = useState('');
  const [isRotated, setIsRotated] = useState(false);

  const initialValues = {
    product: '',
    category: '',
    number: '',
  };

  const categories = ['Transport', 'Products', 'Health','Alcohol','Entertainment','Housing','Technique','Communal, communication','Sports, hobbies','Education','Other'];

  const handleSubmit = (values, { resetForm }) => {
    console.log(values.product);
    console.log(values.category); // Обработка отправки формы
    console.log(values.number);
    resetForm();
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
    <>
    <CalendarComponent/>
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
            <ClearBtn type="reset">Clear</ClearBtn>
          </ButtonContainer>
          </MainForm>
        )}
      </Formik>
    </ProductForm>
    </>
  )
}
