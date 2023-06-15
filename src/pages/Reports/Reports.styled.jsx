import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 16px;
`;

export const Subheading = styled.p`
  margin-bottom: 5px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const PeriodContainer = styled.div`
  display: flex;
  align-items: center;
  width: 142px;
  margin-left: auto;
  margin-right: auto;
`;

export const PeriodBtn = styled.button`
  height: 17px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Period = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.14;
  color: #000000;
`;
