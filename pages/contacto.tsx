import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '../components/layout';
import { Input } from '../components/input';
import { Textarea } from '../components/textarea';
import { Loading } from '../components/loading';

import { isTextValid } from '../helpers';
import { useMergeState } from '../helpers/hooks';

import { 
  Container,
  SmallTitle,
  SmallSubtitle
 } from '../components/layout/layout.styles';

import {
  Section, FormContainer, HalfContainer, 
  FullContainer, Disclaimer, Submit, 
  DisclaimerLink, SubmitResponse, ResponseIcon, 
  ResponseText
} from '../components/pages/contact.styles';

import { sendContact } from '../services';

const Contact = () => {
  
  const [values, setValues] = useMergeState({
    email: '',
    name: '',
    message: ''
  });

  const [errors, setErrors] = useMergeState({
    email: false,
    name: false,
    message: false
  });

  const [status, setStatus] = React.useState('');

  const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(isTextValid(values.email, 'email') && isTextValid(values.name, 'text') && isTextValid(values.message, 'text')){
      setStatus('loading');
      sendContact(values.name, values.email, values.message,
        (response) => {
          if(response.result){
            setStatus('success')
            setValues({
              email: '',
              name: '',
              message: ''
            })
            setTimeout(() => {
              setStatus('')
            }, 4000)
          }
        },
        (response) => {
          setStatus('error')
          setTimeout(() => {
            setStatus('')
          }, 3000)
        }
      )
    } else {
      setErrors({
        email: true,
        name: true,
        message: true
      })
    }
  }

  return (
    <Layout>
      <Section>
        <Container>
          <SmallTitle>Contáctate</SmallTitle>
          <SmallSubtitle>Realiza tu consulta o solicita más información.</SmallSubtitle>
          <SmallSubtitle className="smaller mt-1">Si tu consulta es por más información, modalidad, duración, nivel o pagos vas a encontrar ya tu respuesta en mi sección de <Link href="/preguntas-frecuentes" passHref><DisclaimerLink>Preguntas Frecuentes</DisclaimerLink></Link></SmallSubtitle>
          <FormContainer>
            <HalfContainer>
              <Input 
                label={{
                  text: 'Nombre completo *'
                }}
                name="name"
                input={{
                  value: values.name,
                  type: "text",
                  required: false,
                  placeholder: "Ingresa aqui tu nombre",
                  error: errors.name
                }}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setValues({name: e.currentTarget.value})
                }}
              />
            </HalfContainer>
            <HalfContainer>
              <Input 
                label={{
                  text: 'Correo *'
                }}
                name="email"
                input={{
                  value: values.email,
                  type: "email",
                  required: true,
                  placeholder: "Ingresa aqui tu correo",
                  error: errors.email
                }}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setValues({email: e.currentTarget.value})
                }}
              />
            </HalfContainer>
            <FullContainer>
              <Textarea 
                label={{
                  text: 'Mensaje *'
                }}
                name="message"
                input={{
                  value: values.message,
                  required: true,
                  placeholder: "Escribe aquí tu mensaje",
                  error: errors.message
                }}
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                  setValues({message: e.currentTarget.value})
                }}
              />
            </FullContainer>
            <Disclaimer>* Todos los campos son obligatorios</Disclaimer>
            <FullContainer>
              <Submit 
                title="Enviar mensaje"
                color="lightOrange"
                onClick={submitForm}
              />
              <SubmitResponse>
                {status === 'loading' && <Loading size={24} color="#000" />}
                {status === 'success' && <>
                  <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 17a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" fill="#2B84E0"/><path d="M6.328 12.334l4.37 4.371C14.319 15.74 17 12.442 17 8.5v-.241l-3.432-3.164-7.24 7.24z" fill="#1B71BF"/><path d="M8.714 10.404a1.004 1.004 0 010 1.394l-.777.778a1.004 1.004 0 01-1.395 0L3.137 9.144a1.004 1.004 0 010-1.395l.778-.777a1.004 1.004 0 011.394 0l3.405 3.432z" fill="#fff"/><path d="M11.69 4.478a1.004 1.004 0 011.395 0l.777.778a1.004 1.004 0 010 1.394l-5.899 5.872a1.004 1.004 0 01-1.394 0l-.778-.777a1.004 1.004 0 010-1.395l5.9-5.872z" fill="#fff"/></svg>
                  <ResponseText>Mensaje enviado.</ResponseText>
                </>}
                {status === 'error' && <ResponseText>No se ha podido procesar tu solicitud. Reintenta más tarde por favor!</ResponseText>}

              </SubmitResponse>
            </FullContainer>
          </FormContainer>
        </Container>
      </Section>
    </Layout>
  )
};

export default Contact;