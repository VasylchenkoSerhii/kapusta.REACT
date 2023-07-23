import styled from 'styled-components';

export const Refresh = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.text};

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
