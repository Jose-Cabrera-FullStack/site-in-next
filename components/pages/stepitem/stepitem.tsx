import ReactWOW from 'react-wow';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

import { Step, StepImage, StepNumber, StepTitle, StepText, StepContainer, ImageWrapper } from './stepitem.styles';

import { useRouter } from 'next/router';

interface Props {
  image: string;
  title: string;
  number: string;
  text: string;
  delay?: string;
  url?: string;
  onClick?: () => void;
}

export const StepItem = ({image, title, number, text, delay = '0s', url = '', onClick}: Props) => {
  if(typeof onClick !== "function"){
    return (
      <ReactWOW animation="fadeInLeft" delay={delay}>
        <Step href={url}>
          <ImageWrapper>
            <LazyLoad offset={150} once={true}><StepImage src={image} /></LazyLoad>
          </ImageWrapper>
          <StepContainer>
            <StepNumber>{number}</StepNumber>
            <StepTitle>{title}</StepTitle>
            <StepText>{text}</StepText>
          </StepContainer>
        </Step>
      </ReactWOW>
    )
  } else {
    return (  
      <ReactWOW animation="fadeInLeft" delay={delay}>
        <Step onClick={() => onClick()}>
          <ImageWrapper>
            <LazyLoad offset={150} once={true}><StepImage src={image} /></LazyLoad>
          </ImageWrapper>
          <StepContainer>
            <StepNumber>{number}</StepNumber>
            <StepTitle>{title}</StepTitle>
            <StepText>{text}</StepText>
          </StepContainer>
        </Step>
      </ReactWOW>
    )
  }
}

