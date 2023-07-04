import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Wripper = styled.div`
  position: relative;
  min-width: 250px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  background-color: white;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    width: 320px;
    height: 174px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 350px;
    height: 150px;
    padding-top: 40px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ModalQuestion = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};;
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: 0.28px;
  color: ${p => p.theme.colors.text};

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 215px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1200px) {
    width: 260px;
  }
`;

export const ModalBtn = styled.button`
  min-width: 100px;
  height: 35px;
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

  @media screen and (min-width: 1200px) {
    min-width: 120px;
    height: 40px;
  }
`;
