import React from 'react';
import Head from 'next/head';

import { Layout } from '../components/layout';
import { ModalForgot as ForgotPassword} from '../components/usermodal';
import { Container } from '../components/layout/layout.styles';

import { 
  Section
} from '../components/pages/sign.styles';

const ForgotView = () => {

  return (
    <Layout noMenu noFooter>
      <Section>
        <Container className="full-viewheight" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
          <ForgotPassword />
        </Container>
      </Section>
    </Layout>
  )
}

export default ForgotView;