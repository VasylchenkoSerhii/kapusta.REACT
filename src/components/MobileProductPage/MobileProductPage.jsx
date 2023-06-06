import { Arrow, ButtonTo, Hero } from "./MobileProductPage.styled"
import Sprite from '../../images/sprite.svg';
import { useNavigate } from "react-router-dom";

export const MobileProductPage = () => {
  const navigate = useNavigate();

  const prevPage = () => {
    navigate(-1);
  }
  return (
    <>
      <Hero>
        <ButtonTo onClick={prevPage}>
          <Arrow width={18} height={18}>
            <use xlinkHref={`${Sprite}#back-arrow`}></use>
          </Arrow>
        </ButtonTo>
      </Hero>
    </>
  )
}
