import React from 'react';
import Head from 'next/head';
import { parseCookies } from 'nookies';
import { Layout } from '../components/layout';
import { UserModal } from '../components/usermodal';
import { Loading } from '../components/loading';
import { Container } from '../components/layout/layout.styles';

import { useRouter } from 'next/router';

import { 
  Section, LoadingContainer
} from '../components/pages/sign.styles';

const SignIn = ({referrer, loggedIn}: any) => {
  
  const router = useRouter();

  React.useEffect(() => {
    if(loggedIn) router.push(router.query.referrer ? router.query.referrer as string: '/cursos')
  }, [router])

  return !loggedIn ? 
    <Layout noMenu noFooter backToTop={false}>
      <Section>
        <Container className="full-viewheight" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
          <UserModal is="login" referrer={referrer} />
        </Container>
      </Section>
    </Layout>
     : 
    <LoadingContainer>
      <Loading color="#000" />
    </LoadingContainer>
}

SignIn.getInitialProps = async (ctx: any) => {
  const { tcdgToken } = parseCookies(ctx);
  if(tcdgToken){
    return { loggedIn: true };
  }
}

export default SignIn;