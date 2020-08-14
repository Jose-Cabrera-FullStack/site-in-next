import React from 'react';
import { Portal } from '../portal';
import { Button } from '../button';

import {
  OverlayFixed, OverlayBlack,
  Modal, ModalClose,
  ModalCloseIcon, Title,
  Divider, ModalBottom,
  BottomLeft, BottomRight,
  LeftPlanName, LeftPlanPrice,
  BottomPrice, PriceBefore, Disccount,
} from './modalsubscribe.styles';

interface Props {
  onClose: any;
  close?: boolean;
}

export const ModalSubscribe = ({onClose, close = false}: Props) => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const [out, setOut] = React.useState('')
  const handleClose = () => {
    setOut('out');
    setTimeout(function(){
      onClose();
    }, 300)
  }
  return (
    <Portal selector="body">
      <OverlayFixed className={out}>
        <OverlayBlack onClick={!close ? () => handleClose() : () => {}}/>
        <Modal>
          {!close && 
          <ModalClose onClick={!close ? () => handleClose() : () => {}}>
            <ModalCloseIcon width="15" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM14.5 3.5H1v1h13.5v-1z" fill="#BDBDBD"/></ModalCloseIcon>
            Volver
          </ModalClose> }
          <Title>Si te gustaron las clases libres te invito a suscribirte ahora para obtener acceso ilimitado a todos mis cursos.</Title>
          <Divider />
          <ModalBottom>
            <BottomLeft>
              {/* <LeftPlanName>Plan Anual </LeftPlanName>
              <LeftPlanPrice>$ 2.889</LeftPlanPrice> */}
              <BottomPrice>
                {/* <PriceBefore>antes $ 8.250</PriceBefore> */}
                <Disccount>Dcto. 65% OFF solo por {months[new Date().getMonth()]}</Disccount>
              </BottomPrice>
            </BottomLeft>
            <BottomRight>
              <Button 
                title="Suscribirme ahora"
                color="orange"
                to="/suscripciones"
                className="button"
              />
            </BottomRight>
          </ModalBottom>
        </Modal>
      </OverlayFixed>
    </Portal>
  )
}