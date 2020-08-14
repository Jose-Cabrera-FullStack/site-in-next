import React from 'react';
import axios from 'axios';
import https from 'https';
import { NextPage } from 'next';
import { parseCookies } from 'nookies';
import { observer } from 'mobx-react-lite';
import Error from 'next/error';
import { Global } from '../../components/global';
import { Tuner } from '../../components/tuner';
import { ModalSubscribe } from '../../components/modalsubscribe';
import { ModalPrizes } from '../../components/modalprizes';

import { useMergeState } from '../../helpers/hooks';
import { useRouter } from 'next/router';
import { useStores } from '../../stores/hooks';

import { finishLesson as finishLessonService, startLesson } from '../../services';

import {
  VideoStyled, VideoContainer,
  MenuContainer, MenuTop, MenuBottom,
  ClassTitle, ProgressContainer, ProgressLabel,
  ProgressBar, ProgressBarFull,
  MidContainer, MidTitle, ButtonContainer,
  MidSubtitle, TablaturaButton,
  AfinadorButton, TrackContainer,
  TrackTitle, LessonList, VideoIframe,
  LessonTitle, LessonRight, TablaturaIcon,
  RightTime, RightLabel, LessonItem,
  ListTitle, Divider, VideoIframeWrapper,
  FinishButton, TrackPlayerStyled, FinishedButton,
  FinishedButtonIcon, BackContainer, BackIcon,
  BackLink, ClassTitleMobile, BtnVideo, BtnVideoIcon
} from '../../components/pages/video.styles';

import { classes, API_URI } from '../../helpers';

interface Props {
  course?: any;
  children?: any;
  id?: any;
}

const Video: NextPage = observer(({course, id}: Props) => {
  if(!course) return <Error statusCode={404} />
  
  const router = useRouter();
  const { rootStore: { userStore, videoStore }} = useStores();

  const videoId = parseInt(id[1]) - 1;
  const video = course.lessons[videoId];

  const [open, setOpen] = useMergeState({
    subscribe: false,
    completed: false,
    modal: false,
    prizes: [],
    subscribe_close: false
  });

  React.useEffect(() => {
    if(!userStore.logged) router.push(`/signup?referrer=${encodeURIComponent(window.location.pathname)}&back=${encodeURIComponent(`/curso/${course.slug}/`)}`)
  }, [router, userStore])

  if(userStore.user && !video.free && !userStore.subscripted && !open.subscribe){
    setOpen({subscribe: true, subscribe_close: true})
  }
  
  const [afinador, openAfinador] = React.useState(false);
  
  React.useEffect(() => {
    videoStore.setCourse(course);
  }, [videoStore, course]);

  const finishLesson = () => {
    finishLessonService(video.slug, course.slug,
      (data) => {
        if(data.result){
          videoStore.finishLesson(videoId);
          if(data.rewards.length > 0){
             setOpen({
               prizes: data.rewards,
               modal: true
             })
          } else {
            setOpen({
              prizes: [],
              modal: true
            })
          }
        }
      },
      (data) => {
        alert('Error al terminar la clase. Contactenos.')
      }
    )
  }

  const hasSubscription = (k: number, prev: boolean = false) => {
    if(!videoStore.course.lessons[k].free && !userStore.subscripted) {
      setOpen({subscribe: true})
    } else {
      if(!prev){
        router.push(`/video/${videoStore.course.slug}/${k + 1}/`)
      } else {
        router.push(`/video/${videoStore.course.slug}/${k}/`)
      }
    }
  }

  const closeModalPrizes = () => {
    setOpen({modal: false});
    if((videoId + 1) === course.lessons.length){
      router.push(`/cursos`)
    } else {
      hasSubscription(videoId + 1);
    }
  }

  return (
    <VideoStyled>
      <Global />
      <VideoContainer>
        <BackContainer onClick={() => router.push(`/curso/${course.slug}`)}>
          <BackIcon width="22" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.646 3.411a.5.5 0 000 .707L3.828 7.3a.5.5 0 00.707-.707L1.707 3.765 4.535.936A.5.5 0 003.828.23L.646 3.411zm21.001-.146H1v1h20.647v-1z" fill="#F2F2F2"/></BackIcon>
          <BackLink>Volver al panel</BackLink>
        </BackContainer>
        <ClassTitleMobile>{course.title}</ClassTitleMobile>
          <ProgressContainer className="mobile">
            <ProgressLabel>{videoStore.percentage}% completado</ProgressLabel>
            <ProgressBar>
              <ProgressBarFull style={{width: `${videoStore.percentage}%`}}/>
            </ProgressBar>
          </ProgressContainer>
        <VideoIframeWrapper>
          {videoStore.course && videoStore.course.lessons[videoId].video && <VideoIframe 
            src={`${videoStore.course.lessons[videoId].video}?byline=false&autoplay=false&portrait=false&speed=true&title=false&show_vimeo_logo=false`}
            //src={video.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />}
        </VideoIframeWrapper>
      </VideoContainer>
      <MenuContainer>
        <MenuTop>
          <ClassTitle>{course.title}</ClassTitle>
          <ProgressContainer>
            <ProgressLabel>{videoStore.percentage}% completado</ProgressLabel>
            <ProgressBar>
              <ProgressBarFull style={{width: `${videoStore.percentage}%`}}/>
            </ProgressBar>
          </ProgressContainer>
          {/* <ButtonContainer className="two-btn mobile">
            <BtnVideo className={classes({disabled: videoId === 0})} onClick={videoId === 0 ? () => {} : () => hasSubscription(videoId + 1, true)}>
              <BtnVideoIcon width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8.5" stroke="#fff"/><path d="M4.646 8.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L5.707 9l2.829-2.828a.5.5 0 10-.708-.708L4.646 8.646zM14 8.5H5v1h9v-1z" fill="#fff"/></BtnVideoIcon>
              Anterior clase
            </BtnVideo>
            <BtnVideo className={classes({disabled: videoStore.course?.lessons.length === (videoId + 1)})} onClick={videoStore.course?.lessons.length === (videoId + 1) ? () => {} : () => hasSubscription(videoId + 1)}>
              Siguiente clase
              <BtnVideoIcon className="reverse" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8.5" stroke="#fff"/><path d="M4.646 8.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L5.707 9l2.829-2.828a.5.5 0 10-.708-.708L4.646 8.646zM14 8.5H5v1h9v-1z" fill="#fff"/></BtnVideoIcon>
            </BtnVideo>
          </ButtonContainer> */}
        </MenuTop>
        <MenuBottom>
          <MidContainer>
            <MidTitle>{videoId + 1}. {video.title}</MidTitle>
            <MidSubtitle>{video.description}</MidSubtitle>
            <ButtonContainer className="btn">
              {video.tablatura && <TablaturaButton color="" onClick={() => {window.open(video.tablatura, '_blank')}}>
                Tablatura
                <TablaturaIcon width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" transform="rotate(-90 9 9)" fill="#1B71BF"/><path d="M8.646 13.354a.5.5 0 00.708 0l3.182-3.182a.5.5 0 10-.708-.708L9 12.293 6.172 9.464a.5.5 0 10-.708.708l3.182 3.182zM8.5 4v9h1V4h-1z" fill="#fff"/></TablaturaIcon>
              </TablaturaButton>}
              {video.backtrack && <TrackContainer>
                <TrackTitle>Backing track</TrackTitle>
                <TrackPlayerStyled 
                  audio={video.backtrack}
                  download={true}
                  downloadUri={video.download}
                />
              </TrackContainer>}
            </ButtonContainer>
            {videoStore.course && (
              !videoStore.course.lessons[videoId].complete ? 
              <FinishButton 
                title="Dar por finalizada la clase"
                color="lightOrange"
                onClick={() => {finishLesson()}}
              /> : 
              <FinishedButton color="blue" onClick={() => {}}>
                <FinishedButtonIcon src="/images/check.svg" alt="Check SVG" />
                Clase finalizada
              </FinishedButton>
            )}
            <ButtonContainer className="two-btn">
              <BtnVideo className={classes({transparent: videoId === 0})} onClick={() => hasSubscription(videoId, true)}>
                <BtnVideoIcon width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8.5" stroke="#fff"/><path d="M4.646 8.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L5.707 9l2.829-2.828a.5.5 0 10-.708-.708L4.646 8.646zM14 8.5H5v1h9v-1z" fill="#fff"/></BtnVideoIcon>
                Clase anterior
              </BtnVideo>
              {videoStore.course?.lessons.length !== (videoId + 1) && <BtnVideo  onClick={() => hasSubscription(videoId + 1)}>
                Siguiente clase
                <BtnVideoIcon className="reverse" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8.5" stroke="#fff"/><path d="M4.646 8.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L5.707 9l2.829-2.828a.5.5 0 10-.708-.708L4.646 8.646zM14 8.5H5v1h9v-1z" fill="#fff"/></BtnVideoIcon>
              </BtnVideo>}
            </ButtonContainer>
            <AfinadorButton 
              title="Afinador"
              color=""
              onClick={() => openAfinador(true)}
            />
            {afinador && <Tuner onClose={() => openAfinador(false)} />}
          </MidContainer>
          <ListTitle>Clases</ListTitle>
          <Divider />
          <LessonList>
            {videoStore.course && videoStore.course.lessons.map((item: any, k: number) => (
              <LessonItem key={k} onClick={() => {hasSubscription(k)}} className={classes({disabled: item.free === 1, active: (k + 1) == parseInt(id[1])})}>
                <LessonTitle>{`${k + 1}. ${item.title}`} {item.complete && <RightLabel>Finalizada</RightLabel>}</LessonTitle>
                <LessonRight>
                  <RightTime>{item.duration} min</RightTime>
                </LessonRight>
              </LessonItem>
            ))}
          </LessonList>
        </MenuBottom>
      </MenuContainer>
      {open.subscribe && <ModalSubscribe 
        onClose={() => {setOpen({subscribe: false})}}
        close={open.subscribe_close}
      />}
      {open.modal && <ModalPrizes prizes={open.prizes} handleClose={() => closeModalPrizes()} lastClass={(videoId + 1) === course.lessons.length} />}
    </VideoStyled>
  )
})

Video.getInitialProps = async (ctx) => {
  const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  const { tcdgToken } = parseCookies(ctx);
  try {
    const { data } = await axios.get(`${API_URI}/course/detail/${ctx.query.id ? ctx?.query.id[0] : ''}`, {
      headers: tcdgToken ? { Authorization: tcdgToken } : {},
      httpsAgent: agent
    })
    return {
      course: data,
      id: ctx.query.id
    }
  } catch (error) {
    console.log('Error from video inner', error)
    if (ctx.res) {
      ctx.res.statusCode = 404
      return {
        course: undefined
      }
    }
  }
}

export default Video;