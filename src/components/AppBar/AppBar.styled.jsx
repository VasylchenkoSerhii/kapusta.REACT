import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const LogoIcon = styled.svg`
  margin-top: 13px;
  margin-bottom: 12px;
`;

export const LogoButton = styled(Link)`
  display: flex;
  align-items: center;
  width: 90px;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  cursor: pointer;
`;

export const Header = styled.header`
  background-color: ${p => p.theme.colors.white};
`;
