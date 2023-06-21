import styled from "styled-components";

export const ButtonExp = styled.button`
  width: 50%;
  height: 53px;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  text-transform: uppercase;
  border: none;
  color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.black)};
  background-color: ${(props) => (props.active ? props.theme.colors.accent : props.theme.colors.background)};

  &:active,
  .button:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 144px;
    left: 32px;
    width: 138px;
    height: 40px;
    border-radius: 20px 20px 0px 0px;
    color: ${(props) => (props.active ? props.theme.colors.accent : props.theme.colors.black)};
    background-color: ${(props) => (props.active ? props.theme.colors.expenses : props.theme.colors.income)};
    &:active,
    .button:hover {
      background-color: ${p => p.theme.colors.expenses};
      color: ${p => p.theme.colors.accent};
    }
  }
  @media screen and (min-width: 1200px) {
    top: 92px;
    left: 91px;
  }
`;

export const ButtonInc = styled.button`
  width: 50%;
  height: 53px;
  position: fixed;
  bottom: 0;
  right: 0;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  text-transform: uppercase;
  border: none;
  color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.black)};
  background-color: ${(props) => (props.active ? props.theme.colors.accent : props.theme.colors.background)};
  &:active,
  .button:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 144px;
    left: 170px;
    width: 138px;
    height: 40px;
    border-radius: 20px 20px 0px 0px;
    color: ${(props) => (props.active ? props.theme.colors.accent : props.theme.colors.black)};
    background-color: ${(props) => (props.active ? props.theme.colors.expenses : props.theme.colors.income)};
    &:active,
    .button:hover {
      background-color: ${p => p.theme.colors.expenses};
      color: ${p => p.theme.colors.accent};
    }
  }
  @media screen and (min-width: 1200px) {
    top: 92px;
    left: 229px;
  }
`;
