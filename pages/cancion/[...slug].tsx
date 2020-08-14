import React from 'react';
import axios from 'axios';
import https from 'https';
import { NextPage } from 'next';
import { parseCookies } from 'nookies';
import { observer } from 'mobx-react-lite';
import Error from 'next/error';
import { Global } from '../../components/global';
import { ModalSubscribe } from '../../components/modalsubscribe';
import { ModalPrizes } from '../../components/modalprizes';
import { useMergeState } from '../../helpers/hooks';
import { useRouter } from 'next/router';
import { useStores } from '../../stores/hooks';
import { finishSong as finishSongService } from '../../services';

import {
  VideoStyled, VideoContainer,
  MenuContainer, MenuTop, MenuBottom,
  ClassTitle, MidContainer, MidTitle, ButtonContainer,
  MidSubtitle, TablaturaButton,TrackContainer,
  TrackTitle, VideoIframe,
  TablaturaIcon, VideoIframeWrapper,
  FinishButton, TrackPlayerStyled, FinishedButton,
  FinishedButtonIcon, BackContainer, BackIcon,
  BackLink, ClassTitleMobile
} from '../../components/pages/video.styles';

import { classes, API_URI } from '../../helpers';

interface Props {
  song?: any;
  children?: any;
  id?: any;
}

const Song: NextPage = observer(({song, id}: Props) => {
  if(!song) return <Error statusCode={404} />
  console.log(song)
  
  const router = useRouter();
  const { rootStore: { userStore, videoStore }} = useStores();

  const [open, setOpen] = useMergeState({
    subscribe: false,
    modal: false,
    prizes: [],
    subscribe_close: false
  });

  React.useEffect(() => {
    if(!userStore.logged) router.push(`/signup?referrer=${encodeURIComponent(window.location.pathname)}&back=${encodeURIComponent(`/cancion/${song.slug}/`)}`)
  }, [router, userStore])

  if(userStore.user && !song.free && !userStore.subscripted && !open.subscribe){
    setOpen({subscribe: true, subscribe_close: true})
  }

  const finishSong = () => {
    finishSongService(song.slug,
      (data) => {
        if(data.result){
          if(data.rewards.length > 0){
             setOpen({
               prizes: data.rewards,
               modal: true
             })
          }
        }
      },
      (data) => {
        console.log(data)
        alert('Error. Contactenos.')
      }
    )
  }

  const closeModalPrizes = () => {
    setOpen({modal: false});
  }

  return (
    <VideoStyled>
      <Global />
      <VideoContainer>
        <BackContainer onClick={() => router.push(`/cursos`)}>
          <BackIcon width="22" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.646 3.411a.5.5 0 000 .707L3.828 7.3a.5.5 0 00.707-.707L1.707 3.765 4.535.936A.5.5 0 003.828.23L.646 3.411zm21.001-.146H1v1h20.647v-1z" fill="#F2F2F2"/></BackIcon>
          <BackLink>Volver a cursos</BackLink>
        </BackContainer>
        <ClassTitleMobile>{song.title} - {song.author}</ClassTitleMobile>
        <VideoIframeWrapper>
          <VideoIframe 
            src={`${song.video}?byline=false&autoplay=false&portrait=false&speed=true&title=false&show_vimeo_logo=false`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoIframeWrapper>
      </VideoContainer>
      <MenuContainer>
        <MenuTop>
          <ClassTitle>{song.title}</ClassTitle>
        </MenuTop>
        <MenuBottom>
          <MidContainer>
            <MidTitle>{song.title} - {song.author}</MidTitle>
            <MidSubtitle>{song.description}</MidSubtitle>
            <ButtonContainer>
              <TablaturaButton color="" onClick={() => {window.open(song.tablatura, '_blank')}}>
                Tablatura
                <TablaturaIcon width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" transform="rotate(-90 9 9)" fill="#1B71BF"/><path d="M8.646 13.354a.5.5 0 00.708 0l3.182-3.182a.5.5 0 10-.708-.708L9 12.293 6.172 9.464a.5.5 0 10-.708.708l3.182 3.182zM8.5 4v9h1V4h-1z" fill="#fff"/></TablaturaIcon>
              </TablaturaButton>
            </ButtonContainer>
            <TrackContainer>
              <TrackTitle>Backing track</TrackTitle>
              <TrackPlayerStyled 
                audio="/sounds/sound.mp3"
                download={true}
                downloadUri={undefined}
              />
            </TrackContainer>
            {userStore.logged && !song.complete ?
              <FinishButton 
                title="Dar por finalizada la cancion"
                color="lightOrange"
                onClick={() => {finishSong()}}
              /> : 
              <FinishedButton color="blue" onClick={() => {}}>
                <FinishedButtonIcon src="/images/check.svg" alt="Check SVG" />
                Clase finalizada
              </FinishedButton>
            }
          </MidContainer>
        </MenuBottom>
      </MenuContainer>
      {open.subscribe && <ModalSubscribe 
        onClose={() => {setOpen({subscribe: false})}}
        close={open.subscribe_close}
      />}
      {open.modal && <ModalPrizes prizes={open.prizes} handleClose={() => closeModalPrizes()} />}
    </VideoStyled>
  )
})

Song.getInitialProps = async (ctx) => {
  const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  const { tcdgToken } = parseCookies(ctx);
  try {
    const { data } = await axios.get(`${API_URI}/song/${ctx.query?.slug ? ctx.query.slug[0] : ''}`, {
      headers: tcdgToken ? { Authorization: tcdgToken } : {},
      httpsAgent: agent
    })
    return {
      song: data
    }
  } catch (error) {
    if (ctx.res) {
      ctx.res.statusCode = 404
      return {
        course: undefined
      }
    }
  }
}

export default Song;