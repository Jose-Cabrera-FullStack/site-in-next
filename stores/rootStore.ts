import { model, Model, prop, modelAction, tProp} from 'mobx-keystone';

import { 
  UserStore,
  TunerStore,
  TrackPlayerStore,
  MenuStore,
  CourseStore,
  VideoStore,
  CheckoutStore
} from './stores';

import { rootCtx } from './contexts'

@model("tcdg/RootStore")
export class RootStore extends Model({ 
  userStore: prop<UserStore>(() => new UserStore({})),
  tunerStore: prop<TunerStore>(() => new TunerStore({})),
  playerStore: prop<TrackPlayerStore>(() => new TrackPlayerStore({})),
  menuStore: prop<MenuStore>(() => new MenuStore({})),
  coursesStore: prop<CourseStore>(() => new CourseStore({ filteredCategories: ['all']})),
  videoStore: prop<VideoStore>(() => new VideoStore({})),
  checkoutStore: prop<CheckoutStore>(() => new CheckoutStore({}))
}) {
  
}
