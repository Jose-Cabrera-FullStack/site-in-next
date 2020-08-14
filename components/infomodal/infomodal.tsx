import React from 'react';
import { Portal } from '../portal';

import {
  ModalOverlay,
  Modal,
  ModalText,
  NextText,
  NextTextIcon,
} from './infomodal.styles';

import { classes } from '../../helpers';

interface Props {
  text: string;
  onClose: () => void;
  button?: string;
}

export const InfoModal = ({text, onClose, button = 'Continuar'}: Props) => {
  const [out, setOut] = React.useState('')
  const handleClose = () => {
    setOut('out');
    setTimeout(function(){
      onClose();
    }, 300)
  }
  return (
    <Portal selector="body">
     <ModalOverlay className={out}>
      <Modal>
        <ModalText>{text}</ModalText>
        <NextText onClick={() => handleClose()}>
          {button}
          <NextTextIcon width="13" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.854 4.354a.5.5 0 000-.708L9.672.464a.5.5 0 00-.708.708L11.793 4 8.964 6.828a.5.5 0 00.708.708l3.182-3.182zM0 4.5h12.5v-1H0v1z" fill="#1B71BF"/></NextTextIcon>
        </NextText>
      </Modal>
    </ModalOverlay>
    </Portal>
  )
}