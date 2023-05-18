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
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1,2;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
`
export const Arrow = styled.svg`
  margin-right: 4px;
`
export const BlockReports = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 21px;
`
export const BlockBalance = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 32px;
`

export const Title = styled.h2`
  padding-top: 8px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
`

export const Reports = styled.svg`
  margin-left: 15px;
`
export const TitleBalance = styled.h2`
  margin-bottom: 8px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
`
export const FormBalance = styled.form`
  display: flex;
  justify-content: center;
  padding: 0;
  align-items: center;
`

export const InputBalance = styled.input`
  width: 142px;
  height: 44px;
  outline: none;
  text-align: end;
  padding: 12px 16px 12px 19px;
  background-color: transparent;
  border-radius: 22px 0px 0px 22px;
  border: 2px solid ${p => p.theme.colors.white};
  &::placeholder {
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.heading};
  }
`
export const ButtonBalance = styled.button`
  width: 142px;
  height: 44px;
  border-radius: 0px 22px 22px 0px;
  border: 2px solid ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};
  background-color: transparent;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  text-transform: uppercase;
  &:active {
    background-color: ${p => p.theme.colors.accent};
    color:${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.accent};
  }
`
