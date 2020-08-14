import axios from 'axios';
import https from 'https';
import { cookieParser, API_URI } from '../helpers';
const agent = new https.Agent({  
  rejectUnauthorized: false
});
export const finishSong = (song: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser();
  axios.post(`${API_URI}/song/end`, {song}, { headers: { Authorization: cookies.tcdgToken }, httpsAgent: agent})
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}