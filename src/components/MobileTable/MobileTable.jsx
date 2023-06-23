import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Sprite from '../../images/sprite.svg';
import { Bin, BlockTransaction, Info, InfoTransaction, Name, TableList, ValueTransaction } from "./MobileTable.styled";
import { useEffect } from "react";
import { deleteTransaction, fetchTransactions } from "redux/report/report-operations";

export const MobileTable = () => {
  const location = useLocation();
  const isIncome = location.search.includes('income');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleDelete = (id, sum, income) => {
    dispatch(deleteTransaction({ id, sum, income }));
  };

  return (
    <>
      <TableList>
        <li>
          <BlockTransaction>
          <div>
            <Name>Undeground</Name>
            <InfoTransaction>
              <Info>21.11.2019</Info>
              <Info>Transport</Info>
            </InfoTransaction>
          </div>
          <ValueTransaction isIncome={isIncome}>
            {!isIncome ? '- 300 UAH' : '300 UAH'}
          </ValueTransaction>
          <Bin width="18" height="18" onClick={() => handleDelete()}>
            <use href={`${Sprite}#bin`}></use>
          </Bin>
          </BlockTransaction>
        </li>
      </TableList>
    </>
  )
}
