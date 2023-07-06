import { ContainerInfo, ContainerTable, HeaderTable, HeaderText, TableList } from "./SummaryTable.styled";

const monthMap = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const monthSum = [
  '10 000',
  '30 000',
  '50 000',
  '40 000',
  '20 000',
  '10 000',
];

export const SummaryTable = () => {
  const summaryData = {};

  monthSum.forEach((sum, index) => {
    const month = monthMap[index];
    summaryData[month] = sum;
  });

  return (
    <TableList>
      <HeaderTable>
        <HeaderText>Summary</HeaderText>
      </HeaderTable>
      {Object.entries(summaryData).map(([month, sum], index) => (
      <ContainerTable key={index}>
        <ContainerInfo>{month}</ContainerInfo>
        <ContainerInfo>{sum}</ContainerInfo>
      </ContainerTable>
      ))}
    </TableList>
  )
}
