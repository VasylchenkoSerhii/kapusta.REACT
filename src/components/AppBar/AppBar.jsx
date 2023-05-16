import { Header, HeaderContainer, LogoButton, LogoIcon } from './AppBar.styled';
import Sprite from '../../images/cabagge/sprite.svg';
import UserMenu from 'components/UserMenu/UserMenu';

export default function AppBar() {
  return (
    <Header>
      <HeaderContainer>
        <LogoButton to='/'>
          <LogoIcon width={90} height={31}>
            <use href={`${Sprite}#icon-logo`}></use>
          </LogoIcon>
        </LogoButton>
        <UserMenu />
      </HeaderContainer>
    </Header>
  );
}
