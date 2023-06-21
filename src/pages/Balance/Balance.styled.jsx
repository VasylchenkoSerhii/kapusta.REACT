import styled from 'styled-components';
import bg from '../../images/cabagge/bg-main-mob.png';
import bgTablet from '../../images/cabagge/bg-tablet-home.png';
import bgDesc from '../../images/cabagge/bg-desc-home.png';
import MessageBg from '../../images/message-bg.png';
import MaskedInput from 'react-text-mask';
import { ImCalendar } from 'react-icons/im';
import { FaCalculator } from 'react-icons/fa';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { ErrorMessage, Field, Form } from 'formik';

export const Section = styled.section`
  /* position: absolute; */
`;

export const Hero = styled.div`
  position: relative;
  height: 286px;
  padding-top: 16px;
  padding-bottom: 137px;
  /* overflow: hidden; */
  background-image: url(${bg});
  background-size: 100% 286px;
  background-repeat: no-repeat;
  background-color: white;

  @media screen and (min-width: 768px) {
    height: 526px;
    background-size: 100% 526px;
    padding-right: 32px;
    padding-left: 32px;
    background-image: url(${bgTablet});
  }

  @media screen and (min-width: 1200px) {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 90px;
    padding-left: 90px;
    background-image: url(${bgDesc});
  }
`;

// export const ButtonTo = styled.button`
//   display: flex;
//   width: 118px;
//   height: 20px;
//   padding: 0;
//   border: none;
//   background-color: transparent;
//   margin-left: 20px;
//   font-family: ${p => p.theme.fonts.body};
//   font-weight: ${p => p.theme.fontWeights.bold};
//   font-size: ${p => p.theme.fontSizes.xs};
//   line-height: 1, 2;
//   align-items: center;
//   cursor: pointer;
//   text-transform: uppercase;
//   color: ${p => p.theme.colors.black};
//   @media screen and (min-width: 768px) {
//     display: none;
//   }
// `;
// export const Arrow = styled.svg`
//   margin-right: 4px;
// `;
export const BlockHeader = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;
export const BlockReports = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    margin-top: 18px;
  }
  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
    margin-top: 28px;
  }
`;
export const BlockBalance = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 24px;
    justify-content: flex-start;
    margin-right: 251px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 40px;
    margin-right: 298px;
  }
`;

export const Title = styled.h2`
  padding-top: 8px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const Reports = styled.svg`
  margin-left: 15px;
`;
export const TitleBalance = styled.h2`
  margin-bottom: 8px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 21px;
  }
  @media screen and (min-width: 1200px) {
    margin-right: 26px;
  }
`;
export const FormBalance = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
`;

export const InputBalance = styled(MaskedInput)`
  width: 142px;
  height: 44px;
  outline: none;
  text-align: end;
  padding: 12px 16px 12px 19px;
  background-color: transparent;
  border-radius: 22px 0px 0px 22px;
  border: 2px solid ${p => p.theme.colors.white};
  &::placeholder {
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.heading};
  }
  @media screen and (min-width: 768px) {
    width: 125px;
    height: 44px;
    padding: 12px 20px 12px 6px;
    border-radius: 16px;
  }
`;
export const ButtonBalance = styled.button`
  width: 142px;
  height: 44px;
  border-radius: 0px 22px 22px 0px;
  border: 2px solid ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};
  background-color: transparent;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  text-transform: uppercase;
  &:active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    width: 125px;
    height: 44px;
    padding: 12px 6px 12px 6px;
    border-radius: 16px;
    margin-left: 15px;
  }
`;
export const Tooltip = styled.div`
  position: absolute;
  text-align: center;
  align-items: center;
  margin-left: 50px;
  /* margin-right: auto; */
  width: 289px;
  height: 190px;
  z-index: 999;
  background-image: url(${MessageBg});
  background-position: center;
  background-size: 100% 163px 280px;
  background-repeat: no-repeat;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  @media screen and (min-width: 768px) {
    margin-left: 110px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 450px;
  }
`;
export const ImageBg = styled.img`
  box-sizing: cover;
`;
export const TitleMessageBg = styled.h2`
  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  padding: 50px 25px 20px 25px;
  z-index: 2;
  /* padding: 10px; */
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1, 42;
  color: ${p => p.theme.colors.white};
`;
export const TextBg = styled.h3`
  /* padding-top: 20px; */
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 34;
  color: ${p => p.theme.colors.white};
`;
// export const BlockButton = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-end;
// `

export const BlockExpInc = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 704px;
    height: 616px;
    margin-top: 100px;
    margin-bottom: 40px;
    border-radius: 0px 30px 30px 30px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
  @media screen and (min-width: 1200px) {
    /* position: absolute; */
    width: 1098px;
    height: 579px;
    margin-top: 48px;
    border-radius: 0px 30px 30px 30px;
    background-color: ${p => p.theme.colors.white};
  }
`;
export const BalockCalendar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-top: 26px;
    margin-left: 40px;
    margin-right: 0px;
    /* margin: 0; */
    padding: 0;
    width: 100px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 32px;
  }
`
export const ButtonCalendar = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
`;
export const CalendarImage = styled(ImCalendar)`
  width: 20px;
  height: 20px;
  margin-right: 9px;
`;
export const CalendarDate = styled.span`
  margin-right: 0;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.big};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
`;
export const ViewCalendar = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 60px;
  z-index: 999;
`;
export const BlockProduct = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 26px;
    margin-left: 44px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 32px;
  }
`
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
  padding-right: 60px;
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
  margin-right: 205px;
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
