import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlockReports = styled(Link)`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 14px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    margin-top: 18px;
  }
  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
    margin-top: 28px;
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
