import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/layout';
import axios from 'axios';
import https from 'https';
import { API_URI } from '../helpers';
import { Loading } from '../components/loading';
import { useRouter } from 'next/router';

import { 
  LoadingContainer
} from '../components/pages/sign.styles';

import {
  Section, Title,
  SubscriptionBox, TopContent,
  Label, LabelIcon, SubscriptionsContainer,
  List, ListItem, MenuItem,
  PlanName, PriceWrapper,
  CurrentPrice, OldPrice,
  Discount, Divider,
  StyledButton, ButtonWrapper
} from '../components/pages/subscriptions.styles';

const Subscriptions: NextPage  = () => {
  const [data, setData] = React.useState<any>();
  const router = useRouter();
  let { countryCode } = router.query;

  const getData = async () => {
    axios.get('https://extreme-ip-lookup.com/json/?key=rIYWtcUpWDpaEfSSHyea')
    .then(response => {
      const agent = new https.Agent({  
        rejectUnauthorized: false
      });
      axios.get(`${API_URI}/payment/prices?&countryCode=${countryCode ? countryCode : response.data ? response.data.countryCode : 'default'}`, {httpsAgent: agent})
      .then(response2 => {
        setData(response2.data)
        console.log('set', response.data)
        countryCode = response.data ? response.data.countryCode : undefined;
      })
    })
  }
  
  React.useEffect(() => {
    getData();
  }, [])

  console.log(countryCode)

  return (
    <Layout>
      <Section>
        <Title>Suscríbete y comienza a tocar!</Title>
        <SubscriptionsContainer>
          {!data && 
            <LoadingContainer style={{height: '500px'}} className="hauto">
              <Loading color="#B84800" />
            </LoadingContainer>
          }
          {data?.plans && data.plans['Anual'] && <SubscriptionBox>
            <Label>
              <LabelIcon width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0l2.125 4.575 5.008.607-3.695 3.435.97 4.95L7.5 11.116l-4.408 2.453.97-4.95L.367 5.181l5.008-.607L7.5 0z" fill="#FFF"/></LabelIcon>
              RECOMENDADO
            </Label>
            <TopContent>
              <PlanName>Plan Anual</PlanName>
              <PriceWrapper>
                <CurrentPrice>{data && data.symbol} {data.plans['Anual'].price}</CurrentPrice>
                <OldPrice> antes {data && data.symbol} {data && data.plans['Anual'].list_price}</OldPrice>
              </PriceWrapper>
              {data.plans['Anual'].discount && <Discount>Dcto. {parseInt(data.plans['Anual'].discount)}% OFF</Discount>}
              <Divider />
            </TopContent>
            <List>
              <ListItem>Más de 30 cursos disponibles</ListItem>
              <ListItem>Más de 230 lecciones</ListItem>
              <ListItem>Más de 50 horas de tutoriales en video</ListItem>
              <ListItem>Cursos de guitarra acústica y eléctrica para principiantes y avanzados</ListItem>
              <ListItem>Técnica y digitación de púa y dedos (fingerstyle)</ListItem>
              <ListItem>Acordes, cejillas, arpegios, ritmos y rasgueos</ListItem>
              <ListItem>Escalas de Rock y Blues</ListItem>
              <ListItem>Solos de Guitarra e Improvisación</ListItem>
              <ListItem>Estilos de grandes guitarristas</ListItem>
              <ListItem>Teoría musical (NUEVO!)</ListItem>
              <ListItem>Velocidad, articulaciones, recursos y mas!</ListItem>
            </List>
            <ButtonWrapper>
              <StyledButton
                title="Comprar plan"
                color="orange"
                to={`/checkout?plan=Anual${countryCode ? `&countryCode=${countryCode}` : ''}`}
              />
            </ButtonWrapper>
          </SubscriptionBox>}
        </SubscriptionsContainer>
      </Section>
    </Layout>
  )
}

Subscriptions.getInitialProps = async ctx => {}


export default Subscriptions;