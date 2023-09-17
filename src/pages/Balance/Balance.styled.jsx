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

export const BlockExpInc = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 704px;
    height: 616px;
    margin-top: 100px;
    margin-bottom: 40px;
    border-radius: 0px 30px 30px 30px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
  @media screen and (min-width: 1200px) {
    /* position: absolute; */
    width: 1098px;
    height: 579px;
    margin-top: 48px;
    border-radius: 0px 30px 30px 30px;
    background-color: ${p => p.theme.colors.white};
  }
`;

export const BlockProduct = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 26px;
    padding-left: 44px;
    padding-right: 44px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
export const ContainerTablet = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 192px;
`;
export const ContainerDesktop = styled.div`
  position: absolute;
  top: 136px;
  left: 0px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
