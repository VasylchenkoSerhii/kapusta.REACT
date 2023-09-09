import styled from "styled-components";

export const TableList = styled.ul`
  height: calc(100vh - 450px);
  margin-top: 60px;
  overflow: hidden;
  overflow-y: scroll;
`
export const TableItem = styled.li`
  list-style: none;
`
export const BlockTransaction = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  align-items: center;
  border-bottom: 1px solid #f5f6fb;
`
export const InfoTransaction = styled.div`
  display: flex;
`
export const Name = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.17;
  letter-spacing: 0.04em;
  margin-bottom: 3px;

  color: ${p => p.theme.colors.text};
`
export const Info = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: 8px;
  line-height: 1.13;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.text};

  &:not(:last-child) {
    margin-right: 20px;
  }
`
export const ValueTransaction = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.17;
  letter-spacing: 0.04em;
  margin-right: 20px;
  margin-left: auto;

  color:${props => (props.isIncome ? '#407946' : '#e7192e')};

`
export const Bin = styled.svg`
  transition: fill 250ms ease-in-out;
  &:hover {
    fill: #e7192e;
  }
`
