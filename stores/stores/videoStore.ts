import { model, Model, prop, modelAction, tProp, types } from 'mobx-keystone';

import { calculateCompleted } from '../../components/lessonlist/helpers';

@model("tcdg/VideoStore")
export class VideoStore extends Model({
  course: prop(),
  percentage: prop(0)
}) {

  onInit(){}

  @modelAction
  setCourse(c: any){
    this.course = c;
    this.percentage = Math.floor(calculateCompleted(c.lessons))
  }

  @modelAction
  finishLesson(i: number){
    this.course.lessons[i].complete = true;
    this.percentage = Math.floor(calculateCompleted(this.course.lessons))
  }


}
