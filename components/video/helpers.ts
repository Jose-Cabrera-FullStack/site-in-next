export const formatTime = (s: number) => {
  let _r: any = '';
  if(s > 60){
    let seconds: any = s / 60;
    seconds = seconds.toString().split('.')
    _r = `${seconds[0]}:${seconds[1].slice(0, 2)}`
    if(s > 10) _r = '0'.concat(_r)
  } else {
    if(s < 10){
      _r = `00:0${s.toFixed()}`
    } else {
      _r = `00:${s.toFixed()}`
    }
  }
  if(s === 0) _r = '00:00'
  return _r
}