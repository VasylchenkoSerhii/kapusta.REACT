import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  CloseBtn,
  ModalBtn,
  ModalQuestion,
  Overlay,
  WrapperBtn,
  Wripper,
} from './Modal.styled';
import Sprite from '../../images/cabagge/sprite.svg';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ onConfirm, text, onClose }) {
  useEffect(() => {
    const handleClickByEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleClickByEscape);

    return () => {
      window.removeEventListener('keydown', handleClickByEscape);
    };
  }, [onClose]);
  return createPortal(
    <Overlay>
      <Wripper>
        <CloseBtn onClick={onClose} type='button'>
          <svg width={12} height={12}>
            <use href={`${Sprite}#close`}></use>
          </svg>
        </CloseBtn>
        <ModalQuestion>{text}</ModalQuestion>
        <WrapperBtn>
          <ModalBtn onClick={onConfirm} type='button'>
            Yes
          </ModalBtn>
          <ModalBtn onClick={onClose} type='button'>
            No
          </ModalBtn>
        </WrapperBtn>
      </Wripper>
    </Overlay>,
    modalRoot
  );
}
