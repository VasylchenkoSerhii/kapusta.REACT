import { useDispatch} from "react-redux";
import { useLocation } from "react-router-dom";
import Sprite from '../../images/sprite.svg';
import { Bin, BlockTransaction, Info, InfoTransaction, Name, TableList, ValueTransaction } from "./MobileTable.styled";
import { useEffect } from "react";
import { deleteTransaction, fetchTransactions } from "redux/report/report-operations";
// import { getAllTransactions } from "redux/report/report-selectors";
import { CalendarComponent } from "components/CalendarComponent/CalendarComponent";
import Modal from "components/Modal/Modal";
import { useState } from "react";

export const MobileTable = () => {
  // const data = useSelector(getAllTransactions);
  const location = useLocation();
  const isIncome = location.search.includes('income');
  const dispatch = useDispatch();
  // const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  // let tableDate = isIncome
  //   ? data.filter(({ income }) => income)
  //   : data.filter(({ income }) => !income);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.removeItem('transactionDate');
  }, []);

  const handleConfirmDelete = () => {
    // Извлекаем данные транзакции из состояния модального окна
    const { id, sum, income } = modalData;

    // Выполняем удаление транзакции
    dispatch(deleteTransaction({ id, sum, income }));

    // Закрываем модальное окно
    closeModal();
  };

  const openModal = (id, sum, income) => {
    setModalData({ id, sum, income });
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  }

  // const onDateChange = date => {
  //   sessionStorage.setItem('transactionDate', date.toString());
  //   setDate(date);
  // };

  return (
    <>
      <CalendarComponent/>
      <TableList>
        {/* {tableDate.map(t => ( */}
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
          <Bin width="18" height="18" onClick={() => openModal()}>
            <use href={`${Sprite}#bin`}></use>
          </Bin>
          {showModal && (
            <Modal
              text="Are you sure ?"
              onConfirm={handleConfirmDelete}
              onClose={closeModal}
            />
          )}
          </BlockTransaction>
        </li>
        {/* ))} */}
      </TableList>
    </>
  )
}
