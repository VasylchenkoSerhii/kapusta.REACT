import Categories from 'components/Categories/Categories';
import Sprite from '../../images/currentPeriod.svg';
import { Link } from 'react-router-dom';
import {
  Main,
  Period,
  PeriodBtn,
  PeriodContainer,
  Subheading,
} from './Reports.styled';

export default function Reports() {
  return (
    <Main>
      <section>
        <Link></Link>
        <div>
          <Subheading>Current period:</Subheading>
          <PeriodContainer>
            <PeriodBtn type='button'>
              <svg width={6} height={15}>
                <use href={`${Sprite}#icon-arrow-left`}></use>
              </svg>
            </PeriodBtn>
            <Period>November 2019</Period>
            <PeriodBtn type='button'>
              <svg width={6} height={15}>
                <use href={`${Sprite}#icon-arrow-right`}></use>
              </svg>
            </PeriodBtn>
          </PeriodContainer>
        </div>
        <div>
          <Subheading>Balance:</Subheading>
          <span>55 000.00 UAH</span>
        </div>
        <ul>
          <li>
            <span>Expenses:</span>
            <span>- 18 000.00 UAH.</span>
          </li>
          <li>
            <span>Income:</span>
            <span>+ 45 000.00 UAH.</span>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <button type='button'></button>
          <span>Expenses</span>
          <button type='button'></button>
        </div>
        <Categories />
      </section>
    </Main>
  );
}
