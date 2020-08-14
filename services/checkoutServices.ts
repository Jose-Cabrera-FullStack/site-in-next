import axios from 'axios';
import { cookieParser, API_URI } from '../helpers';
import https from 'https';

const agent = new https.Agent({  
  rejectUnauthorized: false
});

export const getStripePK = (onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser();
  axios.post(`${API_URI}/student/edit`, {}, { headers: { Authorization: cookies.tcdgToken }, httpsAgent: agent })
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}

export const submitCheckout = (stripeToken: string, sucs: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser();
  axios.post(`${API_URI}/checkout/stripe`, {stripeToken, sucs}, { headers: { Authorization: cookies.tcdgToken }, httpsAgent: agent })
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}

export const getIntent = (plan: string, country: string, mail: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser()
  let options = {}
  if(cookies.tcdgToken) options = { headers: { Authorization: cookies.tcdgToken }, httpsAgent: agent }
  axios.post(`${API_URI}/checkout/stripe/intent`, {plan, country, mail}, options)
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}

export const assignPaypal = (token: string, mail: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  axios.post(`${API_URI}/checkout/paypal/assign`, {token, mail}, {httpsAgent: agent})
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}

export const getRedirectUri = (source: string, plan: string, country: string, email: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser()
  let options: any = {httpsAgent: agent}
  if(cookies.tcdgToken) options = { headers: { Authorization: cookies.tcdgToken }, httpsAgent: agent }
  axios.post(`${API_URI}/checkout/${source}`, {plan, country, email}, options)
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}