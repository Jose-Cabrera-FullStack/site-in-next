import LazyLoad from 'react-lazyload';

import {
  QuoteItem, QuoteLeft, QuoteRight, QuoteImage, QuoteTitle, QuoteSubtitle, QuoteText, QuoteContent
} from './quote.styles'

interface Props {
  title: string;
  subtitle?: string;
  text: string;
  className?: string;
  image?: string;
}

export const Quote = ({title, subtitle, text, className, image}: Props) => {

  return (
    <QuoteItem className={className}>
      <QuoteLeft>
        <QuoteImage data-src={image} className="swiper-lazy" />
        <QuoteContent>
          <QuoteTitle>{title}</QuoteTitle>
          {subtitle && <QuoteSubtitle>{subtitle}</QuoteSubtitle>}
        </QuoteContent>
      </QuoteLeft>
      <QuoteRight>
        <QuoteText>{text}</QuoteText>
      </QuoteRight>
    </QuoteItem>
  )
}