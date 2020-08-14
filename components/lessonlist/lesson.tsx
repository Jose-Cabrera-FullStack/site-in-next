import Link from 'next/link';
import { useRouter } from 'next/router';
import { classes as classesCSS, returnLevel } from '../../helpers';
import LazyLoad from 'react-lazyload';
import { Button } from '../button';

import { calculateCompleted, calculateNext }  from './helpers';

import { 
  LessonImage, LessonProgress,
  ProgressInner, ProgressSpan,
  StyledLesson, LessonImageContainer,
  LessonTitle, LessonBottom, IconWrap,
  BottomWrapper, Box, BoxText,
  BoxImage, LevelText, LevelWrapper,
  StartNextWrapper, StartNextIcon, StartText,
  NewLabel, LessonDetail
} from './lesson.styles'

interface Props {
  image: string;
  title: string;
  classes: Array<any>;
  duration: string;
  level: number;
  className?: string;
  isLogged?: boolean;
  isNew?: boolean;
  slug: string;
}

export const Lesson = ({image, slug, isNew = false, title, classes = [], duration, level, className, isLogged = false}: Props) => {
  const router = useRouter();
  const completed = calculateCompleted(classes)
  let next = 1;
  if(isLogged) {next = calculateNext(classes)}

  const renderLevel = () => {
    return(
      <LevelWrapper>
        <IconWrap>
          <svg width="12" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.437 1.722C8.532 1.157 7.293.86 5.853.86s-2.678.298-3.583.863C1.24 2.366.696 3.322.696 4.49c0 1.14.697 3.2 1.734 5.124.524.973 1.08 1.8 1.61 2.39.652.73 1.263 1.1 1.813 1.1.551 0 1.161-.37 1.814-1.1.53-.59 1.086-1.417 1.61-2.39C10.314 7.69 11.01 5.63 11.01 4.49c0-1.167-.544-2.123-1.574-2.767z" fill={level >= 1 ? '#1B71BF' : '#828282'}/></svg>
          <svg width="12" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.437 1.722C8.532 1.157 7.293.86 5.853.86s-2.678.298-3.583.863C1.24 2.366.696 3.322.696 4.49c0 1.14.697 3.2 1.734 5.124.524.973 1.08 1.8 1.61 2.39.652.73 1.263 1.1 1.813 1.1.551 0 1.161-.37 1.814-1.1.53-.59 1.086-1.417 1.61-2.39C10.314 7.69 11.01 5.63 11.01 4.49c0-1.167-.544-2.123-1.574-2.767z" fill={level >= 2 ? '#1B71BF' : '#828282'}/></svg>
          <svg width="12" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.437 1.722C8.532 1.157 7.293.86 5.853.86s-2.678.298-3.583.863C1.24 2.366.696 3.322.696 4.49c0 1.14.697 3.2 1.734 5.124.524.973 1.08 1.8 1.61 2.39.652.73 1.263 1.1 1.813 1.1.551 0 1.161-.37 1.814-1.1.53-.59 1.086-1.417 1.61-2.39C10.314 7.69 11.01 5.63 11.01 4.49c0-1.167-.544-2.123-1.574-2.767z" fill={level >= 3 ? '#1B71BF' : '#828282'}/></svg>
        </IconWrap>
        <LevelText>Nivel {returnLevel(level)}</LevelText>
      </LevelWrapper>
    )
  }


  return (
    <StyledLesson className={classesCSS(className, {logged: isLogged})}>
      <LessonImageContainer onClick={() => router.push(`/curso/${slug}`)}>
        <LazyLoad><LessonImage style={{backgroundImage: `url(${image})`}}></LessonImage></LazyLoad>
        {isLogged && isNew && <NewLabel>NUEVO</NewLabel>}
        <LessonDetail>
          <Button 
            title="Ver detalles del curso"
            color="lightOrange"
            to={`/curso/${slug}`}
          />
        </LessonDetail>
      </LessonImageContainer>
      {isLogged && <LessonProgress onClick={() => router.push(`/curso/${slug}`)}>
        <ProgressInner style={{width: `${completed}%`}}></ProgressInner>
        <ProgressSpan>{completed}%</ProgressSpan>
      </LessonProgress>}
      <LessonBottom onClick={() => router.push(`/curso/${slug}`)}>
        <LessonTitle>{title}</LessonTitle>
        {renderLevel()}
        <BottomWrapper>
          <Box>
            <BoxImage src="/images/play-blue.svg" />
            <BoxText>{classes.length} clases</BoxText>
          </Box>
          <Box>
            <BoxImage src="/images/clock-blue.svg" />
            <BoxText>{duration} {duration == "1" ? "dia" : "dias"}</BoxText>
          </Box>
        </BottomWrapper>
      </LessonBottom>
      {isLogged && <StartNextWrapper onClick={() => router.push(`/video/${slug}/${next}/`)}>
        <StartNextIcon  src="/images/play-home.svg" />
        <StartText>{next === 1 || classes.length === 0 ? 'Comenzar primera clase' : 'Continuar con el curso'}</StartText>
      </StartNextWrapper>}
    </StyledLesson>
  )
}