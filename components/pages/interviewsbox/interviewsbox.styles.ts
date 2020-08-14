import styled from '@emotion/styled'

export const StyledBox = styled.div`
  width: 100%;
  position: relative;
  .swiper-container{
    width: 90%;
    @media screen and (max-width: 600px){
      width: 100%;
    }
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 80%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 12px 12px 0 0;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
`
export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform .2s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
export const PlayIcon = styled.svg`
  width: 54px;
  height: 54px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const BottomContent = styled.div`
  padding: 25px;
`

export const Title = styled.h4`
  min-height: 63px;
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* margin-bottom: 15px; */
  transition: color .2s ease-out;
  @media screen and (max-width: 812px) and (orientation: landscape){
    min-height: 84px;
  }
`

export const Subtitle = styled.p`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
`


export const InterviewBox = styled.div`
  background: ${({theme}: any) => theme.colors.gray6};
  border-radius: 12px;
  @media screen and (max-width: 812px) and (orientation: landscape){
    width: 44%!important;
  }
  @media screen and (max-width: 600px){
    width: 287px;
  }
  &:hover{
    ${Image}{
      transform: scale(1.1);
    }
    ${Title}{
      color: ${({theme}: any) => theme.colors.blueDarken};
    }
  }
  & + & {
    margin-left: 15px;
    @media screen and (max-width: 812px) and (orientation: landscape){
      margin-left: 0;
    }
  }
`