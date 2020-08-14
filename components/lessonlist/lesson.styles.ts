import styled from '@emotion/styled'

export const LessonImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform .2s ease-out;
  -webkit-border-radius: 12px 12px 0 0;
  -moz-border-radius: 12px 12px 0 0;
  -o-border-radius: 12px 12px 0 0;
  -ms-border-radius: 12px 12px 0 0;
  border-radius: 12px 12px 0 0;
`

export const LessonDetail = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity .2s ease-out;
  background: rgba(27,113,191, 0.85);
  z-index: 1;
  @media screen and (max-width: 600px){
    display: none;
  }
`;

export const LessonImageContainer = styled.div`
  width: 100%;
  padding-bottom: 73%;
  position: relative;
  overflow: hidden;
  -webkit-border-radius: 12px 12px 0 0;
  -moz-border-radius: 12px 12px 0 0;
  -o-border-radius: 12px 12px 0 0;
  -ms-border-radius: 12px 12px 0 0;
  border-radius: 12px 12px 0 0;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  &:hover{
    ${LessonDetail}{
      opacity: 1;
    }
  }
`

export const LessonBottom = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 12px 0;
`

export const LessonTitle = styled.a`
  width: 100%;
  min-height: 36px;
  color: ${({theme}: any) => theme.colors.lightOrange};
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  transition: color .2s ease-out;
  display: flex;
`

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`

export const Box = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const BoxText = styled.span`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  margin-left: 8px;
`

export const BoxImage = styled.img`
  width: 24px;
  height: 24px;
`


export const LevelWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
`

export const LevelText = styled.span`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  margin-left: 5px;
`

export const IconWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`


export const StyledLesson = styled.div`
  width: 250px!important;
  align-items: flex-start;
  background-color: ${({theme}: any) => theme.colors.gray6};
  border-radius: 12px;
  -webkit-border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover{
    ${LessonImage}{
      -webkit-border-radius: 12px 12px 0 0;
      -moz-border-radius: 12px 12px 0 0;
      -o-border-radius: 12px 12px 0 0;
      -ms-border-radius: 12px 12px 0 0;
      border-radius: 12px 12px 0 0;
      transform: scale(1.1);
    }
    ${LessonTitle}{
      color: ${({theme}: any) => theme.colors.orangeDarken};
    }
  }
  @media screen and (max-width: 812px) and (orientation: landscape){
    width: 200px!important;
    margin-left: 20px;
  }
  @media screen and (max-width: 600px){
    width: 231px!important;
  }
  & + & {
    @media screen and (max-width: 600px){
      margin-left: 15px;
    }
  }
`;

export const LessonProgress = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${({theme}: any) => theme.colors.gray3};
  position: relative;
`;

export const ProgressInner = styled.div`
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: linear-gradient(90deg, #E8833F 0%, #D16115 100%);
`;

export const ProgressSpan = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${({theme}: any) => theme.colors.gray6};
  position: absolute;
  right: 3px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const SeeMoreIcon = styled.svg`
  margin-left: 5px;
  transition: transform .2s ease-out;
`;

export const SeeMoreLink = styled.a`
  color: ${({theme}: any) => theme.colors.blue};
  font-size: 13px;
  line-height: 17px;
  margin-top: 2px;
  &:hover{
    ${SeeMoreIcon}{
      transform: translateX(5px);
    }
  }
`;

export const StartNextIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const StartText = styled.span`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  transition: color .2s ease-out;
`;

export const NewLabel = styled.span`
  background-color: ${({theme}: any) => theme.colors.lightBlue};
  color: ${({theme}: any) => theme.colors.white};
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  padding: 3px 5px;
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 1;
`;

export const StartNextWrapper = styled.div`
  width: 100%;
  align-items: center;
  background: ${({theme}: any) => theme.colors.gray5};
  border-radius: 0 0 12px 12px;
  -webkit-border-radius: 0 0 12px 12px;
  display: flex;
  justify-content: center;
  padding: 10px 15px 10px 20px;
  transition: background .2s ease-out;
  &:hover{
    background: ${({theme}: any) => theme.colors.lightBlue};
    ${StartText}{
      color: ${({theme}: any) => theme.colors.white};
    }
  }
`;