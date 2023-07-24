import styled from "styled-components";
import MessageBg from '../../../images/message-bg.png';
import { Field, Form } from "formik";

export const Container = styled.div`
  display: block;

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
export const FormBalance = styled(Form)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
`;

export const InputBalance = styled(Field)`
  width: 142px;
  height: 44px;
  outline: none;
  text-align: end;
  padding: 12px 16px 12px 19px;
  background-color: transparent;
  border-radius: 22px 0px 0px 22px;
  border: 2px solid ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
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
  border: 2px solid ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  text-transform: uppercase;
  &:hover,&:focus {
    background-color:  #f95f00;
    /* color: ${p => p.theme.colors.white}; */
    border-color:  #f95f00;
  }
  &:disabled {
    background-color: transparent;
    border-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.text};
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
    margin-left: 60px;
  }
  @media screen and (min-width: 1200px) {
    /* margin-left: 450px; */
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
