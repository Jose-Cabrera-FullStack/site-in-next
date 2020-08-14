import { Portal } from '../portal';

import { 
  Modal, TopImage, NextTextIcon,
  Text, RewardImage,
  RewardImageContainer,
  ModalOverlay, NextText
} from './modalprizes.styles';


export const ModalPrizes = ({prizes, handleClose, btnText, lastClass}: any) => {
  return (
    <Portal selector="body">
      <ModalOverlay>
        <Modal>
          <TopImage src={lastClass ? "/images/clase-finalizada2.png" : "/images/clase-finalizada1.png"} />
          <Text>
            {prizes.length === 0 ? 
              `Todavía puedes ganar nuevos premios y aprender muchas cosas más!`
            :
              `Éstos son tus premios ganados durante este curso.`
            }
          </Text>
          <RewardImageContainer>
            {prizes.map((item: any, k: number) => <RewardImage key={k} src={item.image} /> )}
          </RewardImageContainer>
          <NextText onClick={() => handleClose()}>
            {lastClass ? 'Elige tu próximo curso' : 'Comenzar la próxima clase'}
            <NextTextIcon width="13" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.854 4.354a.5.5 0 000-.708L9.672.464a.5.5 0 00-.708.708L11.793 4 8.964 6.828a.5.5 0 00.708.708l3.182-3.182zM0 4.5h12.5v-1H0v1z" fill="#1B71BF"/></NextTextIcon>
          </NextText>
        </Modal>
      </ModalOverlay>
    </Portal>
  )
}