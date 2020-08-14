import React from 'react';
import Link from 'next/link';
import { FAQS } from '../helpers/faq';
import { Layout } from '../components/layout';

import { 
  Container,
  SmallTitle,
  SmallSubtitle,
  Disclaimer,
  DisclaimerLink
 } from '../components/layout/layout.styles'

 import { classes } from '../helpers'

 import {
  Section,
  Content,
  FaqBox,
  FaqTitle,
  FaqItem,
  FaqButton,
  FaqContent,
  FaqText,
  FaqButtonText,
  FaqButtonIcon,
  DisclaimerWrapper
} from '../components/pages/faq.styles'

 const FAQ = () => {
  const [active, setActive] = React.useState(-1)

  const updateActive = (n: number) => {
    if(active === n) n = -1;
    setActive(n)
  }
  return (
    <Layout>
      <Section>
        <Container>
          <SmallTitle>Preguntas Frecuentes</SmallTitle>
          <SmallSubtitle>Apuesto a que encuentras aquí tu respuesta!</SmallSubtitle>
          <Content>
            {FAQS.map((box, k) => (
              <FaqBox>
                <FaqTitle>{box.title}</FaqTitle>
                {box.questions.map((qs, j) => (
                  <FaqItem className={classes({active: active === ((k * 10) + j)})}>
                    <FaqButton onClick={() => updateActive((k * 10) + j)}>
                    <FaqButtonText>{qs.question}</FaqButtonText>
                      <FaqButtonIcon width="12" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L.804 0h10.392L6 9z" fill="#828282"/></FaqButtonIcon>
                    </FaqButton>
                    <FaqContent>
                      <FaqText>{qs.answer}</FaqText>
                    </FaqContent>
                  </FaqItem>
                ))}
              </FaqBox>
            ))}
            <DisclaimerWrapper>
              <Disclaimer>
              Si tu aún tienes dudas envíame tu consulta en mi sección de <Link href="/contacto" passHref><DisclaimerLink>contacto</DisclaimerLink></Link>.
              </Disclaimer>
            </DisclaimerWrapper>
          </Content>
        </Container>
      </Section>
    </Layout>
  )
 }

 export default FAQ