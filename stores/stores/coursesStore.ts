import { model, Model, prop, modelAction, tProp, types } from 'mobx-keystone';
import { setMusicPref } from '../../services';
import { toJS } from 'mobx';

@model("tcdg/CourseStore")
export class CourseStore extends Model({
  filteredCategories: tProp(types.array(types.string)),
  categories: prop(),
}) {
  
  @modelAction
  setAllCategory(){
    this.filteredCategories = ['all'];
    setMusicPref([], (response) => {
      // console.log(response)
    })
  }

  @modelAction
  removeAllCategory(callback?: () => void){
    if(this.filteredCategories.includes('all')) this.filteredCategories.splice(this.filteredCategories.indexOf('all'), 1);
    if(typeof callback === "function") callback();
  }

  @modelAction
  setCategoriesArray(s: Array<any>){
    this.categories = s;
  }

  @modelAction
  setCategoriesFromUser(a: string[]){
    this.filteredCategories = toJS(a);
  }

  @modelAction
  setCategories(s: string, c: boolean = false){
    if(s === 'all'){
      this.setAllCategory();
    } else {
      this.removeAllCategory(() => {
        if(c) {
          this.filteredCategories = [...this.filteredCategories, s]
          setMusicPref(this.filteredCategories, (response) => {
            // console.log(response)
          })
        } else {
          this.filteredCategories.splice(this.filteredCategories.indexOf(s), 1)
          if(this.filteredCategories.length === 0) this.setAllCategory();
        }
      })
    }
  }
}
