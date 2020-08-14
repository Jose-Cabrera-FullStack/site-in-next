import axios from 'axios';
import { model, Model, prop, modelAction } from 'mobx-keystone';
import { API_URI } from '../../helpers';

@model("tcdg/MenuStore")
export class MenuStore extends Model({
  data: prop(),
  fetching: prop(false)
}) {

  loadData(){
    if(!this.fetching){
      this.setFetching(true)
      this.fetchData()
      .then(data => {
        this.setMenuData(data)
      })
    }
  }

  @modelAction
  setMenuData(v: any){
    this.data = v;
  }

  @modelAction
  setFetching(v: boolean = !this.fetching){
    this.fetching = v;
  }

  async fetchData(){
    try {
      const { data } = await axios.get(`${API_URI}/menu`)
      return data;
    } catch (error) {
      return undefined
    }
  }
}
