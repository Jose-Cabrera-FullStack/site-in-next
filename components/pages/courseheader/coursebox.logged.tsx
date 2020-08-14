import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '../../button';
import { ModalVideo } from '../../modalvideo';

import { 
  Title, Header, BottomIcon,
  Video, ContentBox, BottomText,
  VideoContainer, VideoIcon, 
  CompletedWrapper, CompletedText, 
  CompletedBarFull, CompletedBar,
  InfoBox, BoxLeft, BoxRight,
  LeftImage, LeftTitle, RightBottom,
  RightTop, TopIcon, TopText, TopWrapper,

} from '../course.styles';

interface Props {
  course?: any;
}

import { calculateCompleted } from '../../lessonlist/helpers';
import { observer } from 'mobx-react-lite';
import { returnLevel } from '../../../helpers';

export const CourseHeaderLogged = observer(({course}: Props) => {

  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const percentage = Math.floor(calculateCompleted(course.lessons))
  let lastFinished = 0;
  course.lessons.forEach((element: any, k: number) => {
    if(element.complete) lastFinished = k + 1
  });
  if(lastFinished === course.lessons.length) lastFinished = lastFinished - 1;
  return (
    <Header className="logged">
      <ContentBox>
        <Title>{course.title}</Title>
        <CompletedWrapper>
          <CompletedText>{`${percentage}% completado`} - {course.lessons.filter((item: any) => item.complete).length}/{course.lessons.length} clases</CompletedText>
          <CompletedBarFull>
            <CompletedBar style={{width: `${percentage}%`}}></CompletedBar>
          </CompletedBarFull>
        </CompletedWrapper>
        <Button 
          title={percentage === 0 ? "Comenzar curso" :  percentage === 100 ? "Volver a aprender" : "Continuar aprendiendo"}
          color="darkBlue"
          onClick={() => {router.push(`/video/${course.slug}/${lastFinished + 1}/`)}}
        />
        <InfoBox>
          <BoxLeft>
            <LeftImage src={`/images/${course.guitar}.png`} />
            <LeftTitle>Guitarra {course.guitar}</LeftTitle>
          </BoxLeft>
          <BoxRight>
            <RightTop>
              <TopWrapper>
                <TopIcon width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)" fill="#2B84E0"><path d="M10.5 0C4.71 0 0 4.71 0 10.5S4.71 21 10.5 21 21 16.29 21 10.5 16.29 0 10.5 0zm0 18.79c-4.57 0-8.29-3.72-8.29-8.29 0-4.57 3.72-8.29 8.29-8.29 4.57 0 8.29 3.72 8.29 8.29 0 4.57-3.72 8.29-8.29 8.29z"/><path d="M14.5 9.634a1 1 0 010 1.732l-5.25 3.031a1 1 0 01-1.5-.866V7.47a1 1 0 011.5-.866l5.25 3.031z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h21v21H0z"/></clipPath></defs></TopIcon>
                <TopText>{course.lessons ? course.lessons.length : 0} clases</TopText>
              </TopWrapper>
              <TopWrapper>
                <TopIcon width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0C4.71 0 0 4.71 0 10.5S4.71 21 10.5 21 21 16.29 21 10.5 16.29 0 10.5 0zm0 18.79c-4.57 0-8.29-3.72-8.29-8.29 0-4.57 3.72-8.29 8.29-8.29 4.57 0 8.29 3.72 8.29 8.29 0 4.57-3.72 8.29-8.29 8.29z" fill="#2B84E0"/><path d="M16.136 10.176h-4.1a1.814 1.814 0 00-.597-.597V4.65a.94.94 0 10-1.879 0v4.93a1.802 1.802 0 00.94 3.337c.649 0 1.219-.345 1.536-.861h4.1a.94.94 0 000-1.88z" fill="#2B84E0"/></TopIcon>
                <TopText>{course.estimate} días</TopText>
              </TopWrapper>
            </RightTop>
            <RightBottom>
              <BottomIcon width="11" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M8.72.776C7.906.268 6.792 0 5.5 0 4.207 0 3.094.268 2.28.776 1.357 1.354.867 2.214.867 3.262c0 1.024.627 2.874 1.558 4.603.471.874.971 1.617 1.447 2.147.586.656 1.134.988 1.63.988.494 0 1.042-.332 1.629-.988.475-.53.975-1.273 1.446-2.147.932-1.729 1.558-3.579 1.558-4.603 0-1.048-.49-1.908-1.415-2.486z" fill={course.level >= 1 ? '#1B71BF' : '#828282'}/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h11v11H0z"/></clipPath></defs></BottomIcon>
              <BottomIcon width="11" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M8.72.776C7.906.268 6.792 0 5.5 0 4.207 0 3.094.268 2.28.776 1.357 1.354.867 2.214.867 3.262c0 1.024.627 2.874 1.558 4.603.471.874.971 1.617 1.447 2.147.586.656 1.134.988 1.63.988.494 0 1.042-.332 1.629-.988.475-.53.975-1.273 1.446-2.147.932-1.729 1.558-3.579 1.558-4.603 0-1.048-.49-1.908-1.415-2.486z" fill={course.level >= 2 ? '#1B71BF' : '#828282'}/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h11v11H0z"/></clipPath></defs></BottomIcon>
              <BottomIcon width="11" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M8.72.776C7.906.268 6.792 0 5.5 0 4.207 0 3.094.268 2.28.776 1.357 1.354.867 2.214.867 3.262c0 1.024.627 2.874 1.558 4.603.471.874.971 1.617 1.447 2.147.586.656 1.134.988 1.63.988.494 0 1.042-.332 1.629-.988.475-.53.975-1.273 1.446-2.147.932-1.729 1.558-3.579 1.558-4.603 0-1.048-.49-1.908-1.415-2.486z" fill={course.level >= 3 ? '#1B71BF' : '#828282'}/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h11v11H0z"/></clipPath></defs></BottomIcon>
              <BottomText>Nivel {returnLevel(course.level)}</BottomText>
            </RightBottom>
          </BoxRight>
        </InfoBox>
      </ContentBox>

      <VideoContainer style={{backgroundImage: `url(${course.thumb})`}} onClick={() => setOpen(true)}>
        <Video />
        <VideoIcon src="/images/play-home.svg" />
      </VideoContainer>
      {open && <ModalVideo src={`${course.previewVideo}?autoplay=1`} onClose={() => setOpen(false)} />}
    </Header>
  )
});