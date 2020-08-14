import axios from 'axios';
import { model, Model, prop, modelAction, tProp, types } from 'mobx-keystone';
import { API_URI } from '../../helpers';
import https from 'https';

@model("tcdg/UserStore")
export class UserStore extends Model({
  user: prop(),
  token: tProp(types.string, ''),
  logged: tProp(types.boolean, false),
  subscripted: tProp(types.boolean, false)
}) {
  
  @modelAction
  setToken(t: string){
    if(!window.localStorage.getItem('token')){
      window.localStorage.setItem('token', t);
      document.cookie = `tcdgToken=${t};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      this.token = t;
    }
  }

  @modelAction
  setUser(data: any, callback?: () => void){
    this.user = data;
    if(data && !Array.isArray(data.subscription)) this.subscripted = true;
    if(typeof callback === "function") callback();
  }

  onInit(){
    if (!(typeof window === "undefined")) this.fromLocalStorage();
  }

  @modelAction
  setLogged(v: boolean){
    this.logged = v;
  }

  getDataFromToken(t: string){
    axios.get(`${API_URI}/student/get`, {
      headers: { Authorization: t }
    })
    .then(({data}: any) => {
      this.setUser(data)
    })
    .catch(({data}: any) => {
      this.logout();
    })
  }

  fromLocalStorage(){
    const t = window.localStorage.getItem('token');
    if(t) {
      this.setToken(t);
      this.setLogged(true);
      this.getDataFromToken(t)
    } else {
      document.cookie = `tcdgToken=qwe; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }

  login(user: string, pass: string, onSuccess: (data: any) => void, onError: (data?: any) => void){
    const agent = new https.Agent({  
      rejectUnauthorized: false
    });
    axios.post(`${API_URI}/login`, {user,pass}, {httpsAgent: agent})
    .then(({data}: any) => {
      if(data.result){
        this.setToken(data.token);
        this.setLogged(data.result);
        if(typeof onSuccess === "function") onSuccess(data)
      } else {
        if(typeof onError === "function") onError(data)
      }
    })
    .catch(() => {
      this.logout();
      if(typeof onError === "function") onError()
    })
  }

  signup(mail: string, pass: string, onSuccess: (data: any) => void, onError: (data?: any) => void){
    const agent = new https.Agent({  
      rejectUnauthorized: false
    });
    axios.get('https://extreme-ip-lookup.com/json/?key=rIYWtcUpWDpaEfSSHyea')
    .then(response => {
      axios.post(`${API_URI}/signup`, {mail, pass, countryCode: response.data ? response.data.countryCode : 'default'}, {httpsAgent: agent})
      .then(({data}: any) => {
        if(data.result){
          this.setToken(data.token);
          this.setLogged(data.result);
          if(typeof onSuccess === "function") onSuccess(data)
        } else {
          if(typeof onError === "function") onError(data)
        }
      })
      .catch(() => {
        this.logout();
        if(typeof onError === "function") onError()
      })
    })
  }

  logout(onSuccess?: () => void){
    // should unset logged
    localStorage.removeItem('token')
    document.cookie = `tcdgToken=qwe;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    this.setLogged(false);
    this.setUser(undefined)
    if(typeof onSuccess === "function") onSuccess()
  }

  getUserData(){
    const agent = new https.Agent({  
      rejectUnauthorized: false
    });
    axios.get(`${API_URI}/profile`, {httpsAgent: agent})
    .then(({data}: any) => {
      this.setUser(data);
    })

  }
}
