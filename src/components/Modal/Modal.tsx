import React from "react";
import { ModalStyle } from "./Modal.style";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: Props) => {
  return (
    <ModalStyle>
      <div className='card'>
        <Icon icon='cil:x' onClick={onClose} className='close' />
        {children}
      </div>
    </ModalStyle>
  );
};

export default Modal;
