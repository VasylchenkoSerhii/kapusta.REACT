import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { Logout, UserIcon, Wripper, Exit, UserName } from './UserMenu.styled';
import Sprite from '../../images/cabagge/sprite.svg';
import { getUserName } from 'redux/auth/auth-selector';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const dispath = useDispatch();
  return (
    <Wripper>
      <UserIcon>{userName.charAt(0)}</UserIcon>
      <UserName>User Name</UserName>
      <Exit type='button' onClick={() => dispath(logOut())}>
        Exit
      </Exit>
      <Logout type='button' onClick={() => dispath(logOut())}>
        <svg width={16} height={16}>
          <use href={`${Sprite}#icon-logout`}></use>
        </svg>
      </Logout>
    </Wripper>
  );
}
