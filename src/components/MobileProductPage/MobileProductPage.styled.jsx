import styled from 'styled-components';
import bg from '../../images/cabagge/bg-main-mob.png';
import { FaCalculator } from 'react-icons/fa';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { ErrorMessage, Field, Form } from 'formik';

export const Hero = styled.div`
  position: relative;
  height: 286px;
  padding-top: 16px;
  /* padding-bottom: 137px; */
  /* overflow: hidden; */
  background-image: url(${bg});
  background-size: 100% 286px;
  background-repeat: no-repeat;
  background-color: white;

`;

export const ButtonTo = styled.button`
  display: flex;
  width: 25px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  margin-left: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1, 2;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
`;
export const Arrow = styled.svg`
  margin-right: 4px;
`;

export const BlockProduct = styled.div`

`
export const ProductForm = styled.div`

`
export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

`
export const ProductInput = styled(Field)`
  border: none;
  height: 44px;
  width: 280px;
  outline: none;
  padding: 2px 20px 2px 20px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  letter-spacing: 0.02em;
  background-color: ${p => p.theme.colors.background};
  border: 2px solid ${p => p.theme.colors.white};
  border-radius: 16px 16px 0px 0px;
`
export const CategoryContainer = styled.div`
  position: relative;
  width: 280px;
`
export const CategoryInput = styled(Field)`
  width: 280px;
  height: 44px;
  padding: 2px 20px 2px 20px;
  outline: none;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  letter-spacing: 0.02em;
  background-color: ${p => p.theme.colors.background};
  border: 2px solid ${p => p.theme.colors.white};
  border-radius: 0px 0px 16px 0px;
  margin-bottom: 32px;
`
export const CategoryImageDown = styled(BsChevronDown)`
  position: absolute;
  left: 246px;
  top: 16px;
  width: 15px;
  height: 15px;
`
export const CategoryImageUp = styled(BsChevronUp)`
  position: absolute;
  left: 246px;
  top: 16px;
  width: 15px;
  height: 15px;
`
export const CategoryList = styled.ul`
  position: absolute;
  width: 266px;
  top: 43px;
  list-style: none;
  background: #FFFFFF;
  border: none;
  z-index: 999;
  box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);
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
 justify-content: center;
 margin-left: auto;
 margin-right: auto;
 width: 183px;
 height: 44px;
 background-color: ${p => p.theme.colors.background};
 border: 2px solid ${p => p.theme.colors.white};
 border-radius: 22px 22px 22px 22px;
`
export const CalculateInput = styled(Field)`
  text-align: center;
  width: 109px;
  height: 40px;
  outline: none;
  margin-left: 16px;
  margin-right: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  letter-spacing: 0.02em;
  background-color: ${p => p.theme.colors.background};
  border: none;
  border-right: 2px solid ${p => p.theme.colors.white};

`;
export const ViewCalculator = styled.div`
  position: absolute;
  width: 200px;
  top: 220px;
  left: 30px;
`;

export const CalculatorImage = styled(FaCalculator)`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;
export const Error = styled(ErrorMessage)`
  position: absolute;
  left: 42px;
  padding-top: 5px;
  font-size: ${p => p.theme.fontSizes.xs};
  color: red;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
`
export const InputBtn = styled.button`
  width: 130px;
  height: 44px;
  padding: 12px 34px 12px 34px;
  margin-right: 20px;
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
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
  @media screen and (min-width: 1200px) {
    width: 136px;
  }
`
export const ClearBtn = styled.button`
  width: 130px;
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
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  }
`
