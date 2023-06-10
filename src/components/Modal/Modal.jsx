import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  CloseBtn,
  ModalBtn,
  ModalQuestion,
  Overlay,
  WrapperBtn,
} from './Modal.styled';

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
      <CloseBtn onClick={onClose} type='button'></CloseBtn>
      <ModalQuestion>{text}</ModalQuestion>
      <WrapperBtn>
        <ModalBtn onClick={onConfirm} type='button'>
          Yes
        </ModalBtn>
        <ModalBtn onClick={onClose} type='button'>
          No
        </ModalBtn>
      </WrapperBtn>
    </Overlay>,
    modalRoot
  );
}
