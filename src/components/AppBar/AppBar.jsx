import { useSelector } from 'react-redux';
import { Header, HeaderContainer, LogoButton, LogoIcon } from './AppBar.styled';
import Sprite from '../../images/cabagge/sprite.svg';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLogin } from 'redux/auth/auth-selector';

export default function AppBar() {
  const isLogin = useSelector(getIsLogin);
  return (
    <Header>
      <HeaderContainer>
        <LogoButton to='/'>
          <LogoIcon width={90} height={31}>
            <use href={`${Sprite}#icon-logo`}></use>
          </LogoIcon>
        </LogoButton>
        {isLogin && <UserMenu />}
      </HeaderContainer>
    </Header>
  );
}
