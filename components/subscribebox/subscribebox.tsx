
import { Button } from '../button'

import { 
  StyledBox,
  BoxTitle
} from './subscribebox.styles'


interface Props {
  className?: string;
  title: {
    text: string;
  }
  button: {
    title: string;
    onClick?: () => void;
    to?: string;
  }
}

export const SubscribeBox = ({title, button, className}: Props) => {
  return (
    <StyledBox className={className}>
      <BoxTitle>{title.text}</BoxTitle>
      <Button title={button.title} color="lightBlue" to={button.to ? button.to : '/suscripciones'} />
    </StyledBox>
  )
}