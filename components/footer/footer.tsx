import React from 'react';
import { animateScroll } from 'react-scroll';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';

import { Tuner } from '../tuner';

import {
  StyledFooter, Row, FooterLeft, FooterRight, 
  LeftMenuList, ListItem, ListHeader, 
  SocialList, SocialItem, FooterLogo, 
  StyledButton, FooterLow, FooterCopyright, BackToTop
} from './footer.styles';

import { Container } from '../layout/layout.styles';
import { classes } from '../../helpers';

interface Props {
  noFooter: boolean;
  backToTop: boolean;
}

export const Footer = ({noFooter, backToTop}: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledFooter className={classes({noFooter})}>
      <Container>
        {backToTop && <BackToTop width="37" height="37" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => animateScroll.scrollToTop()}><circle cx="18.5" cy="18.5" r="18.5" transform="rotate(90 18.5 18.5)" fill="#E8833F"/><path d="M19.225 7.685a1.5 1.5 0 00-2.122 0L7.557 17.23a1.5 1.5 0 002.122 2.121l8.485-8.485 8.485 8.485a1.5 1.5 0 002.122-2.121l-9.546-9.546zm.44 21.915V8.745h-3V29.6h3z" fill="#2B84E0"/></BackToTop>}
        {!noFooter && <Row>
          <FooterLeft>
            <LeftMenuList>
              <ListHeader>Accesos</ListHeader>
              <Link href="/cursos" passHref><ListItem title="Cursos">Cursos</ListItem></Link>
              <Link href="/suscripciones" passHref><ListItem title="Suscripciones">Suscripciones</ListItem></Link>
              <Link href="/contacto" passHref><ListItem title="Contacto">Contacto</ListItem></Link>
              <Link href="/preguntas-frecuentes" passHref><ListItem title="Preguntas frecuentes">Preguntas frecuentes</ListItem></Link>
            </LeftMenuList>
            <StyledButton title="Afinador" onClick={() => setOpen(true)} color="orange" />
            {open && <Tuner onClose={() => setOpen(false)}/>}
          </FooterLeft>
          <FooterRight>
            <LazyLoad><FooterLogo src="/images/logo-premium.png" /></LazyLoad>
          </FooterRight>
          <FooterLow>
            <FooterLeft>
              <SocialList>
                <SocialItem href="https://www.youtube.com/user/mariofreiria" target="_blank">
                  <svg width="29" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.29 6.36A6.145 6.145 0 0022.156.216H6.262A6.145 6.145 0 00.127 6.36v7.449a6.136 6.136 0 006.135 6.144h15.921a6.136 6.136 0 006.136-6.135L28.29 6.36zm-10.045 4.106l-6.35 3.482c-.27.15-.521-.056-.521-.372V6.435c0-.317.251-.522.53-.363l6.397 3.64a.419.419 0 01-.056.754z" fill="#fff"/></svg>
                </SocialItem>
                <SocialItem href="https://www.facebook.com/tusclasesdeguitarratcdg/" target="_blank">
                  <svg width="15" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.884 14.972v13.853a.363.363 0 00.363.354h5.149a.354.354 0 00.353-.354V14.748h3.724a.353.353 0 00.354-.335l.363-4.236a.364.364 0 00-.363-.391H9.75V6.778a1.285 1.285 0 011.276-1.284h2.858a.354.354 0 00.363-.354V.894a.363.363 0 00-.363-.363H9.051a5.176 5.176 0 00-5.167 5.167v4.088h-2.57a.363.363 0 00-.363.363v4.236a.373.373 0 00.363.363h2.57v.224z" fill="#fff"/></svg>
                </SocialItem>
                <SocialItem href="https://www.instagram.com/tusclasesdeguitarra/" target="_blank">
                  <svg width="31" height="31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.365 9.228a1.76 1.76 0 100-3.52 1.76 1.76 0 000 3.52zM15.555 7.962a7.383 7.383 0 107.373 7.383 7.392 7.392 0 00-7.373-7.383zm0 12.103a4.73 4.73 0 114.73-4.73 4.739 4.739 0 01-4.73 4.74v-.01z" fill="#fff"/><path d="M21.41 30.325H9.446a9.013 9.013 0 01-9.003-9.003V9.358A9.012 9.012 0 019.446.365H21.41a9.012 9.012 0 019.003 8.993v11.964a9.012 9.012 0 01-9.003 9.003zM9.446 3.176a6.191 6.191 0 00-6.182 6.182v11.964a6.182 6.182 0 006.182 6.182H21.41a6.182 6.182 0 006.182-6.182V9.358a6.19 6.19 0 00-6.182-6.182H9.446z" fill="#fff"/></svg>
                </SocialItem>
              </SocialList>
            </FooterLeft>
            <FooterRight>
              <FooterCopyright>
                COPYRIGHT © 2012 - 2020 TUS CLASES DE GUITARRA
              </FooterCopyright>
            </FooterRight>
          </FooterLow>
        </Row>}
      </Container>
    </StyledFooter>
  )
}