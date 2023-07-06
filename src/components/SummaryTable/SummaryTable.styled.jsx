import styled from "styled-components";

export const TableList = styled.ul`
  width: 230px;
  /* margin-top: 60px; */
  /* margin-left: 32px; */
  margin-bottom: 30px;
  margin-top: 756px;
  @media screen and (min-width: 1200px) {
    width: 213px;
    margin-left: 75px;
    /* margin-top: 60px; */
    margin-top: 0px;
  }
`

export const HeaderTable = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${p => p.theme.colors.background};
  border-bottom: 2px solid ${p => p.theme.colors.white};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`
export const HeaderText = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight:  ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
`
export const ContainerTable = styled.li`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding-left: 22px;
  padding-right: 22px;
  align-items: center;
  background: ${p => p.theme.colors.background};
  border-bottom: 2px solid ${p => p.theme.colors.white};

  &:last-child {
  border-bottom-right-radius: 15px;
  border-bottom: 0;

}
`
export const ContainerInfo = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
`
