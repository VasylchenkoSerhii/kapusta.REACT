import { useDispatch, useSelector} from "react-redux";
import { BtnBin, DeleteDiv, StyledButton, StyledSumValue, StyledSvg, StyledTable, StyledTd, StyledTh, StyledThead, SumNumber, TableDiv } from "./TabletTable.styled";
import { getAllTransactions } from "redux/report/report-selectors";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sprite from '../../images/sprite.svg';
import { deleteTransaction, fetchTransactions } from "redux/report/report-operations";
import { useState } from "react";
import Modal from "components/Modal/Modal";

export const TabletTable = () => {
  const data = useSelector(getAllTransactions);
  const location = useLocation();
  const isIncome = location.search.includes('income');
  const dispatch = useDispatch();
  const [modalStates, setModalStates] = useState({});

  const tableData = isIncome ? (data || []).filter(({ income }) => income) : (data || []).filter(({ income }) => !income);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleConfirmDelete = (id, sum, income) => {
    // Выполняем удаление транзакции
    dispatch(deleteTransaction({ id, sum, income }));

    // Закрываем модальное окно
    closeModal(id);
  };

  const openModal = (id) => {
    setModalStates((prev) => ({ ...prev, [id]: true }));
  }

  const closeModal = (id) => {
    setModalStates((prev) => ({ ...prev, [id]: false }));
  }

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
          {tableData.map(t => (
            <tr key={t._id}>
              <StyledTd>{t.dateTransaction.slice(0, 10)}</StyledTd>
              <StyledTd>{t.description}</StyledTd>
              <StyledTd>{t.category}</StyledTd>
              <StyledTd>
                <DeleteDiv>
                  <SumNumber>
                  <StyledSumValue isIncome={isIncome}>
                    {!isIncome ? (<span>- {t.sum} UAH</span>) : (<span>{t.sum} UAH</span>)}
                  </StyledSumValue>
                  </SumNumber>
                </DeleteDiv>
              </StyledTd>
              <StyledTd>
                <BtnBin>
                <StyledButton onClick={() => {openModal(t._id)}}>
                    <StyledSvg width="18" height="18">
                      <use href={`${Sprite}#bin`}></use>
                    </StyledSvg>
                </StyledButton>
                {modalStates[t._id] && (
                  <Modal
                    text="Are you sure ?"
                    onConfirm={() => handleConfirmDelete(t._id, t.sum, t.income)}
                    onClose={() => closeModal(t._id)}
                  />
                )}
                </BtnBin>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableDiv>
  );
}
