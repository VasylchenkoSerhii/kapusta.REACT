import { ImCalendar } from "react-icons/im";
import styled from "styled-components";

export const BalockCalendar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-top: 26px;
    margin-left: 40px;
    margin-right: 0px;
    /* margin: 0; */
    padding: 0;
    width: 100px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 32px;
  }
`
export const ButtonCalendar = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
`;
export const CalendarImage = styled(ImCalendar)`
  width: 20px;
  height: 20px;
  margin-right: 9px;
`;
export const CalendarDate = styled.span`
  margin-right: 0;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.big};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1, 17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
`;
export const ViewCalendar = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 60px;
  z-index: 999;
`;
