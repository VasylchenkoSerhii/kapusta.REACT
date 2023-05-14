import styled from 'styled-components';

export const Wripper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const UserIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: ${p => p.theme.radii.round};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: #f5f6fa;
`;

export const UserName = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 16px;
    font-weight: ${p => p.theme.fontWeights.normal};

    ::after {
      content: '';
      display: inline-block;
      margin-left: 20px;
      height: 36px;
      width: 0px;
      border: 1px solid #e0e5eb;
    }
  }
`;

export const Exit = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin-left: 20px;
    border: none;
    text-decoration-line: underline;
    letter-spacing: 0.04em;
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.heading};
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding: 0px;
  fill: #cbccd0;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
