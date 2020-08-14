import React from 'react';
import { findDOMNode } from 'react-dom'
// import screenfull from 'screenfull';

// const sf: any = screenfull as any;

import { useMergeState } from '../../helpers/hooks'

import { formatTime } from './helpers'

import {
  VideoContainer, StyledVideo,
  ControlsContainer, ProgressBar,
  ProgressControl, BottomControls,
  PlayButton, TimeWrapper,
  TimeText, AudioInput,
  FullScreen, VideoWrapper,
  RightConfigurations, PlayIcon,
  LeftConfigurations, TimeLoading as Loading
} from './video.styles'

import { classes } from '../../helpers';

interface Props {
  mp4: string;
  ogg?: string
  poster?: string;
  autoplay?: boolean;
  fullScreen?: boolean;
  onExitFullScreen?: () => {};
}

export const Video = ({mp4, ogg, poster, autoplay = false, fullScreen = false, onExitFullScreen}: Props) => {

  const player = React.createRef<HTMLDivElement>()

  const [videoProps, setVideoProps] = useMergeState({
    currentPlayed: 0,
    total: 0,
    playing: false,
    isFullScreen: fullScreen
  })

  const exitHandler = () => {
    if (!document.fullscreenElement) setVideoProps({isFullScreen: false})
  }

  const requestFullScreen = (_v?: boolean) => {
    _v = typeof _v === "boolean" ? _v : videoProps.isFullScreen;
    if(_v){
      // sf.exit();
      if(typeof onExitFullScreen === "function") onExitFullScreen();
      document.removeEventListener('fullscreenchange', exitHandler);
      document.removeEventListener('webkitfullscreenchange', exitHandler);
      document.removeEventListener('mozfullscreenchange', exitHandler);
      document.removeEventListener('MSFullscreenChange', exitHandler);
    } else {
      // sf.request(findDOMNode(player.current));
      document.addEventListener('fullscreenchange', exitHandler);
      document.addEventListener('webkitfullscreenchange', exitHandler);
      document.addEventListener('mozfullscreenchange', exitHandler);
      document.addEventListener('MSFullscreenChange', exitHandler);
    }
    setVideoProps({isFullScreen: !_v})
  }

  const onVideoEnd = () => {
    setVideoProps({playing: false, currentPlayed: 0})
  }

  React.useEffect(() => {
    if(videoProps.isFullScreen) requestFullScreen(false)
    // sf.onchange(() => {
    //   if (sf.isEnabled && videoProps.currentPlayed !== 0) setVideoProps({isFullScreen: false});
    // })
  }, [])


  return (
    <VideoContainer ref={player}>
      <VideoWrapper className={classes({onfullscreen: videoProps.isFullScreen})}>
      </VideoWrapper>
      <ControlsContainer>
        <ProgressBar>
          <ProgressControl style={{width: `${(videoProps.currentPlayed * 100) / videoProps.total}%`}}>

          </ProgressControl>
        </ProgressBar>
        <BottomControls>
          <LeftConfigurations>
            <PlayButton onClick={() => setVideoProps({playing: !videoProps.playing})}>
              {!videoProps.playing && <PlayIcon width="21" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11L0 22V0l21 11z" fill="#fff"/></PlayIcon>}
              {videoProps.playing && <PlayIcon height="436" viewBox="-45 0 327 327" width="436" xmlns="http://www.w3.org/2000/svg"><path d="M158 0h71a8 8 0 018 8v311a8 8 0 01-8 8h-71a8 8 0 01-8-8V8a8 8 0 018-8zm0 0M8 0h71a8 8 0 018 8v311a8 8 0 01-8 8H8a8 8 0 01-8-8V8a8 8 0 018-8zm0 0" fill="#fff"/></PlayIcon>}
            </PlayButton>
            <TimeWrapper>
              <TimeText>
                {formatTime(videoProps.currentPlayed)}
                  &nbsp;-&nbsp;
                {videoProps.total === 0 ? <Loading size={15} /> : formatTime(videoProps.total)}
                {/* <Loading size={14} /> */}
              </TimeText>
            </TimeWrapper>
          </LeftConfigurations>
          <RightConfigurations>
            <AudioInput>

            </AudioInput>
            <FullScreen onClick={() => requestFullScreen()} width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.114 16.366h10.771c.344-.003.672-.134.915-.366.243-.231.38-.544.384-.871V4.871A1.219 1.219 0 0016.8 4a1.343 1.343 0 00-.915-.366H5.115A1.343 1.343 0 004.198 4c-.242.231-.38.544-.383.871v10.258c.003.327.14.64.383.871.243.232.572.363.915.366zM7.022 5.452h6.944c.345 0 .677.13.922.361.245.232.385.546.388.875v6.613c0 .33-.138.648-.384.882a1.343 1.343 0 01-.926.365H7.022a1.343 1.343 0 01-.918-.369 1.218 1.218 0 01-.38-.878V6.688c.003-.327.14-.64.384-.871.242-.231.57-.363.914-.365zM1.908 14.548H0v4.216c.003.326.14.64.384.87.242.232.57.363.914.366h4.426v-1.817H2.732a.846.846 0 01-.583-.23.766.766 0 01-.24-.555v-2.85zM1.908 2.602c0-.208.087-.408.241-.555a.846.846 0 01.583-.23h2.992V0H1.298a1.343 1.343 0 00-.914.365C.14.597.003.91 0 1.237v4.215h1.908v-2.85zM19.092 17.398a.766.766 0 01-.241.555.846.846 0 01-.583.23h-2.992V20h4.426c.343-.003.672-.134.914-.365.243-.232.381-.545.384-.872v-4.215h-1.908v2.85zM15.276 0v1.817h2.992c.218 0 .428.083.583.23a.766.766 0 01.241.555v2.85H21V1.237a1.219 1.219 0 00-.384-.872A1.343 1.343 0 0019.702 0h-4.426z" fill="#fff"/></FullScreen>
          </RightConfigurations>
        </BottomControls>
      </ControlsContainer>
    </VideoContainer>
  )
}