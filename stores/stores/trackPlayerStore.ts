import { model, Model, prop, modelAction, tProp, types } from 'mobx-keystone';

import {Howl, Howler} from 'howler';

@model("tcdg/TrackPlayerStore")
export class TrackPlayerStore extends Model({
  volume: tProp(types.number, 1),
  currentPosition: tProp(types.number, 0),
  playing: tProp(types.boolean, false)
}) {

  // Register sound
  audio: Howl = new Howl({
    src: [''],
    autoplay: false,
    loop: false,
    volume: this.volume,
  });

  i: any;

  @modelAction
  setVolume(n: number){
    this.volume = n;
    Howler.volume(n)
  }

  @modelAction
  setPosition(n: number){
    this.currentPosition = n;
  }

  @modelAction
  setPlay(s: boolean){
    if(s){
      this.audio.play()
    } else {
      this.audio.pause()
    }
    this.playing = s;
  }

  setSource(s: string){
    this.audio = new Howl({
      src: [s],
      format: 'mp3',
      autoplay: false,
      loop: false,
      volume: this.volume,
      onplay: () => {
        this.i = setInterval(() => {
          const value = ((this.audio.seek() as number) * 100) / this.audio.duration()
          this.setPosition(value);
        }, 20)
      },
      onend: () => {
        clearInterval(this.i)
        this.setPosition(100);
        this.setPlay(false);
      },
      onpause: () => {
        clearInterval(this.i)
      }
    });
  }
}
