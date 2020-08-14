import { model, Model, prop, modelAction, tProp, types } from 'mobx-keystone';

import {Howl, Howler} from 'howler';

import { rootCtx } from '../contexts'

@model("tcdg/TunerStore")
export class TunerStore extends Model({
  volume: tProp(types.number, 1)
}) {

  // Register sounds
  sounds: Array<Howl> = [];

  startSound(n: number){
    this.sounds.map(s => s.stop())
    this.sounds[n - 1].play();
  }

  setAudios(){
    this.sounds = [
      new Howl({
        src: ['/sounds/sound.mp3'],
        autoplay: false,
        loop: false,
        volume: this.volume,
      }),
      new Howl({
        src: ['/sounds/sound.mp3'],
        autoplay: false,
        loop: false,
        volume: this.volume,
      }),
      new Howl({
        src: ['/sounds/sound.mp3'],
        autoplay: false,
        loop: false,
        volume: this.volume,
      }),
      new Howl({
        src: ['/sounds/sound.mp3'],
        autoplay: false,
        loop: false,
        volume: this.volume,
      }),
      new Howl({
        src: ['/sounds/sound.mp3'],
        autoplay: false,
        loop: false,
        volume: this.volume,
      }),
      new Howl({
        src: ['/sounds/sound.mp3'],
        autoplay: false,
        loop: false,
        volume: this.volume,
      })
    ]
  }

  onInit(){
    
  }

  @modelAction
  setVolume(n: number){
    this.volume = n;
    Howler.volume(n);
  }

  @modelAction
  close(callback: () => void){
    this.sounds.map(s => s.stop())
    setTimeout(() => {
      if(typeof callback === "function") callback()
    }, 300)
  }
}
