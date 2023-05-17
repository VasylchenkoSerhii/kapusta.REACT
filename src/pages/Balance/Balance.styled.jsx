import styled from 'styled-components';
import bg from '../../images/cabagge/bg-main-mob.png';
import bgTablet from '../../images/cabagge/bg-tablet-home.png';
import bgDesc from '../../images/cabagge/bg-desc-home.png';

export const Section = styled.section`
  /* position: absolute; */
`;

export const Hero = styled.div`
  position: relative;
  height: 286px;
  /* padding-top: 86px; */
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

export const ButtonTo = styled.button`
  display: flex;
  width: 118px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  margin-top: 16px;
  margin-left: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1,2;
  align-items: center;
  /* text-align: center; */
  text-transform: uppercase;
  color: #000000;
`
export const Arrow = styled.svg`
  margin-right: 4px;
`
