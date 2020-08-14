import styled from '@emotion/styled'

import { Button } from '../button'

export const HeaderSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url('/images/bg-home.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 812px) and (orientation: landscape){
    padding: 20px 0;
    min-height: 100vh;
    height: auto;
  }
  @media screen and (max-width: 600px){
    min-height: 100vh;
    height: auto;
  }
`;


export const HeaderContent = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderLogo = styled.img`
  width: 235px;
  margin-bottom: 35px;
  margin-top: 100px;
  @media screen and (max-width: 812px) and (orientation: landscape){
    width: 200px;
    margin-top: 60px;
  }
  @media screen and (max-width: 600px){
    width: 208px;
  }
`;

export const HeaderBtnContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`;

export const HeaderButton = styled(Button)`
  padding: 20px 35px;
  @media screen and (max-width: 600px){
    width: 205px;
    padding: 14px 0;
  }
  & + & {
    margin-left: 60px;
    @media screen and (max-width: 600px){
      margin: 15px 0 0;
    }
  }
  &.video{
    border: 1px solid ${({theme}: any) => theme.colors.white};
    padding: 14px 25px;
    background-color: transparent;
    @media screen and (max-width: 600px){
      
    }
  }
`;

export const ButtonIcon = styled.img`
  width: 31px;
  margin-right: 10px;
  @media screen and (max-width: 600px){
    width: 18px;
  }
`;

export const Section = styled.section`
  padding: 50px 0;
  @media screen and (max-width: 900px){
    padding: 35px 0;
  }
  .title-low{
    color: ${({theme}: any) => theme.colors.lightOrange};
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 10px;
    @media screen and (max-width: 600px){
      font-size: 24px;
      line-height: 28px;
    }
  }
  .subtitle-low{
    color: ${({theme}: any) => theme.colors.gray2};
    font-weight: normal;
    font-size: 17px;
    line-height: 27px;
    margin-bottom: 40px;
    @media screen and (max-width: 600px){
      line-height: 23px;
      margin-bottom: 30px;
    }
  }
`;

export const StepsList = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  @media screen and (max-width: 900px){
    margin-top: 30px;
  }
  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`;


export const ContentBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfilePicture = styled.img`
  width: 127px;
  height: 127px;
  margin-bottom: 15px;
`;

export const ExplainerVideoPlay = styled.img`
  width: 113px;
  height: 113px;
  cursor: pointer;
  margin: auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform .2s ease-out;
  @media screen and (max-width: 600px){
    width: 10%;
    height: auto;
  }
`;

export const ExplainerVideo = styled.div`
  width: 100%;
  align-items: center;
  background-image: url('/images/video_preview.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  margin-top: 35px;
  padding-bottom: 55%;
  position: relative;
  &:hover{
    ${ExplainerVideoPlay}{
      transform: scale(1.1);
    }
  }
`;

export const BackgroundVideo = styled.iframe`
  box-sizing: border-box;
  height: 56.25vw;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  width: 177.77777778vh;
  @media screen and (max-width: 900px){
    display: none;
  }
`;

export const VideoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/bg-home.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  overflow: hidden;
  @media screen and (max-width: 900px){
    display: none;
  }
`;

export const BackgroundVideoOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: 812px) and (orientation: landscape){
    display: none;
  }
  @media screen and (max-width: 700px){
    display: none;
  }
`;


export const HeaderSubtitle = styled.h3`
  max-width: 700px;
  font-size: 29px;
  line-height: 33px;
  color: #FFFFFF;
  margin-top: 40px;
  text-align: center;
  font-weight: 300;
  @media screen and (max-width: 700px){
    font-size: 16px;
    line-height: 21px;
  }
`;