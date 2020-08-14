import axios from 'axios';
import { API_URI } from '../helpers';
import https from 'https';

const agent = new https.Agent({  
  rejectUnauthorized: false
});

export const sendContact = async (name: string, email: string, message: string, onSuccess: (response: any) => void, onError?: (response: any) => void) => {
  axios.get('https://extreme-ip-lookup.com/json/?key=rIYWtcUpWDpaEfSSHyea')
  .then(response => {
    axios.post(`${API_URI}/contact/send`, {name, email, message, countryCode: response.data ? response.data.countryCode : 'default', country: response.data ? response.data.country : 'default'}, {httpsAgent: agent})
    .then(({data}: any) => {
      if(typeof onSuccess === "function") onSuccess(data)
    })
    .catch(({data}: any) => {
      if(typeof onError === "function") onError(data)
    })
  })
}