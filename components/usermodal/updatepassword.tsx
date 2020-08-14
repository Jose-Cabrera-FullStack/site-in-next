import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { Input } from '../input';
import { Button } from '../button';
import { InfoModal } from '../infomodal';
import { useRouter } from 'next/router';

import { classes, isTextValid } from '../../helpers';
import { useMergeState } from '../../helpers/hooks';

import { updatePasswordService } from '../../services';

import {
  Title, StyledModal,
  Subtitle, UserForm, Logo,
  InputContainer, LogoLink
} from './usermodal.styles';

interface Props {
  modal?: boolean;
}


export const ModalUpdatePassword = observer(({modal = false}: Props) => {

  const router = useRouter();

  const [values, setValues] = useMergeState({
    password: '',
    error: false,
    password2: '',
    error2: false,
    modal: false,
    modalText: '',
    loading: false
  });

  const closeModal = () => {
    router.push('/signin');
  }

  const submitForm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(!isTextValid(values.password, 'text')){
      setValues({error: true});
      return false;
    }
    if(!isTextValid(values.password2, 'text')){
      setValues({error2: true});
      return false;
    }
    if(values.password !== values.password2){
      setValues({error2: true, modal: true, modalText: 'Las contraseñas no coinciden.'});
    }

    const { token } = router.query;

    if(!token){
      setValues({modal: true, modalText: 'Token no valido'});
      return false;
    }

    updatePasswordService(values.password, token as string,
      (data) => {
        if(data.result){
          setValues({loading: false, modal: true, password: '', password2: '', modalText: 'Tu contraseña ha sido restablecida de manera exitosa, ya puedes seguir aprendiendo!'});
        } else {
          setValues({loading: false, modal: true, modalText: 'El token no es valido.'});
        }
      },
      (data) => {
        setValues({loading: false, modal: true, modalText: 'Ha ocurrido un problema. Reintente mas tarde.'});
      }
    );
  };

  return (
    <StyledModal className={classes({isModal: modal})}>
      <Link href="/" passHref><LogoLink><Logo src="/images/logo.svg" /></LogoLink></Link>
      <Title>Cambia tu contraseña</Title>
      <Subtitle>Recordá que debe tener como mínimo 6 carácteres.</Subtitle>
      <UserForm>
        <InputContainer>
          <Input 
            label={{
              text: 'Nueva contraseña',
              style: 'light'
            }}
            name="password"
            input={{
              value: values.password,
              type: "password",
              required: true,
              placeholder: "Escribí acá tu nueva contraseña",
              error: values.error
            }}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setValues({password: e.currentTarget.value})
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input 
            label={{
              text: 'Confirma tu contraseña',
              style: 'light'
            }}
            name="password2"
            input={{
              value: values.password2,
              type: "password",
              required: true,
              placeholder: "Escribila nuevamente",
              error: values.error2
            }}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setValues({password2: e.currentTarget.value})
            }}
          />
        </InputContainer>
        <Button 
          title="Confirmar"
          color="lightBlue"
          onClick={(e: any) => submitForm(e)}
        />
      </UserForm>
      {values.modal && <InfoModal text={values.modalText} onClose={() => closeModal()} /> }
    </StyledModal>
  )
})
