import { useDispatch} from "react-redux";
import { BtnBin, DeleteDiv, StyledButton, StyledSumValue, StyledSvg, StyledTable, StyledTd, StyledTh, StyledThead, SumNumber, TableDiv } from "./TabletTable.styled";
// import { getAllTransactions } from "redux/report/report-selectors";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sprite from '../../images/sprite.svg';
import { deleteTransaction, fetchTransactions } from "redux/report/report-operations";

export const TabletTable = () => {
  // const data = useSelector(getAllTransactions);
  const location = useLocation();
  const isIncome = location.search.includes('income');
  const dispatch = useDispatch();

  // const tableData = isIncome
  //   ? data.filter(({ income }) => income)
  //   : data.filter(({ income }) => !income);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleDelete = (id, sum, income) => {
    dispatch(deleteTransaction({ id, sum, income }));
  };

  return (
    <TableDiv>
      <StyledTable cellSpacing="0">
        <StyledThead>
          <tr>
            <StyledTh>Date</StyledTh>
            <StyledTh>Description</StyledTh>
            <StyledTh>Category</StyledTh>
            <StyledTh>Sum</StyledTh>
            <StyledTh></StyledTh>
          </tr>
        </StyledThead>
        <tbody>
          {/* {tableData.map(t => ( */}
            <tr>
              <StyledTd>21.11.2019</StyledTd>
              <StyledTd>Bananas</StyledTd>
              <StyledTd>Products</StyledTd>
              <StyledTd>
                <DeleteDiv>
                  <SumNumber>
                  <StyledSumValue isIncome={isIncome}>
                    {!isIncome ? '- 300 UAH' : '300 UAH'}
                  </StyledSumValue>
                  </SumNumber>
                </DeleteDiv>
              </StyledTd>
              <StyledTd>
                <BtnBin>
                <StyledButton onClick={() => handleDelete()}>
                    <StyledSvg width="18" height="18">
                      <use href={`${Sprite}#bin`}></use>
                    </StyledSvg>
                  </StyledButton>
                </BtnBin>
              </StyledTd>
            </tr>
          {/* ))} */}
        </tbody>
      </StyledTable>
    </TableDiv>
  );
}
