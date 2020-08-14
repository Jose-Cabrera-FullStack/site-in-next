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

const SignUp: NextPage = ({referrer, loggedIn}: any) => {

  const router = useRouter();

  React.useEffect(() => {
    if(loggedIn) router.push(router.query.referrer ? router.query.referrer as string: '/cursos')
  }, [router])

  return !loggedIn ? (
    <Layout noMenu noFooter backToTop={false}>
      <Section>
        <Container className="full-viewheight" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
          <UserModal is="signup" />
        </Container>
      </Section>
    </Layout>
  ) : 
  <LoadingContainer>
    <Loading color="#000" />
  </LoadingContainer>
}

SignUp.getInitialProps = async ctx => {
  const { tcdgToken } = parseCookies(ctx);
  if(tcdgToken){
    return { loggedIn: true };
  }
}


export default SignUp;