const { default: styled } = require("styled-components");

export const TableDiv = styled.div`
  overflow: auto;
  overflow-x: hidden;
  width: 624px;
  margin-left: 40px;
  max-height: 400px;
  margin-top: 48px;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1200px) {
    width: 746px;
    margin-top: 60px;
    margin-left: 32px;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 624px;
`;

export const StyledTh = styled.th`
  height: 40px;
  padding-left: 20px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  &:first-child::before,
  &:last-child::after {
    width: 2px;
    height: 11px;
    background: white;
    content: '';
    display: block;
    position: absolute;
    top: 0px;
  }
  &:first-child::before {
  left: -1px;
  }
  &:last-child::after {
  right: -1px;
  }
  &:first-child {
  border-top-left-radius: 15px;
  }
  &:last-child {
  border-top-right-radius: 15px;
  }
  &:nth-child(4) {
  text-align: right;
  }
  &:nth-child(1),
  &:nth-child(2) {
  text-align: left;
}
`;

export const StyledTd = styled.td`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: #52555f;
  height: 40px;
  padding-left: 20px;
  border: 2px solid #f5f6fb;
  border-right: 0;
  border-left: 0;
  border-top: 0;

  &:first-child {
    border-left: 2px solid #f5f6fb;
  }

  &:last-child {
    border-right: 2px solid #f5f6fb;
  }

  &:nth-child(3) {
    text-align: center;
  }

  &:nth-child(4) {
    text-align: right;
  }
`;

export const StyledThead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #f5f6fb;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyledSvg = styled.svg`
  transition: fill 250ms ease-in-out;

  &:hover {
    fill: #e7192e;
  }
`;

export const StyledSumValue = styled.span`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: ${props => (props.isIncome ? '#407946' : '#e7192e')};
`;

export const DeleteDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SumNumber = styled.div`
  white-space: nowrap;
`
export const BtnBin = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
`
