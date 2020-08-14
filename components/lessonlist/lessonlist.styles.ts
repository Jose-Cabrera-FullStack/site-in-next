import styled from '@emotion/styled'
import Swiper from 'react-id-swiper';

export const StyledLessonList = styled.div`
  width: 100%;
  margin-top: 40px;
  position: relative;
  .swiper-slide{
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    -o-border-radius: 12px;
    -ms-border-radius: 12px;
    border-radius: 12px;
  }
`

export const SwiperStyled = styled(Swiper)`
  width: 100%;
`

export const LeftArrow = styled.div`
  width: 38px;
  height: 38px;
  background-image: url('/images/arrow.svg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  margin: auto;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -19px;
  transition: background-image .2s ease-out;
  &:hover{
    background-image: url('/images/arrow-hover.svg');
    @media screen and (max-width: 900px){
      background-image: url('/images/arrow.svg');
    }
  }
  @media screen and (max-width: 900px){
    left: -10px;
  }
  @media screen and (max-width: 600px){
    display: none;
  }
`

export const RightArrow = styled.div`
  width: 38px;
  height: 38px;
  background-image: url('/images/arrow.svg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  margin: auto;
  transform: rotate(180deg);
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -19px;
  transition: background-image .2s ease-out;
  &:hover{
    background-image: url('/images/arrow-hover.svg');
    @media screen and (max-width: 900px){
      background-image: url('/images/arrow.svg');
    }
  }
  @media screen and (max-width: 900px){
    right: -10px;
  }
  @media screen and (max-width: 600px){
    display: none;
  }
`

export const SeeFullList = styled.a`
  align-items: center;
  color: ${({theme}: any) => theme.colors.lightOrange};
  cursor: pointer;
  display: flex;
  font-size: 17px;
  font-weight: 500;
  justify-content: flex-end;
  letter-spacing: -0.02em;
  line-height: 22px;
  margin: 20px 0;
  text-align: right;
  transition: transform .2s ease-out;
  &:hover{
    transform: translate(15px, 0);
  }
  @media screen and (max-width: 600px){
    font-size: 15px;
    justify-content: center;
    line-height: 18px;
  }
`

export const FullListIcon = styled.svg`
  margin-left: 8px;
`