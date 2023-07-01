import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';

export const MainForm = styled(Form)`
  position: absolute;
  top: 255px;
  width: 280px;
  height: 496px;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 105px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  background: #ffffff;

  @media screen and (max-width: 1199px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    width: 426px;
    height: 552px;
    top: 317px;
    padding: 56px 84px;
  }

  @media screen and (min-width: 1200px) {
    left: 763px;
    top: 173px;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-size: ${p => p.theme.fontSizes.xs};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export const LabelEmail = styled.span`
  display: block;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const LabelPassword = styled.span`
  display: block;
  margin-top: 15px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 12px;
  }
`;

export const Input = styled(Field)`
  display: block;
  width: 240px;
  height: 52px;
  padding: 17px 19px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  color: #a6abb9;
  border: ${p => p.theme.borders.none};
  border-radius: 30px;
  outline: none;
  background-color: ${p => p.theme.colors.secondaryAccent};

  @media screen and (min-width: 768px) {
    width: 259px;
  }
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

export const FormText = styled.p`
  text-align: center;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  min-width: 122px;
  height: 40px;
  padding: 10px 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.15;
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => p.theme.borders.none};
  border-radius: 26px;
  background-color: ${p => p.theme.colors.secondaryAccent};
  cursor: pointer;
  filter: drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2));

  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: #ffffff;
  }
`;

export const GoogleText = styled.span`
  margin-left: 10px;
`;

export const WripperBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const MainBtn = styled.button`
  min-width: 116px;
  height: 44px;
  padding: 12px 14px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.15;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  border: ${p => p.theme.borders.none};
  border-radius: 16px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondaryAccent};
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;

  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    min-width: 122px;
  }
`;
