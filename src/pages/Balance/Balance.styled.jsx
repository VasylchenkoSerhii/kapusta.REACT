import styled from 'styled-components';
import bg from '../../images/cabagge/bg-main-mob.png';
import bgTablet from '../../images/cabagge/bg-tablet-home.png';
import bgDesc from '../../images/cabagge/bg-desc-home.png';
import MessageBg from '../../images/message-bg.png';
import { ImCalendar } from 'react-icons/im';

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

export const ButtonTo = styled.button`
  display: flex;
  width: 118px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  margin-left: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1,2;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Arrow = styled.svg`
  margin-right: 4px;
`
export const BlockHeader = styled.div`
@media screen and (min-width: 768px) {
  display: flex;
  flex-direction: row-reverse;
}

`
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
`
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
`

export const Title = styled.h2`
  padding-top: 8px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
`

export const Reports = styled.svg`
  margin-left: 15px;
`
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
`
export const FormBalance = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
`

export const InputBalance = styled.input`
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
`
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
    color:${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    width: 125px;
    height: 44px;
    padding: 12px 6px 12px 6px;
    border-radius: 16px;
    margin-left: 15px;
  }
`
export const Tooltip = styled.div`
  position: absolute;
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
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
`
export const ImageBg = styled.img`


  box-sizing: cover;
`
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
  line-height: 1,42;
  color: ${p => p.theme.colors.white};
`
export const TextBg = styled.h3`
  /* padding-top: 20px; */
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1,34;
  color: ${p => p.theme.colors.white};
`
// export const BlockButton = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-end;
// `
export const ButtonExp = styled.button`
  width: 50%;
  height: 53px;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1,17;
  text-transform: uppercase;
  border: none;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};
  &:active {
    background-color: ${p => p.theme.colors.accent};
    color:${p => p.theme.colors.white};
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 144px;
    left: 32px;
    width: 138px;
    height: 40px;
    border-radius: 20px 20px 0px 0px;
    background-color: ${p => p.theme.colors.income};
    &:active {
    background-color: ${p => p.theme.colors.expenses};
    color:${p => p.theme.colors.accent};
    }
  }
  @media screen and (min-width: 1200px) {
    top: 92px;
    left: 91px;
  }
`
export const ButtonInc = styled.button`
  width: 50%;
  height: 53px;
  position: fixed;
  bottom: 0;
  right: 0;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1,17;
  text-transform: uppercase;
  border: none;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};
  &:active {
    background-color: ${p => p.theme.colors.accent};
    color:${p => p.theme.colors.white};
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 144px;
    left: 170px;
    width: 138px;
    height: 40px;
    border-radius: 20px 20px 0px 0px;
    background-color: ${p => p.theme.colors.income};
    &:active {
    background-color: ${p => p.theme.colors.expenses};
    color:${p => p.theme.colors.accent};
    }
  }
  @media screen and (min-width: 1200px) {
    top: 92px;
    left: 229px;
  }
`
export const BlockExpInc = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 704px;
    height: 616px;
    margin-top: 100px;
    margin-bottom: 40px;
    border-radius: 0px 30px 30px 30px ;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
  @media screen and (min-width: 1200px) {
    /* position: absolute; */
    width: 1098px;
    height: 579px;
    margin-top: 48px;
    border-radius: 0px 30px 30px 30px ;
    background-color: ${p => p.theme.colors.white};
  }
`
export const BalockCalendar = styled.div`
  display: flex;
  margin-top: 26px;
  margin-left: 40px;
  /* margin: 0; */
  padding: 0;
  width: 120px;
`
export const ButtonCalendar = styled.div`
  display: flex;
  align-items: center;
  margin-right: 44px;
  width: 120px;
  height: 40px;
`
export const CalendarImage = styled(ImCalendar)`
  width: 20px;
  height: 20px;
  margin-right: 9px;
`
export const CalendarDate = styled.span`
  margin-right: 0;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.big};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1,17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
`
export const ViewCalendar = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 60px;
`
