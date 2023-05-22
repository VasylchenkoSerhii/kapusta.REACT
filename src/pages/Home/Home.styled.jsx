import styled from 'styled-components';
import bg from '../../images/cabagge/bg-main-mob.png';
import bgTablet from '../../images/cabagge/bg-tablet-home.png';
import bgDesc from '../../images/cabagge/bg-desc-home.png';
// import bgCabagges from '../../images/cabagge/kapusta_main.png';

export const Section = styled.section`
  /* position: absolute; */
`;

export const Hero = styled.div`
  position: relative;
  height: 286px;
  padding-top: 86px;
  padding-bottom: 137px;
  overflow: hidden;
  background-image: url(${bg});
  background-size: 100% 286px;
  background-repeat: no-repeat;
  background-color: white;

  @media screen and (min-width: 768px) {
    height: 526px;
    background-size: 100% 526px;
    background-image: url(${bgTablet});
  }

  @media screen and (min-width: 1200px) {
    padding-top: 0px;
    padding-bottom: 0px;
    background-image: url(${bgDesc});
  }
`;

export const Wripper = styled.div`
  height: 514px;
`;

export const Title = styled.svg`
  width: 183px;
  height: 47px;
  margin-left: 20px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    width: 306px;
    height: 101px;
    margin-left: 171px;
  }

  @media screen and (min-width: 1200px) {
    width: 377px;
    height: 139px;
    margin-top: 308px;
    margin-left: 229px;
  }
`;

export const Subtitle = styled.p`
  margin-left: 31px;
  font-family: ${p => p.theme.fonts.body};
  font-size: 13px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.15;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-left: 215px;
    font-size: 16px;
    line-height: 1.17;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 301px;
  }
`;

export const Cabagge = styled.svg`
  position: absolute;
  top: 104px;
  right: -25px;
  transform: rotate(180deg) scaleX(-1);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CabaggeBody = styled.svg`
  position: absolute;
  left: 35px;
  bottom: -370px;
  transform: scaleX(-1);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
