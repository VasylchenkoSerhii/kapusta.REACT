import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { Logout, UserIcon, Wrapper, Exit, UserName } from './UserMenu.styled';
import Sprite from '../../images/cabagge/sprite.svg';
import { getUserName } from 'redux/auth/auth-selector';
import Modal from 'components/Modal/Modal';

export default function UserMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userName = useSelector(getUserName);
  const dispath = useDispatch();

  console.log(userName.email);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const out = () => {
    dispath(logOut());
  };

  return (
    <>
      <Wrapper>
        <UserIcon>{userName.email.charAt(0)}</UserIcon>
        <UserName>User Name</UserName>
        <Exit type='button' onClick={() => toggleModal()}>
          Exit
        </Exit>
        <Logout type='button' onClick={() => toggleModal()}>
          <svg width={16} height={16}>
            <use href={`${Sprite}#icon-logout`}></use>
          </svg>
        </Logout>
      </Wrapper>
      {isModalOpen && (
        <Modal
          onConfirm={out}
          text={'Do you really want to leave?'}
          onClose={toggleModal}
        />
      )}
    </>
  );
}
