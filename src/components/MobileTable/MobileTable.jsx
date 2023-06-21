// import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
import Sprite from '../../images/sprite.svg';
import { BlockTransaction, InfoTransaction, TableList } from "./MobileTable.styled";

export const MobileTable = () => {
  // const location = useLocation();
  // const isIncome = location.search.includes('income');
  // const dispatch = useDispatch();


  return (
    <>
      <TableList>
        <li>
          <BlockTransaction>
          <div>
            <p>Undeground</p>
            <InfoTransaction>
              <p>21.11.2019</p>
              <p>Transport</p>
            </InfoTransaction>
          </div>
          <svg width="18" height="18">
            <use href={`${Sprite}#bin`}></use>
          </svg>
          </BlockTransaction>
        </li>
      </TableList>
    </>
  )
}
