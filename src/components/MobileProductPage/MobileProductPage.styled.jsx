import styled from 'styled-components';
import bg from '../../images/cabagge/bg-main-mob.png';
import bgTablet from '../../images/cabagge/bg-tablet-home.png';
import bgDesc from '../../images/cabagge/bg-desc-home.png';

export const Hero = styled.div`
  position: relative;
  height: 286px;
  padding-top: 16px;
  padding-bottom: 137px;
  /* overflow: hidden; */
  background-image: url(${bg});
  background-size: 100% 286px;
  background-repeat: no-repeat;
  background-color: white;

  @media screen and (min-width: 768px) {
    height: 526px;
    background-size: 100% 526px;
    padding-right: 32px;
    padding-left: 32px;
    background-image: url(${bgTablet});
  }

  @media screen and (min-width: 1200px) {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 90px;
    padding-left: 90px;
    background-image: url(${bgDesc});
  }
`;

export const ButtonTo = styled.button`
  display: flex;
  width: 25px;
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
