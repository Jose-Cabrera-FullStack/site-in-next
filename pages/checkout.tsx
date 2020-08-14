import React from 'react';
import axios from 'axios';
import https from 'https';
import { observer } from 'mobx-react-lite';
import { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../components/layout';
import { Button } from '../components/button';
import { Portal } from '../components/portal';
import { loadStripe } from '@stripe/stripe-js';
import { API_URI } from '../helpers';
import { Loading } from '../components/loading';
import { 
  LoadingContainer
} from '../components/pages/sign.styles';
import {
  Elements, CardNumberElement,
  CardExpiryElement, CardCvcElement,
  useStripe, useElements
} from '@stripe/react-stripe-js';

import { getIntent, getRedirectUri } from '../services';

import { 
  Container,
  Disclaimer as DisclaimerGlobal,
  DisclaimerLink,
} from '../components/layout/layout.styles';

import { classes } from '../helpers';
import { useMergeState } from '../helpers/hooks';
import { useStores } from '../stores/hooks';
import { useRouter } from 'next/router';

import {
  Section, Content, BackContainer,
  BackIcon, BackLink, PriceWrapper,
  LeftPlanName, LeftPlanPrice, BottomPrice, 
  PriceBefore, Discount, Divider, IconInput,
  Text, TabsContainer, TabsHeader,
  TabItem, TabContent, Currency,
  CardWrapper, WrapperTitle, LogoImage,
  ButtonWrapper, HalfWrapper, FullWrapper,
  Disclaimer, BottomWrapper, LogoList, ListItem,
  DisclaimerWrapper, Modal, ModalText,
  NextWrapper, NextIcon, ModalOverlay,
  SaveCardWrapper, SaveIcon, ModalImage,
  SaveSpan, SaveInput, StepWrapper,
  StepItem, StepTitle, StepSubtitle, StepArrow
} from '../components/pages/checkout.styles';

const cardOptions = {
  classes: {
    base: 'customCardElement'
  },
  style: {
    base: {
      fontSize: '15px',
      lineHeight: '20px',
      backgroundColor: 'white',
      color: '#828282',
      '::placeholder': {
        color: '#BDBDBD'
      }
    }
  }
}

const Checkout = observer(() => {
  const router = useRouter();
  const { plan, countryCode } = router.query;
  const [data, setData] = React.useState<any>()

  const getData = async () => {
    axios.get('https://extreme-ip-lookup.com/json/?key=rIYWtcUpWDpaEfSSHyea')
    .then(response => {
      const agent = new https.Agent({  
        rejectUnauthorized: false
      });
      axios.get(`${API_URI}/payment/prices?&countryCode=${countryCode ? countryCode : response.data ? response.data.countryCode : 'default'}`, {httpsAgent: agent})
      .then(response2 => {
        setData(response2.data)
      })
    })
  }
  
  React.useEffect(() => {
    // if(!plan || !['Mensual', 'Anual', 'Seis meses'].includes(plan as string)) router.push('/suscripciones')
    if(!plan || !['Anual'].includes(plan as string)) router.push('/suscripciones')
    getData();
  }, [router])

  const {rootStore: {userStore}} = useStores();

  const planItem = data && data.plans ? data.plans[plan as string] : {};

  const selectActive = () => {
    if(data?.pay_channels.indexOf('Stripe') === 0){
      return 0;
    } else if(data?.pay_channels.indexOf('MercadoPago') === 0){
      return 1;
    } else {
      return 2;
    }
  }

  React.useEffect(() => {
    setTab(selectActive())
  }, [data]);

  const [tab, setTab] = React.useState(0);
  const [modal, setModal] = useMergeState({
    open: false,
    image: true,
    text: '',
    redirect: false,
    id: ''
  });

  const [values, setValues] = useMergeState({
    email: userStore.user ? userStore.user.mail : '',
    disabled: userStore.user ? true : false,
    cardValid: false,
    cvcValid: false,
    expValid: false,
    complete: '',
    saveCard: false
  });


  const stripe = useStripe();
  const elements = useElements();

  const closeModal = () => {
    if(elements){
      elements.getElement(CardNumberElement)!.clear();
      elements!.getElement(CardExpiryElement)!.clear();
      elements!.getElement(CardCvcElement)!.clear();
    }
    if(values.complete === 'success'){
      setValues({
        email: ''
      })
      if(modal.redirect && !userStore.user){
        router.push(`/signup-pay?source=stripe&token=${modal.id}&success=true`)
      } else {
        router.push(`/cursos`)
      }
    } else {
      setModal({open: false})
    }
  }

  const getRedirect = (source: string) => {
    getRedirectUri(source, plan as string, data.cod ? data.cod : 'AR', values.email,
      (response) => {
        if(response.result) window.location.href = response.redirect
      },
      (response) => {
        console.error(response)
      }
    )
  }


  const handleBuy = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const cod = data.cod ? data.cod : 'AR';

    // Use your card Element with other Stripe.js APIs
    if(!cardElement) return;
    setValues({complete: 'loading'});
    getIntent(plan as string, cod, values.email,
      async (response) => {
        const result = await stripe.confirmCardPayment(response.client_secret, {
          payment_method: {
            card: cardElement,
            billing_details: {},
          }
        });
        
        if (result.error) {
          const errorMsg: any = {
            'incorrect_number': "El número de tarjeta es incorrecto.",
            'invalid_number': "El número de tarjeta no es un número de tarjeta válido.",
            'invalid_expiry_month': "El mes de caducidad de la tarjeta no es válido.",
            'invalid_expiry_year': "El año de caducidad de la tarjeta no es válido.",
            'invalid_cvc': "El código de seguridad de la tarjeta no es válido.",
            'expired_card': "La tarjeta ha caducado.",
            'insufficient_funds': "La tarjeta no posee fondos suficientes",
            'incorrect_cvc': "El código de seguridad de la tarjeta es incorrecto.",
            'incorrect_zip': "Falló la validación del código postal de la tarjeta.",
            'card_declined': "La tarjeta fué rechazada.",
            'generic_decline': "La tarjeta fué rechazada.",
            'missing': "El cliente al que se está cobrando no tiene tarjeta",
            'processing_error': "Ocurrió un error procesando la tarjeta.",
            'rate_limit':  "Ocurrió un error debido a consultar la API demasiado rápido. Por favor, avísanos si recibes este error continuamente."
          }
          setModal({
            open: true,
            image: false,
            text: result.error.decline_code ? errorMsg[result.error.decline_code] : result.error.message
          })
          setValues({complete: ''});
        } else {
          // The payment has been processed!
          if (result.paymentIntent?.status === 'succeeded') {
            setValues({complete: 'success'});
            setModal({
              open: true,
              image: true,
              text: userStore.user ? `Gracias por haber adquirido nuestra suscripción. Ahora vamos a continuar para poder comenzar con tu aprendizaje.` : `Gracias por haber adquirido nuestra suscripción. Ahora vamos a continuar para poder terminar con tu registro.`,
              redirect: true,
              id: result.paymentIntent?.id
            })
          } else {
            setValues({complete: ''});
            setModal({
              open: true,
              image: false,
              text: 'Tu pago esta siendo procesado...'
            })
          }
        }
      },
      () => {
        setValues({complete: ''});
        setModal({
          open: true,
          image: false,
          text: `Ha ocurrido un error al procesar el pago, reintente mas tarde.`
        })
      }
    )

  }

  return(
    <Layout noFooter>
      <Section>
        <Container className="full-viewheight">
          <Content>
            <BackContainer onClick={() => window.history.back()}>
              <BackIcon width="26" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM26 7H1v2h25V7z" fill="#4F4F4F"/></BackIcon>
              <BackLink>Volver </BackLink>
            </BackContainer>
            {!data && 
              <LoadingContainer style={{height: '500px'}} className="hauto">
                <Loading color="#B84800" />
              </LoadingContainer>
            }
            {data &&
            <React.Fragment>
              <PriceWrapper>
                <LeftPlanName>Plan {planItem?.name} </LeftPlanName>
                {planItem?.discount && <Discount>&nbsp;-&nbsp;Dcto. {planItem?.discount}% OFF</Discount>}
                <BottomPrice>
                  <LeftPlanPrice>{data?.symbol} {planItem?.price} <Currency>{data?.coin}</Currency> </LeftPlanPrice>
                  <PriceBefore>Antes {data?.symbol} {planItem?.list_price}</PriceBefore>
                </BottomPrice>
              </PriceWrapper>
              <Divider />
              {data?.checkoutText && <Text>{data.checkoutText}</Text>}
              <StepWrapper>
                <StepItem>
                  <StepTitle>Paso 1</StepTitle>
                  <StepSubtitle>&nbsp;-&nbsp;Compra tu suscripción</StepSubtitle>
                </StepItem>
                <StepArrow width="26" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.707 8.707a1 1 0 000-1.414L19.343.929a1 1 0 10-1.414 1.414L23.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h25V7H0v2z" fill="#BDBDBD"/></StepArrow>
                <StepItem className="grey">
                  <StepTitle>Paso 2</StepTitle>
                  <StepSubtitle>&nbsp;-&nbsp;Termina tu registro</StepSubtitle>
                </StepItem>
              </StepWrapper>
              <TabsContainer>
                <TabsHeader>
                  {data?.pay_channels.includes('Stripe') && <TabItem className={classes({active: tab === 0})} onClick={() => setTab(0)}>Tarjeta crédito/débito</TabItem>}
                  {data?.pay_channels.includes('MercadoPago') && <TabItem className={classes({active: tab === 1})} onClick={() => setTab(1)}>Mercado Pago</TabItem>}
                  {data?.pay_channels.includes('PayPal') && <TabItem className={classes({active: tab === 2})} onClick={() => setTab(2)}>PayPal</TabItem>}
                </TabsHeader>
                {data?.pay_channels.includes('Stripe') && <TabContent className={classes({active: tab === 0})}>
                  <CardWrapper>
                    <WrapperTitle className="with-m">Ingresá los datos de tu tarjeta.</WrapperTitle>
                    <FullWrapper className="full">
                      <CardNumberElement 
                        options={cardOptions}
                        onChange={(event) => {if(event.complete) setValues({cardValid: true})}}
                      />
                      {values.cardValid ? 
                      <IconInput width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip2)"><path d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11z" fill="#E8833F"/><path d="M8.19 15.962l5.656 5.656C18.53 20.37 22 16.101 22 11v-.312l-4.442-4.095-9.369 9.37z" fill="#D16115"/><path d="M11.277 13.464a1.3 1.3 0 010 1.804l-1.006 1.006a1.3 1.3 0 01-1.804 0L4.06 11.833a1.3 1.3 0 010-1.805l1.006-1.006a1.3 1.3 0 011.804 0l4.407 4.442z" fill="#fff"/><path d="M15.13 5.795a1.3 1.3 0 011.804 0l1.006 1.006a1.3 1.3 0 010 1.805l-7.634 7.6a1.3 1.3 0 01-1.804 0l-1.007-1.007a1.3 1.3 0 010-1.805l7.634-7.599z" fill="#fff"/></g><defs><clipPath id="clip2"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></IconInput>
                      :
                      <IconInput width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip2)"><path d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11z" fill="#828282"/><path d="M8.19 15.962l5.656 5.656C18.53 20.37 22 16.101 22 11v-.312l-4.442-4.095-9.369 9.37z" fill="#4F4F4F"/><path d="M11.277 13.464a1.3 1.3 0 010 1.804l-1.006 1.006a1.3 1.3 0 01-1.804 0L4.06 11.833a1.3 1.3 0 010-1.805l1.006-1.006a1.3 1.3 0 011.804 0l4.407 4.442z" fill="#fff"/><path d="M15.13 5.795a1.3 1.3 0 011.804 0l1.006 1.006a1.3 1.3 0 010 1.805l-7.634 7.6a1.3 1.3 0 01-1.804 0l-1.007-1.007a1.3 1.3 0 010-1.805l7.634-7.599z" fill="#fff"/></g><defs><clipPath id="clip2"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></IconInput>
                      }
                    </FullWrapper>
                    <HalfWrapper>
                      <CardExpiryElement 
                        options={cardOptions}
                        onChange={(event) => {if(event.complete) setValues({expValid: true})}}
                      />
                    </HalfWrapper>
                    <HalfWrapper>
                      <CardCvcElement 
                        options={cardOptions}
                        onChange={(event) => {if(event.complete) setValues({cvcValid: true})}}
                      />
                    </HalfWrapper>
                    <Disclaimer>Todos los campos son obligatorios.</Disclaimer>
                    <SaveCardWrapper htmlFor="saveCard">
                      <SaveInput type="checkbox" checked={values.saveCard} id="saveCard" name="saveCard" onChange={(e: any) => setValues({saveCard: e.target.checked})}/>
                      <SaveSpan>
                        <SaveIcon width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 17a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" fill="#2B84E0"/><path d="M6.328 12.334l4.37 4.371C14.319 15.74 17 12.442 17 8.5v-.241l-3.432-3.164-7.24 7.24z" fill="#1B71BF"/><path d="M8.714 10.404a1.004 1.004 0 010 1.394l-.777.778a1.004 1.004 0 01-1.395 0L3.137 9.144a1.004 1.004 0 010-1.395l.778-.777a1.004 1.004 0 011.394 0l3.405 3.432z" fill="#fff"/><path d="M11.69 4.478a1.004 1.004 0 011.395 0l.777.778a1.004 1.004 0 010 1.394l-5.899 5.872a1.004 1.004 0 01-1.394 0l-.778-.777a1.004 1.004 0 010-1.395l5.9-5.872z" fill="#fff"/></SaveIcon>
                      </SaveSpan>
                      Guardar mi tarjeta
                    </SaveCardWrapper>
                    <BottomWrapper>
                      {values.complete !== 'success' ? <Button 
                        color="blue"
                        title="Pagar"
                        onClick={(e) => handleBuy(e)}
                        disabled={!values.cardValid || !values.expValid || !values.cvcValid || values.complete === 'loading'}
                        loading={values.complete === 'loading'}
                      /> :
                      <Button 
                        color="blue"
                        disabled={true}
                      >
                        <SaveIcon className="bigger" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11z" fill="#E8833F"/><path d="M8.19 15.962l5.656 5.656C18.53 20.37 22 16.101 22 11v-.312l-4.442-4.095-9.369 9.37z" fill="#D16115"/><path d="M11.277 13.464a1.3 1.3 0 010 1.804l-1.006 1.006a1.3 1.3 0 01-1.804 0L4.06 11.833a1.3 1.3 0 010-1.805l1.006-1.006a1.3 1.3 0 011.804 0l4.407 4.442z" fill="#fff"/><path d="M15.13 5.795a1.3 1.3 0 011.804 0l1.006 1.006a1.3 1.3 0 010 1.805l-7.634 7.6a1.3 1.3 0 01-1.804 0l-1.007-1.007a1.3 1.3 0 010-1.805l7.634-7.599z" fill="#fff"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></SaveIcon>
                        Compra realizada
                      </Button>
                      }
                      <LogoList>
                        <ListItem src="/images/visa-logo.png" />
                        <ListItem src="/images/american-express-logo.png" />
                        <ListItem src="/images/mastercad-logo.png" />
                      </LogoList>
                    </BottomWrapper>
                  </CardWrapper>
                </TabContent>}
                {data?.pay_channels.includes('MercadoPago') && <TabContent className={classes({active: tab === 1})}>
                  <LogoImage src="/images/mercadopago-logo.png" />
                  <WrapperTitle>Para poder continuar debes iniciar sesión con tu cuenta de Mercado Pago.</WrapperTitle>
                  <ButtonWrapper>
                    <Button 
                      color="blue"
                      title="Pagar"
                      onClick={() => getRedirect('mercadopago')}
                    />
                  </ButtonWrapper>
                </TabContent>}
                {data?.pay_channels.includes('PayPal') && <TabContent className={classes({active: tab === 2})}>
                  <LogoImage src="/images/paypal-logo.png" />
                  <WrapperTitle>Para poder continuar debes iniciar sesión con tu cuenta de PayPal.</WrapperTitle>
                  <ButtonWrapper>
                    <Button 
                      color="blue"
                      title="Pagar"
                      onClick={() => getRedirect('paypal')}
                    />
                  </ButtonWrapper>
                </TabContent>}
              </TabsContainer>
            </React.Fragment>}
            {modal.open && <Portal selector="body">
              <ModalOverlay>
                <Modal>
                  {modal.image && <ModalImage src="/images/ready-checkout.png" />}
                  <ModalText>{modal.text}</ModalText>
                  <NextWrapper onClick={() => closeModal()}>
                    Entendido
                    <NextIcon width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.354 4.354a.5.5 0 000-.708L10.172.464a.5.5 0 00-.708.708L12.293 4 9.464 6.828a.5.5 0 10.708.708l3.182-3.182zM.5 4.5H13v-1H.5v1z" fill="#1B71BF"/></NextIcon>
                  </NextWrapper>
                </Modal>
              </ModalOverlay>
            </Portal>}
            <DisclaimerWrapper>
              <DisclaimerGlobal>
                Ante cualquier duda envíame tu consulta en <Link href="/contacto" passHref><DisclaimerLink>contacto</DisclaimerLink></Link> y te responderé a la brevedad.
              </DisclaimerGlobal>
            </DisclaimerWrapper>
          </Content>
        </Container>
      </Section>
    </Layout>
  )
});



const stripePromise = loadStripe('pk_test_Sw9pQbuMKU7Sq0aGBDTmtPi500bFTCDYlM');
const CheckoutWrapped: NextPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  )
}

export default CheckoutWrapped;