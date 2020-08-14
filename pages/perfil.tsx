import React from 'react';
import axios from 'axios';
import https from 'https';
import { NextPage } from 'next';
import { parseCookies } from 'nookies';
import { Layout } from '../components/layout';
import { InfoModal } from '../components/infomodal';
import { API_URI } from '../helpers';
import { useMergeState } from '../helpers/hooks';
import { classes, toBase64, isTextValid } from '../helpers';

import { updateProfile, updateProfileAvatar } from '../services';

import dynamic from "next/dynamic";
const LoginPage = dynamic(() => import("./signin"));

import {
  Section, Content,
  ContentBox, BoxContainer,
  BoxTextWrapper, BoxProfileWrapper,
  BoxProfile, BoxLabel,
  BoxInput, BoxHeader,
  BoxContent, BoxTitle,
  BoxSubtitle, HeaderText, HeaderButton,
  FormContent, FormInput,
  FormLabel, StyledButton,
  BoxLeft, BoxRight, SuscriptionStyled,
  TextSpan, TextPlan, InputEye,
  TextDisclimer, RenovarButton, Form,
  ButtonContainer
} from '../components/pages/profile.styles';
import { Button } from '../components/button';
import { useStores } from '../stores/hooks';
import { useRouter } from 'next/router';

const Profile: NextPage = ({loggedIn = true, profile}: any) => {

  if (!loggedIn) return <LoginPage referrer="/perfil" />;
  const { rootStore: {userStore} } = useStores()
  const router = useRouter();
  
  const [values, setValues] = useMergeState({
    email: profile.mail,
    name: profile.name,
    password: '',
    image: profile.avatar,
    loading: false,
    modal: false,
    modalText: ''
  });

  const [open, setOpen] = React.useState(false);
  const [eye, setPassword] = React.useState(false);

  const onUploadImage = async (e: any) => {
    const formData = new FormData();
    formData.append('avatarImage', e.currentTarget.files[0], 'avatar')
    updateProfileAvatar(formData,
      (data) => {
        if(data.result && data.avatar){
          setValues({image: data.avatar});
        } else {
          setValues({modal: true, modalText: 'Reduzca el tamaño de la imagen por favor!'});
        }
      },
      (data) => {
        setValues({modal: true, modalText: 'Ha ocurrido un problema al guardar la imagen.'});
      },
    )
  }

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if(!isTextValid(values.email, 'email')){
      return false;
    }
    if(!isTextValid(values.name, 'text')){
      return false;
    }

    setValues({loading: true})
    updateProfile(values.email, values.name, values.password,
      (data) => {
        setValues({loading: false, modal: true, modalText: 'Tus cambios fueron guardados.'});
        profile.email = values.email;
        profile.name = values.name;
        setOpen(false);
      },
      (data) => {
        setValues({loading: false, modal: true, modalText: 'Ha ocurrido un problema. Intente más tarde.'});
      },
    )

  }

  return(
    <Layout>
      <Section>
        <Content>
          <ContentBox>
            <BoxContainer>
              <BoxProfileWrapper>
                <BoxProfile src={values.image} />
                <BoxLabel htmlFor="fileUpload">
                  Editar foto
                  <BoxInput type="file" id="fileUpload" onChange={(e) => onUploadImage(e)}/>
                </BoxLabel>
              </BoxProfileWrapper>
              <BoxTextWrapper>
                <BoxTitle>{profile.name}</BoxTitle>
                <BoxSubtitle>{profile.mail}</BoxSubtitle>
              </BoxTextWrapper>
            </BoxContainer>
          </ContentBox>
          <ContentBox>
            <BoxContainer className="no-padding">
              <BoxHeader onClick={() => setOpen(!open)}>
                <HeaderText>Datos de la cuenta</HeaderText>
                <HeaderButton>Editar</HeaderButton>
              </BoxHeader>
              <BoxContent className={classes({open})}>
                <Form>
                  <FormContent>
                    <FormInput 
                      type="text"
                      value={values.name}
                      id="name"
                      name="name"
                      onChange={(e) => setValues({name: e.currentTarget.value})}
                    />
                    <FormLabel htmlFor="name">Nombre</FormLabel>
                  </FormContent>
                  <FormContent>
                    <InputEye onClick={() => setPassword(!eye)} width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M7.5 11.97c-2.866 0-5.465-1.567-7.383-4.114a.594.594 0 010-.709C2.035 4.597 4.634 3.03 7.5 3.03c2.866 0 5.465 1.568 7.383 4.115.156.209.156.5 0 .709-1.918 2.55-4.517 4.118-7.383 4.118zm.206-7.618a3.157 3.157 0 00-3.354 3.354 3.162 3.162 0 002.942 2.942 3.157 3.157 0 003.354-3.354 3.172 3.172 0 00-2.942-2.942zM7.61 5.806A1.696 1.696 0 005.806 7.61c.052.847.74 1.532 1.587 1.587a1.696 1.696 0 001.804-1.804A1.706 1.706 0 007.61 5.806z" fill="#828282"/></g><defs><clipPath id="clip0"><path transform="matrix(1 0 0 -1 0 15)" fill="#fff" d="M0 0h15v15H0z"/></clipPath></defs></InputEye>
                    <FormInput 
                      type={eye ? "text" : "password"}
                      value={values.password}
                      id="password"
                      name="password"
                      onChange={(e) => setValues({password: e.currentTarget.value})}
                    />
                    <FormLabel htmlFor="password">Contraseña</FormLabel>
                  </FormContent>
                  <FormContent>
                    <FormInput 
                      type="email"
                      value={values.email}
                      id="email"
                      name="email"
                      onChange={(e) => setValues({email: e.currentTarget.value})}
                    />
                    <FormLabel htmlFor="email">Correo</FormLabel>
                  </FormContent>
                  <FormContent className="right-align">
                    <StyledButton 
                      title="Guardar cambios"
                      color="lightOrange"
                      onClick={(e) => {onFormSubmit(e)}}
                      loading={values.loading}
                    />
                  </FormContent>
                </Form>
              </BoxContent>
            </BoxContainer>
          </ContentBox>
          {profile.subscription.length === 0 ? <SuscriptionStyled 
            title={{text: "Decide cuándo, dónde y cómo quieres tomar tus clases."}} 
            button={{title: "Suscribirme"}}
          /> : 
          <ContentBox className="blue">
            <BoxContainer className="column-m">
              <BoxLeft>
                <TextSpan className="w100-m">Tu suscripcion.</TextSpan>
                <TextPlan>{profile.subscription.plan}</TextPlan>
                <TextDisclimer>Adquirido el {profile.subscription.start.replace(/-/g, '/')}</TextDisclimer>
              </BoxLeft>
              <BoxRight>
                <TextSpan className="right">Te quedan {profile.subscription.left.months} meses y {profile.subscription.left.weeks} semanas</TextSpan>
                <RenovarButton 
                  title="Renovar"
                  color="orange"
                  onClick={() => {router.push('/checkout?plan=Anual')}}
                />
              </BoxRight>
            </BoxContainer>
          </ContentBox>
          }
          <ButtonContainer>
            <Button onClick={() => {userStore.logout(() => router.push('/'))}} color="blue">Cerrar sesión</Button>
          </ButtonContainer>
        </Content>
      </Section>
      {values.modal && <InfoModal text={values.modalText} onClose={() => setValues({modal: false})}/>}
    </Layout>
  )
}

Profile.getInitialProps = async ctx => {
  const { tcdgToken } = parseCookies(ctx);
  if(!tcdgToken){
    return { loggedIn: false };
  } else {
    try {
      const agent = new https.Agent({  
        rejectUnauthorized: false
      });
      const { data } = await axios.get(`${API_URI}/student/get`, {
        headers: tcdgToken ? { Authorization: tcdgToken } : {},
        httpsAgent: agent
      })
      return {
        profile: data
      }
    } catch (error) {
      return { loggedIn: false };
    }
  }

}

export default Profile;