import { useDispatch, useSelector} from "react-redux";
import { useLocation } from "react-router-dom";
import Sprite from '../../images/sprite.svg';
import { Bin, BlockTransaction, Info, InfoTransaction, Name, TableItem, TableList, ValueTransaction } from "./MobileTable.styled";
import { useEffect } from "react";
import { deleteTransaction, fetchTransactions } from "redux/report/report-operations";
// import { getAllTransactions } from "redux/report/report-selectors";
import { CalendarComponent } from "components/CalendarComponent/CalendarComponent";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import { getAllTransactions } from "redux/report/report-selectors";

export const MobileTable = () => {
  const data = useSelector(getAllTransactions);
  const location = useLocation();
  const isIncome = location.search.includes('income');
  const dispatch = useDispatch();
  const [modalStates, setModalStates] = useState({});
   const [date, setDate] = useState(new Date());

  const tableData = isIncome ? (data || []).filter(({ income }) => income) : (data || []).filter(({ income }) => !income);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.removeItem('transactionDate');
  }, []);

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

  const onDateChange = date => {
    sessionStorage.setItem('transactionDate', date.toString());
    setDate(date);
  };

  return (
    <>
      <CalendarComponent date={date} setDate={onDateChange} />
      <TableList>
        {tableData.map(t => (
        <TableItem key={t._id}>
          <BlockTransaction>
          <div>
            <Name>{t.description}</Name>
            <InfoTransaction>
              <Info>{t.dateTransaction.slice(0, 10)}</Info>
              <Info>{t.category}</Info>
            </InfoTransaction>
          </div>
          <ValueTransaction isIncome={isIncome}>
          {!isIncome ? (<span>- {t.sum} UAH</span>) : (<span>{t.sum} UAH</span>)}
          </ValueTransaction>
          <Bin width="18" height="18" onClick={() => { openModal(t._id) }}>
            <use href={`${Sprite}#bin`}></use>
          </Bin>
          {modalStates[t._id] && (
            <Modal
              text="Are you sure ?"
              onConfirm={() => handleConfirmDelete(t._id, t.sum, t.income)}
              onClose={() => closeModal(t._id)}
            />
          )}
          </BlockTransaction>
        </TableItem>
         ))}
      </TableList>
    </>
  )
}
