import React from 'react';
import { Portal } from '../portal';

import { 
  IframeContainer,
  Container,
  Wrapper
} from './modalvideo.styles';

interface Props {
  src: string;
  children?: any;
  onClose?: any;
}

export const ModalVideo = ({src, onClose}: Props) => {
  const [out, setOut] = React.useState('')
  const handleClose = () => {
    setOut('out');
    setTimeout(function(){
      onClose();
    }, 300)
  }
  return (
    <Portal selector="body">
      <Container onClick={handleClose} className={out}>
        <Wrapper>
          <IframeContainer>
            <iframe src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </IframeContainer>
        </Wrapper>
      </Container>
    </Portal>
  )
}