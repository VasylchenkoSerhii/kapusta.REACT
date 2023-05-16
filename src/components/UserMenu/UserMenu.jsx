import { Logout, UserIcon, Wripper, Exit, UserName } from './UserMenu.styled';
import Sprite from '../../images/cabagge/sprite.svg';

export default function UserMenu() {
  return (
    <Wripper>
      <UserIcon>U</UserIcon>
      <UserName>User Name</UserName>
      <Exit type='button'>Exit</Exit>
      <Logout type='button'>
        <svg width={16} height={16}>
          <use href={`${Sprite}#icon-logout`}></use>
        </svg>
      </Logout>
    </Wripper>
  );
}
