import axios from 'axios';
import https from 'https';
import { cookieParser, API_URI } from '../helpers';

const agent = new https.Agent({  
  rejectUnauthorized: false
});

export const forgotPasswordService = (email: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  axios.post(`${API_URI}/recover`, {mail: email}, {httpsAgent: agent})
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch(({data}: any) => {
    if(typeof onError === "function") onError(data)
  })
}

export const updatePasswordService = (password: string, token: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  axios.post(`${API_URI}/setnewpass`, {pass: password, 'token-reset': token}, {httpsAgent: agent})
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch(({data}: any) => {
    if(typeof onError === "function") onError(data)
  })
}

export const updateProfile = (email: string, name: string, password: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser();
  axios.post(`${API_URI}/student/edit`, {mail: email, name: name, pass: password}, { headers: { Authorization: cookies.tcdgToken }, httpsAgent: agent })
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}

export const updateProfileAvatar = (avatar: any, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser();
  axios.post(`${API_URI}/student/avatar`, avatar, { headers: {
    'Authorization': cookies.tcdgToken,
    'Content-Type': 'multipart/form-data'
  }, httpsAgent: agent })
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}

export const checkoutSignup = (token: string, user: string, pass: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  axios.post(`${API_URI}/checkout/signup`, {token, mail: user, pass}, {httpsAgent: agent})
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}

export const setMusicPref = (musical_preferences: any[], onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser();
  axios.post(`${API_URI}/student/setPreferences`, {musical_preferences}, { headers: {
    'Authorization': cookies.tcdgToken
  }, httpsAgent: agent})
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}