import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { Input } from '../input';
import { Button } from '../button';
import { InfoModal } from '../infomodal';
import { signUpText, loginText, paySignupText, payLoginText } from './helpers';

import { useStores } from '../../stores/hooks';
import { Disclaimer, DisclaimerLink } from '../layout/layout.styles';

import { useRouter } from 'next/router';
import { API_URI } from '../../helpers';
import { checkoutSignup } from '../../services';

import {
  StyledBox, Container, BackButton, 
  Header, HeaderImage, Title, 
  Subtitle, ShareButton, ButtonWrapper,
  TextWrapper, UserForm, BackIcon,
  InputContainer, GoToOther, LogoLink,
  GoToOtherLink, ButtonIcon, Logo,
  ForgotPassword, StepWrapper, StepItem,
  StepTitle, StepArrow, StepSubtitle
} from './usermodal.styles'

import { classes, isTextValid } from '../../helpers';
import { useMergeState } from '../../helpers/hooks';

interface Props {
  is?: string;
  modal?: boolean;
  email?: any;
  referrer?: string;
}

export const UserModal = observer(({is = 'login', modal = false, referrer}: Props) => {
  let text = loginText;
  switch(is){
    case "payLogin":
      text = payLoginText;
    break;
    case "paySignup":
      text = paySignupText;
    break;
    case "signup":
      text = signUpText;
    break;
    case "login":
    default:
      text = loginText;
    break;
  }

  const router = useRouter();

  const { rootStore: { userStore }} = useStores();

  const [values, setValues] = useMergeState({
    email: router.query.email ? router.query.email as string : '',
    password: '',
    loading: false,
    modal: false,
    modalText: ''
  });

  const [error, setError] = useMergeState({
    email: false,
    password: false
  });

  const [countryCode, setCountryCode] = React.useState('')

  React.useEffect(() => {
    axios.get('https://extreme-ip-lookup.com/json/?key=rIYWtcUpWDpaEfSSHyea')
    .then(response => {
      setCountryCode(response.data ? response.data.countryCode : 'default')
    })
  }, [])

  if(!referrer){
    referrer = router.query.referrer as string;
  }
  
  const back = router.query.back as string;

  const submitForm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(!isTextValid(values.email, 'email')){
      setError({email: true});
      return false;
    }
    if(!isTextValid(values.password, 'text')){
      setError({password: true});
      return false;
    }
    setValues({loading: true});
    if(is === "login"){
      // login
      userStore.login(values.email, values.password,
        (data) => {
          if(data.user) userStore.setUser(data.user)
          router.push(referrer ? referrer : '/cursos');
        },
        (data) => {
          if(!data.result){
            setError({
              email: true,
              password: true,
            });
            setValues({loading: false, modal: true, modalText: 'El usuario/contraseña no es correcto.'});
          }
        }
      )
    } else if(is.includes("pay")) {
      checkoutSignup(router.query.token as string, values.email, values.password,
        (data) => {
          if(data.user){
            userStore.setUser(data.user);
            userStore.setToken(data.token);
            userStore.setLogged(data.result);
          }
          router.push(referrer ? referrer : '/cursos');
        },
        (data) => {
          setValues({loading: false, modal: true, modalText: 'Ha ocurrido un problema. Contactenos por favor.'});
        }
      )
    } else {
      // signup
      userStore.signup(values.email, values.password,
        (data) => {
          // setValues({loading: false, modal: true, modalText: 'Gracias por tu registro, ahora revisa tu correo para validar tu cuenta.'});
          if(data.user) userStore.setUser(data.user)
          router.push(referrer ? referrer : '/cursos');
        },
        (data) => {
          if(!data.result){
            setError({
              email: true
            });
            setValues({
              loading: false,
              modal: true,
              modalText: 'Oops, parece que ya has usado este correo para el registro de una cuenta en nuestra plataforma.'
            })
          }
        }
      )
    }
  }

  if(userStore.logged) {
    if(referrer){
      router.push(referrer as string);
    } else {
      router.push('/cursos');
    }
  }

  React.useEffect(() => {
    if(router.query.duplicate === "true"){
      setValues({
        modal: true,
        modalText: 'Oops, parece que ya has usado este correo para el registro de una cuenta en nuestra plataforma.'
      })
    }
  }, [router])
  
  return (
    <StyledBox className={classes({isModal: modal}, is)}>
      <Container>
        {!is.includes('pay') && <BackButton onClick={() => back ? router.push(back) : router.push('/')}>
          <BackIcon width="15" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM14.5 3.5H1v1h13.5v-1z" fill="#4F4F4F"/></BackIcon>
          Volver
        </BackButton>}
        {is.includes('pay') && <Link href="/" passHref><LogoLink><Logo src="/images/logo.svg" /></LogoLink></Link>}
        {is.includes('pay') && <StepWrapper>
          <StepItem className="grey">
            <StepTitle>Paso 1</StepTitle>
          </StepItem>
          <StepArrow width="26" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.707 8.707a1 1 0 000-1.414L19.343.929a1 1 0 10-1.414 1.414L23.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h25V7H0v2z" fill="#BDBDBD"/></StepArrow>
          <StepItem>
            <StepTitle>Paso 2</StepTitle>
            <StepSubtitle>&nbsp;-&nbsp;Termina tu registro</StepSubtitle>
          </StepItem>
        </StepWrapper>}
        <Header className={classes({pay: is.includes('pay')})}>
          <HeaderImage src="/images/mario-pp.png" />
          <TextWrapper>
            <Title>{text.title}</Title>
            {!is.includes('pay') && <Subtitle>{text.subtitle}</Subtitle>}
          </TextWrapper>
        </Header>
        {is.includes('pay') && <Subtitle className="second">{is === "paySignup" ? 'Crea tu cuenta con el método que prefieras' : 'Ahora sólo queda que ingreses con tu cuenta ya registrada'}</Subtitle>}
        <ButtonWrapper>
          <ShareButton className="facebook" onClick={() => window.location.href = `${API_URI}/facebook-sign?${referrer ? `referrer=${encodeURIComponent(referrer as string)}`: ''}&source=${router.query.source}&token=${router.query.token}&countryCode=${countryCode}`}>
            <ButtonIcon width="11" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.253 11.095V21.74a.279.279 0 00.28.272h3.955a.272.272 0 00.272-.272V10.924h2.862a.272.272 0 00.272-.258l.278-3.255a.278.278 0 00-.278-.3H6.76V4.8a.987.987 0 01.98-.988h2.196a.272.272 0 00.28-.272V.28A.28.28 0 009.936 0H6.224a3.977 3.977 0 00-3.97 3.97v3.14H.278A.279.279 0 000 7.39v3.255a.286.286 0 00.279.279h1.974v.171z" fill="#fff"/></ButtonIcon>
            {text.socialText} con Facebook
          </ShareButton>
          <ShareButton className="google" onClick={() => window.location.href = `${API_URI}/google-sign?${referrer ? `referrer=${encodeURIComponent(referrer as string)}`: ''}&source=${router.query.source}&token=${router.query.token}&countryCode=${countryCode}`}>
            <ButtonIcon width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M5.986 16.317l-.942 3.51-3.434.1a13.52 13.52 0 01-.077-12.639l3.066.568L5.94 10.92a7.993 7.993 0 00.077 5.426l-.03-.03z" fill="#F8B800"/><path d="M26.762 10.975c.157.831.237 1.675.238 2.521.003.948-.098 1.894-.299 2.82a13.427 13.427 0 01-4.752 7.71l-3.832-.199-.544-3.403a8.07 8.07 0 003.464-4.107h-7.242v-5.365h12.967v.023z" fill="#518BF5"/><path d="M21.95 24.026a13.495 13.495 0 01-20.34-4.1l4.375-3.579a8.031 8.031 0 0011.565 4.077l4.4 3.602z" fill="#28B146"/><path d="M22.119 3.112L17.742 6.69a7.925 7.925 0 00-4.245-1.219 8.024 8.024 0 00-7.588 5.418L1.533 7.288a13.504 13.504 0 0120.585-4.176z" fill="#EE4336"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h27v27H0z"/></clipPath></defs></ButtonIcon>
            {text.socialText} con Google
          </ShareButton>
        </ButtonWrapper>
        <UserForm>
          <InputContainer>
            <Input 
              label={{
                text: text.email,
                style: 'light'
              }}
              name="email"
              input={{
                value: values.email,
                type: "text",
                required: true,
                placeholder: "Correo",
                error: error.email
              }}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setValues({email: e.currentTarget.value})
              }}
            />
          </InputContainer>
          <InputContainer>
            <Input 
              label={{
                text: 'Contraseña',
                style: 'light'
              }}
              name="password"
              input={{
                value: values.password,
                type: "password",
                required: true,
                placeholder: "Contraseña",
                error: error.password
              }}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setValues({password: e.currentTarget.value})
              }}
            />
          </InputContainer>
          {is === "login" && <Link href="/forgot-password" passHref><ForgotPassword>¿Olvidaste tu contraseña?</ForgotPassword></Link>}
          <Button 
            title={text.btnText}
            color="lightBlue"
            onClick={(e: any) => submitForm(e)}
            loading={values.loading}
          />
        </UserForm>
        {!is.includes('pay') && <GoToOther>
          {text.other.text}
          {!is.includes('pay') ? 
          <Link href={`${text.other.url}${referrer ? `?referrer=${encodeURIComponent(referrer as string)}` : ''}${back ? `&back=${encodeURIComponent(back as string)}` : ''}`} passHref><GoToOtherLink>{text.other.linkText}</GoToOtherLink></Link>
            : 
          <Link href={`${text.other.url}?${Object.keys(router.query).map(item => `${item}=${router.query[item]}`).join('&')}`} passHref><GoToOtherLink>{text.other.linkText}</GoToOtherLink></Link>
          }
        </GoToOther>}
        {is.includes('pay') && <Disclaimer className="mt">
          Si tienes inconvenientes para registrarte, déjame tu consulta en <Link href="/contacto" passHref><DisclaimerLink>contacto</DisclaimerLink></Link> y te responderé a la brevedad.
        </Disclaimer>}
      </Container>
      {values.modal && <InfoModal text={values.modalText} onClose={() => {setValues({modal: false})}} /> }
    </StyledBox>
  )
});