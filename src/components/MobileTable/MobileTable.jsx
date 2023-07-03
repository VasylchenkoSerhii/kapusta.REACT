import { useDispatch} from "react-redux";
import { useLocation } from "react-router-dom";
import Sprite from '../../images/sprite.svg';
import { Bin, BlockTransaction, Info, InfoTransaction, Name, TableList, ValueTransaction } from "./MobileTable.styled";
import { useEffect } from "react";
import { deleteTransaction, fetchTransactions } from "redux/report/report-operations";
// import { getAllTransactions } from "redux/report/report-selectors";
import { CalendarComponent } from "components/CalendarComponent/CalendarComponent";

export const MobileTable = () => {
  // const data = useSelector(getAllTransactions);
  const location = useLocation();
  const isIncome = location.search.includes('income');
  const dispatch = useDispatch();
  // const [date, setDate] = useState(new Date());

  // let tableDate = isIncome
  //   ? data.filter(({ income }) => income)
  //   : data.filter(({ income }) => !income);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.removeItem('transactionDate');
  }, []);

  const handleDelete = (id, sum, income) => {
    dispatch(deleteTransaction({ id, sum, income }));
  };

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
          <Bin width="18" height="18" onClick={() => handleDelete()}>
            <use href={`${Sprite}#bin`}></use>
          </Bin>
          </BlockTransaction>
        </li>
        {/* ))} */}
      </TableList>
    </>
  )
}
