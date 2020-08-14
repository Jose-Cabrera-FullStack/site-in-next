import React from 'react';
import Swiper from 'react-id-swiper';

import { Quote } from './quote'

interface Props {
  quotes: Array<any>;
}

import {
  QuoteList,
} from './quotebox.styles'

import {
  LeftArrow,
  RightArrow,
} from '../lessonlist/lessonlist.styles'

export const QuoteBox = ({quotes}: Props) => {
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
        slidesPerView: 1,
      },
    },
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    getSwiper: (swiperItem: any) => setSwiper(swiperItem)
  }

  return (
    <QuoteList>
      <Swiper {...params}>
        {quotes.map((item, k) => (
          <Quote 
            key={k}
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
            image={item.image}
            className="swiper-slide"
          />
        ))}
      </Swiper>
      <LeftArrow className="left-arrow" onClick={() => {(swiper as any).slidePrev()}} />
      <RightArrow className="right-arrow" onClick={() => {(swiper as any).slideNext()}} />
    </QuoteList>
  )
}