import styled from "styled-components"
import { FaCalculator } from 'react-icons/fa';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { ErrorMessage, Field, Form } from 'formik';

export const ProductForm = styled.div`
   @media screen and (min-width: 1200px) {
    width: 898px;
  }
`
export const MainForm = styled(Form)`
  position: relative;
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;

  }
`
export const ProductContainer = styled.div`
  display: flex;
  width: 480px;
  height: 44px;
  border: 2px solid ${p => p.theme.colors.background};
  border-radius: 16px 16px 16px 0px;
  @media screen and (min-width: 1200px) {
    width: 578px;
  }
`
export const ProductInput = styled(Field)`
  border: none;
  height: 40px;
  width: 160px;
  margin-left: 20px;
  outline: none;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  letter-spacing: 0.02em;
  background-color: ${p => p.theme.colors.white};
  @media screen and (min-width: 1200px) {
    width: 290px;
  }
`
export const CategoryContainer = styled.div`
  position: relative;
  width: 186px;
`
export const CategoryInput = styled(Field)`
  width: 186px;
  height: 40px;
  padding-left: 20px;
  padding-right: 0px;
  border-top: none;
  border-bottom: none;
  outline: none;
  border-left:2px solid ${p => p.theme.colors.background};
  border-right:2px solid ${p => p.theme.colors.background};
  border-radius: 0px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  letter-spacing: 0.02em;
  @media screen and (min-width: 1200px) {
    width: 169px;
  }
`
export const CategoryImageDown = styled(BsChevronDown)`
  position: absolute;
  left: 156px;
  top: 13px;
  width: 15px;
  height: 15px;
  @media screen and (min-width: 1200px) {
    left: 140px;
  }
`
export const CategoryImageUp = styled(BsChevronUp)`
  position: absolute;
  left: 156px;
  top: 13px;
  width: 15px;
  height: 15px;
  @media screen and (min-width: 1200px) {
    left: 140px;
  }
`
export const CategoryList = styled.ul`
  position: absolute;
  width: 185px;
  top: 41px;
  list-style: none;
  background: #FFFFFF;
  border: none;
  z-index: 998;
  box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);
  @media screen and (min-width: 1200px) {
    width: 168px;
  }
`
export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
  height: 32px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1,17;
  letter-spacing: 0.02em;
  color: #C7CCDC;
  &:active {
    background-color: ${p => p.theme.colors.background};
    color: #52555F;
    }
`
export const CalculatorContainer = styled.div`
 display: flex;
 align-items: center;
 @media screen and (min-width: 1200px) {
    padding-right: 12px;
  }
`
export const CalculateInput = styled(Field)`
  margin-left: 20px;
  text-align: center;
  width: 60px;
  height: 40px;
  border: none;
  outline: none;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  letter-spacing: 0.02em;
`;
export const ViewCalculator = styled.div`
  position: absolute;
  z-index: 999;
`;

export const CalculatorImage = styled(FaCalculator)`
  width: 20px;
  height: 20px;
`;
export const Error = styled(ErrorMessage)`
  position: absolute;
  left: 42px;
  padding-top: 5px;
  font-size: ${p => p.theme.fontSizes.xs};
  color: red;

  @media screen and (min-width: 768px) {
    left: 108px;
    padding-top: 10px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
  margin-top: 32px;
  @media screen and (min-width: 1200px) {
    margin-top: 0;
    margin-left: 32px;
  }
`
export const InputBtn = styled.button`
  width: 125px;
  height: 44px;
  padding: 12px 34px 12px 34px;
  margin-right: 15px;
  border-radius: 16px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1,17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: 2px solid ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};
  &:active {
    border: none;
    background-color: ${p => p.theme.colors.accent};
    color:${p => p.theme.colors.white};
  }
  @media screen and (min-width: 1200px) {
    width: 136px;
  }
`
export const ClearBtn = styled.button`
  width: 125px;
  height: 44px;
  padding: 12px 34px 12px 34px;
  border-radius: 16px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1,17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: 2px solid ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};
  &:active {
    border: none;
    background-color: ${p => p.theme.colors.accent};
    color:${p => p.theme.colors.white};
  }
  @media screen and (min-width: 1200px) {
    width: 136px;
  }
`
