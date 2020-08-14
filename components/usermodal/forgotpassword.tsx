import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { Input } from '../input';
import { Button } from '../button';
import { InfoModal } from '../infomodal';

import { classes, isTextValid } from '../../helpers';
import { useMergeState } from '../../helpers/hooks';

import { forgotPasswordService } from '../../services';

import {
  BackButton, Title, StyledModal,
  Subtitle, UserForm, BackIcon,
  InputContainer, GoToOther, GoToOtherLink,
  Logo, LogoLink
} from './usermodal.styles';

interface Props {
  modal?: boolean;
}


export const ModalForgot = observer(({modal = false}: Props) => {

  const [values, setValues] = useMergeState({
    email: '',
    error: false,
    loading: false,
    modal: false,
    modalTxt: ''
  });

  const submitForm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(!isTextValid(values.email, 'email')){
      setValues({error: true});
      return false;
    }
    setValues({loading: true})
    forgotPasswordService(values.email,
      (data) => {
        setValues({loading: false, modal: true, email: '', error: false, modalTxt: 'Te enviamos un mensaje para que puedas restablecer tu contraseña.'});
      },
      (data) => {
        setValues({loading: false, modal: true, error: false, modalTxt: 'Ha ocurrido un problema. Reintente mas tarde.'});
      }
    );
  };

  return (
    <StyledModal className={classes({isModal: modal})}>
      <BackButton onClick={() => window.history.back()}>
        <BackIcon width="15" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM14.5 3.5H1v1h13.5v-1z" fill="#4F4F4F"/></BackIcon>
        Volver
      </BackButton>
      <Link href="/" passHref><LogoLink><Logo src="/images/logo.svg" /></LogoLink></Link>
      <Title>¿Olvidaste tu contraseña?</Title>
      <Subtitle>Te ayudaremos a reestablecerla para que puedas ingresar.</Subtitle>
      <UserForm>
        <InputContainer>
          <Input 
            label={{
              text: 'Dirección de correo',
              style: 'light'
            }}
            name="email"
            input={{
              value: values.email,
              type: "text",
              required: true,
              placeholder: "Correo",
              error: values.error
            }}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setValues({email: e.currentTarget.value})
            }}
          />
        </InputContainer>
        <Button 
          title="Enviar"
          color="lightBlue"
          onClick={(e: any) => submitForm(e)}
          className="button-top"
          loading={values.loading}
        />
      </UserForm>
      <GoToOther>
        O continúa<Link href="/signin" passHref><GoToOtherLink>iniciando sesión.</GoToOtherLink></Link>
      </GoToOther>
      {values.modal && <InfoModal text={values.modalTxt} onClose={() => {setValues({modal: false})}} /> }
    </StyledModal>
  )
})
