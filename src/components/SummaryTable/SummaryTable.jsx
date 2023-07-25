import { useLocation } from "react-router-dom";
import { ContainerInfo, ContainerTable, HeaderTable, HeaderText, TableList } from "./SummaryTable.styled";
import { useSelector } from "react-redux";
import { getAllTransactions } from "redux/report/report-selectors";
import { useMemo } from "react";

const monthMap = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const SummaryTable = () => {
  const data = useSelector(getAllTransactions);
  const location = useLocation();
  const isIncome = location.search.includes('income');

  const tableData = useMemo(() => isIncome ? (data || []).filter(({ income }) => income) : (data || []).filter(({ income }) => !income),[isIncome, data]);

  const summaryData = useMemo(() => {
    return tableData.reduce((acc, { dateTransaction, sum }) => {
      const month = new Date(dateTransaction).getMonth();
      acc[month] = acc[month] ? acc[month] + sum : sum;

      return acc;
    },{})
  },[tableData]);

  return (
    <TableList>
      <HeaderTable>
        <HeaderText>Summary</HeaderText>
      </HeaderTable>
      {Object.keys(summaryData).map((monthIndex, index) => (
      <ContainerTable key={index}>
        <ContainerInfo>{monthMap[monthIndex]}</ContainerInfo>
        <ContainerInfo>{summaryData[monthIndex]}</ContainerInfo>
      </ContainerTable>
      ))}
    </TableList>
  )
}
