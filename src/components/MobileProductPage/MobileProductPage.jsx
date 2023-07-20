import { Arrow, ButtonContainer, ButtonTo, CalculateInput, CalculatorContainer, CalculatorImage, CategoryContainer, CategoryImageDown, CategoryImageUp, CategoryInput, CategoryItem, CategoryList, ClearBtn, Error, Hero, InputBtn, MainForm, ProductContainer, ProductForm, ProductInput, ViewCalculator } from "./MobileProductPage.styled"
import Sprite from '../../images/sprite.svg';
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { Calculator } from "react-mac-calculator";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "redux/report/report-operations";

export const MobileProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [numberValue, setNumberValue] = useState('');
  const dispatch = useDispatch();
  const [isRotated, setIsRotated] = useState(false);
  const formikRef = useRef();
  const location = useLocation();
  const isIncome = location.search.includes('income');

  const navigate = useNavigate();

  const prevPage = () => {
    navigate(-1);
  }

  const initialValues = {
    product: '',
    category: '',
    number: '',
  };

  const categories = isIncome ? ['Salary', 'Income', 'Other'] : ['Transport', 'Products', 'Health','Alcohol','Entertainment','Housing','Technique','Communal, communication','Sports, hobbies','Education','Other'];

  const handleSubmit = async (values, { resetForm }) => {
    if (values) {
      await dispatch(
        addTransaction({
          dateTransaction:
            sessionStorage.getItem('transactionDate') || new Date(),
          income: isIncome,
          sum: values.number,
          category: values.category,
          description: values.product,
        })
      );
      console.log(values.product);
      console.log(values.category); // Обработка отправки формы
      console.log(values.number);
      resetForm();
    }
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
      <Hero>
        <ButtonTo onClick={prevPage}>
          <Arrow width={18} height={18}>
            <use xlinkHref={`${Sprite}#back-arrow`}></use>
          </Arrow>
        </ButtonTo>
      <ProductForm>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                innerRef={formikRef}
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
      </Hero>
    </>
  )
}
