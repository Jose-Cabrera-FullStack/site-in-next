import React from 'react';
import Link from 'next/link'

import { Lesson } from './lesson'

import {
  StyledLessonList,
  SwiperStyled,
  LeftArrow,
  RightArrow,
  SeeFullList,
  FullListIcon
} from './lessonlist.styles'

interface Props {
  lessons: Array<any>;
  href?: string;
  logged?: boolean;
}

export const LessonList = ({lessons = [], href, logged = false}: Props) => {

  const [swiper, setSwiper] = React.useState(undefined)

  const params = {
    loop: lessons.length > 4 ? true : false,
    navigation: {
      nextEl: '.right-arrow-unique',
      prevEl: '.left-arrow-unique',
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        loop: false,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    getSwiper: (swiperItem: any) => setSwiper(swiperItem)
  }
  
  return (
    <React.Fragment>
      <StyledLessonList>
        <SwiperStyled {...params}>
          {lessons && lessons.map((item, k) => (
            <Lesson 
              key={k}
              image={item.cover}
              title={item.title}
              slug={item.slug}
              isNew={item.new}
              classes={item.lessons}
              duration={item.estimate}
              level={item.level}
              className="swiper-slide"
              isLogged={logged}
            />
          ))}
        </SwiperStyled>
        {lessons.length > 4 && <LeftArrow className="left-arrow-unique" onClick={() => (swiper as any).slidePrev()} />}
        {lessons.length > 4 && <RightArrow className="right-arrow-unique" onClick={() => (swiper as any).slideNext()} />}
      </StyledLessonList>
      {href && <Link href={href} passHref>
        <SeeFullList>
          Ver todos los cursos
          <FullListIcon width="26" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.707 8.707a1 1 0 000-1.414L19.343.929a1 1 0 10-1.414 1.414L23.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h25V7H0v2z" fill="#E8833F"/>
          </FullListIcon>
        </SeeFullList>
      </Link>}
    </React.Fragment>
  )
}