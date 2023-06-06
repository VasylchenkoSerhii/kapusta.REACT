import styled from 'styled-components';

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
  line-height: 1, 2;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Arrow = styled.svg`
  margin-right: 4px;
`;
