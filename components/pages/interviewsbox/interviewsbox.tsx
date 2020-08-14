import React from 'react';
import Swiper from 'react-id-swiper';
import LazyLoad from 'react-lazyload';

import { ModalVideo } from '../../modalvideo'

import {
  LeftArrow, RightArrow,
} from '../../lessonlist/lessonlist.styles'

import { 
  StyledBox, InterviewBox, ImageWrapper, Image, PlayIcon, BottomContent, Title, Subtitle
} from './interviewsbox.styles'

interface Props {
  interviews: Array<any>;
}

export const InterviewsBox = ({interviews}: Props) => {
  const [url, setUrl] = React.useState('')
  const [swiper, setSwiper] = React.useState(undefined)

  const params = {
    loop: true,
    navigation: {
      nextEl: '.right-arrow',
      prevEl: '.left-arrow'
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    getSwiper: (swiperItem: any) => setSwiper(swiperItem)
  }

  return (
    <StyledBox>
      {url && <ModalVideo src={`${url}?autoplay=1&enablejsapi=1`} onClose={() => setUrl('')}/>}
      <Swiper {...params}>
        {interviews.map((item, k) => (
          <InterviewBox key={k} onClick={() => setUrl(item.videoUri)}>
            <ImageWrapper>
              <Image data-background={item.image} className="swiper-lazy">
                <PlayIcon width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><g clipPath="url(#clip0)"><path d="M35.693 26.563l26.81 15.175-17.705 14.164-14.164 2.53-4.047-16.694 5.565-14.164 3.54-1.012z" fill="#fff"/><path d="M70 43.002A27.003 27.003 0 0043.094 16v18.833l11.128 5.782a2.655 2.655 0 010 4.71l-11.128 5.822V70A27.002 27.002 0 0070 43.002z" fill="#2B84E0"/><path d="M36.983 54.339c-.38.199-.801.303-1.23.303a2.65 2.65 0 01-2.529-1.937 2.62 2.62 0 01-.1-.718V34.014a2.662 2.662 0 013.854-2.332l6.115 3.176V16h-.09a27.002 27.002 0 100 54h.09V51.147l-6.11 3.192z" fill="#1B71BF"/></g></g><defs><clipPath id="clip0"><path fill="#fff" d="M16 16h54v54H16z"/></clipPath><filter id="filter0_d" x="0" y="0" width="86" height="86" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="8"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.63 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></PlayIcon>
              </Image>
            </ImageWrapper>
            <BottomContent>
              <Title>{item.title}</Title>
              {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
            </BottomContent>
          </InterviewBox>
        ))}
      </Swiper>
      <LeftArrow className="left-arrow" onClick={() => {(swiper as any).slidePrev()}} />
      <RightArrow className="right-arrow" onClick={() => {(swiper as any).slideNext()}} />
    </StyledBox>
  )
}