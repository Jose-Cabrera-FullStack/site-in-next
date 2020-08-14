import {Howl, Howler} from 'howler';

export class Player {
  audio: Howl;

  constructor(s: string){
    this.audio = new Howl({
      src: [s],
      autoplay: false,
      loop: false,
      volume: 1
    });
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
}