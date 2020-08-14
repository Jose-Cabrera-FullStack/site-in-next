import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../stores/hooks';
import { classes } from '../../helpers';

import {
  TrackContainer, TrackWrapper,
  TrackIcon, DownloadTrack,
  ProgresBarFull, VolItem,
  ProgresBar, DownloadIcon,
  ProgresBarGrabber, VolList,
} from './trackplayer.styles';

interface Props {
  audio: string;
  downloadUri: any;
  className?: string;
  download?: boolean;
}

export const TrackPlayer = observer(({audio, className, download = false, downloadUri = undefined}: Props) => {

  const {rootStore: {playerStore}} = useStores();
  
  React.useEffect(() => {
    playerStore.setSource(audio);
  }, [playerStore, audio])

  return (
    <TrackWrapper className={className}>
      <TrackContainer>
        {!playerStore.playing ? 
          <TrackIcon onClick={() => playerStore.setPlay(true)} width="29" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" fill="#2B84E0"/><path d="M21 14.5L9 21V8l12 6.5z" fill="#fff"/></TrackIcon> :
          <TrackIcon onClick={() => playerStore.setPlay(false)} width="29" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="14.5" r="14.5" fill="#2B84E0"/><path fill="#fff" d="M9 9h3v11H9zM16 9h3v11h-3z"/></TrackIcon>   
        }    
        <ProgresBarFull>
          <ProgresBar style={{width: `${playerStore.currentPosition}%`}}>
            <ProgresBarGrabber />
          </ProgresBar>
        </ProgresBarFull>
        <VolList>
        <VolItem className={classes({active: playerStore.volume >= 0.25})} onClick={() => playerStore.setVolume(0)} />
        <VolItem className={classes({active: playerStore.volume >= 0.3})} onClick={() => playerStore.setVolume(0.3)} />
        <VolItem className={classes({active: playerStore.volume >= 0.6})} onClick={() => playerStore.setVolume(0.6)} />
        <VolItem className={classes({active: playerStore.volume >= 0.99})} onClick={() => playerStore.setVolume(1)} />
        </VolList>
      </TrackContainer>
      {download && <DownloadTrack href={downloadUri ? downloadUri : audio} target="_blank" download="file.mp3">
        <DownloadIcon width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" transform="rotate(-90 9 9)" fill="#1B71BF"/><path d="M8.646 13.354a.5.5 0 00.708 0l3.182-3.182a.5.5 0 10-.708-.708L9 12.293 6.172 9.464a.5.5 0 10-.708.708l3.182 3.182zM8.5 4v9h1V4h-1z" fill="#fff"/></DownloadIcon>
      </DownloadTrack>}
    </TrackWrapper>
  )
})