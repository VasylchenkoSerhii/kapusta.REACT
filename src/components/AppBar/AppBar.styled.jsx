import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  padding: 0px 20px;

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0px 16px;
  }
`;
