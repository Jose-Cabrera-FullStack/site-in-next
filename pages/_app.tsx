import React from 'react';
import Router from 'next/router'
import { AppContext } from 'next/app';
import { getSnapshot } from 'mobx-keystone';
import { ThemeProvider } from 'emotion-theming';
import { AnimatePresence } from 'framer-motion';
import { Head } from '../components/head';
import NProgress from 'nprogress';

import { initStore } from '../stores';
import { StoreProvider } from '../stores/provider';

import { IEModal } from '../components/iemodal';

import { theme } from '../helpers/theme';

import 'animate.css';

const startProgress = () => NProgress.start();
const stopProgress = (timer: any) => {
  clearTimeout(timer);
  NProgress.done();
};

const showProgressBar = (delay: number) => {
  const timer = setTimeout(startProgress, delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

Router.events.on('routeChangeStart', () => showProgressBar(0));

const App = ({Component, pageProps, initialState, isIE = false, uagent}: any) => {
  if(isIE && !(uagent.search('Firefox') > 0)){
    return <IEModal />
  }
  return (
    <StoreProvider snapshot={initialState}>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Head key={1} />
          <Component {...pageProps} key={2}/>
        </AnimatePresence>
      </ThemeProvider>
    </StoreProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const isIE = (ctx?.req?.headers['user-agent']?.search(' rv:') as any) > 0;
  const store = initStore()

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { initialState: getSnapshot(store), pageProps, isIE, uagent: ctx?.req?.headers['user-agent']}
}

export default App