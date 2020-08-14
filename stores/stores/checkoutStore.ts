import { model, Model, prop, modelAction, tProp, types } from 'mobx-keystone';

@model("tcdg/CheckoutStore")
export class CheckoutStore extends Model({
  selected: prop()
}) {

  @modelAction
  setSelected(s: any){
    this.selected = s;
  }


}
