import React from 'react';
import axios from 'axios';
import https from 'https';
import { NextPage } from 'next';
import { Loading } from '../components/loading';
import Error from 'next/error';
import { API_URI } from '../helpers';
import { useStores } from '../stores/hooks';
import { useRouter } from 'next/router';

import { 
  LoadingContainer
} from '../components/pages/sign.styles';

const Auth: NextPage = ({loggedIn = true, profile, token, referrer}: any) => {

  if(!loggedIn) return <Error statusCode={404} />

  const { rootStore: { userStore }} = useStores();
  const router = useRouter();

  React.useEffect(() => {
    userStore.setToken(token);
    userStore.setLogged(true);
    userStore.setUser(profile, () => {
      router.push(referrer ? referrer : '/cursos')
    })
  }, [userStore, profile, router, token])
  return (
    <LoadingContainer>
      <Loading color="#000" />
    </LoadingContainer>
  )
}

Auth.getInitialProps = async (ctx: any) => {
  const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  const t = ctx.query.token;
  if(!t){
    return { loggedIn: false };
  } else {
    try {
      const { data } = await axios.get(`${API_URI}/student/get`, {
        headers: { Authorization: t },
        httpsAgent: agent
      })
      return {
        profile: data,
        token: t,
        referrer: ctx.query.referrer
      }
    } catch (error) {
      return { loggedIn: false };
    }
  }
  
}

export default Auth;

