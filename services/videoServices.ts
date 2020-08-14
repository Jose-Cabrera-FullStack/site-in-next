import axios from 'axios';
import https from 'https';
import { cookieParser, API_URI } from '../helpers';
const agent = new https.Agent({  
  rejectUnauthorized: false
});
export const startLesson = (slug: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser();
  axios.post(`${API_URI}/lesson/start`, {lesson: slug}, { headers: { Authorization: cookies.tcdgToken }, httpsAgent: agent })
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}

export const finishLesson = (slug: string, courseSlug: string, onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser();
  axios.post(`${API_URI}/lesson/end`, {lesson: slug, course: courseSlug}, { headers: { Authorization: cookies.tcdgToken }, httpsAgent: agent })
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}

export const coursesPage = (onSuccess?: (data: any) => void, onError?: (data: any) => void) => {
  const cookies: any = cookieParser();
  const url = cookies.tcdgToken ? `${API_URI}/private/courses` : `${API_URI}/categories/courses`;
  // const url = `${API_URI}/categories/courses`;
  console.log('the url', url)
  axios.get(url, { headers: { Authorization: cookies.tcdgToken }, httpsAgent: agent})
  .then(({data}: any) => {
    if(typeof onSuccess === "function") onSuccess(data)
  })
  .catch((response: any) => {
    if(typeof onError === "function") onError(response)
  })
}