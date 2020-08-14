import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { parseCookies } from 'nookies';
import { Layout } from '../components/layout';
import { Loading } from '../components/loading';
import { UserModal } from '../components/usermodal';

import { Container } from '../components/layout/layout.styles';

import { useRouter } from 'next/router';

import { 
  Section, LoadingContainer
} from '../components/pages/sign.styles'

const SignUpPay: NextPage = ({loggedIn, referrer}: any) => {

  const router = useRouter();
  
  React.useEffect(() => {
    if(loggedIn) router.push(router.query.referrer ? router.query.referrer as string: '/cursos')
  }, [router])

  return !loggedIn ? (
    <Layout noMenu noFooter backToTop={false}>
      <Section className="bgImage">
        <Container className="full-viewheight" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <UserModal is={"payLogin"} />
        </Container>
      </Section>
    </Layout>
  ) : 
  <LoadingContainer>
    <Loading color="#000" />
  </LoadingContainer>
}

SignUpPay.getInitialProps = async ctx => {
  const { tcdgToken } = parseCookies(ctx);
  if(tcdgToken){
    return { loggedIn: true };
  }
}

export default SignUpPay;