import { useLocation, useNavigate } from 'react-router-dom';
import Sprite from '../../images/sprite.svg';
import { Arrow, ButtonTo } from './ToTransaction.styled';

export const ToTransaction = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToProductPage = () => {
    navigate(`/mobile-product-page${location.search}`);
  }

  return (
    <ButtonTo onClick={goToProductPage}>
      <Arrow width={18} height={18}>
        <use xlinkHref={`${Sprite}#back-arrow`}></use>
      </Arrow>
      to transaction
    </ButtonTo>
  )
}
