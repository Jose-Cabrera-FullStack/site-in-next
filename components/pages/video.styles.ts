import styled from '@emotion/styled';

import { Button } from '../button';
import { TrackPlayer } from '../trackplayer'


export const VideoStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #052038;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 900px){
    min-height: 100vh;
    height: auto;
    flex-direction: column;
  }
`;

export const VideoContainer = styled.div`
  width: 72%;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1100px){
    width: 65%;
  }
  @media screen and (max-width: 900px){
    width: 100%;
    padding-top: 53px;
    flex-direction: column;
  }
  @media screen and (max-width: 600px){
  }
`;

export const MenuContainer = styled.div`
  width: 28%;
  height: 100%;
  border-left: 1px solid rgba(27, 113, 191, 0.2);
  overflow-y: scroll;
  /* overflow-x: hidden; */
  @media screen and (max-width: 1100px){
    width: 35%;
  }
  @media screen and (max-width: 900px){
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    border: 0;
  }
`;

export const MenuTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 35px;
  border-bottom: 1px solid rgba(27, 113, 191, 0.2);
  @media screen and (max-width: 1100px){
    padding: 25px;
  }
  @media screen and (max-width: 900px){
    padding: 0 0 15px;
  }
  @media screen and (max-width: 600px){
    border-bottom: 0;
  }
`;

export const MenuBottom = styled.div`
  @media screen and (max-width: 900px){
    width: 100%;
    padding-bottom: 40px;
  }
`;

export const ClassTitle = styled.h1`
  color: ${({theme}: any) => theme.colors.white};
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  @media screen and (max-width: 900px){
    display: none;
  }
`;

export const ClassTitleMobile = styled.h1`
  color: ${({theme}: any) => theme.colors.white};
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: none;
  @media screen and (max-width: 900px){
    display: flex;
    font-size: 16px;
    line-height: 18px;
    position: absolute;
    left: 170px;
    top: 17px;
  }
  @media screen and (max-width: 600px){
    width: 210px;
    left: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* top: 10px; */
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media screen and (max-width: 900px){
    display: none;
    margin-bottom: 20px;
    width: 95%;
  }
  &.mobile{
    display: none;
    @media screen and (max-width: 900px){
      display: flex;
    }
  }
`;

export const ProgressLabel = styled.p`
  color: ${({theme}: any) => theme.colors.white};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;
`;

export const ProgressBar = styled.div`
  width: 290px;
  height: 15px;
  background: #0A345A;
  border-radius: 3px;
  position: relative;
  @media screen and (max-width: 900px){
    width: 100%;
  }
`;

export const ProgressBarFull = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #1B71BF 0%, #1B71BF 100%);
  border-radius: 3px;
  position: absolute;
  left: 0;
  top: 0;
`;

export const MidContainer = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1100px){
    padding: 20px
  }
  @media screen and (max-width: 900px){
    padding: 30px 0 40px;
  }
  @media screen and (max-width: 600px){
    padding-top: 10px;
  }
`;

export const MidTitle = styled.h4`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 5px;
  @media screen and (max-width: 900px){
    font-size: 20px;
    line-height: 26px;
  }
`;

export const MidSubtitle = styled.p`
  color: ${({theme}: any) => theme.colors.gray6};
  font-size: 13px;
  line-height: 18px;
  @media screen and (max-width: 900px){
    font-size: 17px;
    line-height: 21px;
  }
  @media screen and (max-width: 900px){
    font-size: 14px;
    line-height: 19px;
  }
`;

export const TablaturaIcon = styled.svg`
  margin-left: 5px;
  @media screen and (max-width: 1100px){
    display: none;
  }
  @media screen and (max-width: 900px){
    display: block;
  }
  @media screen and (max-width: 600px){
    display: none;
  }
  circle {
    transition: fill .2s ease-out;
  }
`;

export const TablaturaButton = styled(Button)`
  font-weight: 500;
  padding: 7px 21px;
  background-color: #2B84E0;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  &:before{background-color: #1b69ba;}
  &:after{background-color: #1b69ba;}
  &:hover{
    color: white;
    ${TablaturaIcon}{
      circle {
        fill: #2B84E0;
      }
    }
  }
`;

export const AfinadorButton = styled(Button)`
  max-width: 120px;
  font-weight: 500;
  padding: 7px 21px;
  border: 1px solid ${({theme}: any) => theme.colors.white};
  background-color: #052038;
  margin-top: 30px;
  @media screen and (max-width: 600px){
    margin-top: 10px;
  }
  &:before{background-color: ${({theme}: any) => theme.colors.white};}
  &:after{background-color: ${({theme}: any) => theme.colors.white};}
  &:hover{color: #052038}
`;

export const TrackContainer = styled.div`
  width: calc(100% - 135px);
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  /* margin-top: 30px; */
  @media screen and (max-width: 1100px){
    width: calc(100% - 110px);
    margin-top: 15px;
  }
  @media screen and (max-width: 900px){
    width: calc(100% - 300px);
    margin-top: 0;
  }
  @media screen and (max-width: 812px) and (orientation: landscape){
    width: calc(100% - 150px);
  }
  @media screen and (max-width: 600px){
    width: calc(100% - 120px);
  }
`;

export const TrackTitle = styled.div`
  color: ${({theme}: any) => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 5px;
`;

export const LessonList = styled.div`
  width: 95%;
  max-height: 33vh;
  display: flex;
  flex-direction: column;
  margin: 10px auto 0;
  overflow-y: scroll;
  @media screen and (max-width: 1100px){
    overflow-y: scroll;
    height: 140px;
  }
  @media screen and (max-width: 900px){
    overflow-y: auto;
    height: 100%;
    max-height: 100%;
    margin-top: 20px;
  }
`;

export const LessonTitle = styled.h5`
  /* max-width: 250px; */
  max-width: 75%;
  color: ${({theme}: any) => theme.colors.white};
  font-size: 14px;
  line-height: 19px;
  @media screen and (max-width: 1300px){
    /* max-width: 190px; */
    font-size: 12px;
    line-height: 16px;
  }
  @media screen and (max-width: 600px){
    max-width: 180px;
    font-size: 12px;
    line-height: 17px;
  }
`;

export const LessonRight = styled.div`
  display: flex;
  flex-flow: row;
`;

export const RightTime = styled.span`
  color: ${({theme}: any) => theme.colors.gray6};
  font-size: 13px;
  font-style: italic;
  line-height: 17px;
  @media screen and (max-width: 1300px){
    font-size: 11px;
    line-height: 15px;
  }
`;

export const RightLabel = styled.span`
  color: #2B84E0;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  margin-right: 10px;
  @media screen and (max-width: 1300px){
    font-size: 11px;
    line-height: 15px;
  }
`;

export const LessonItem = styled.div`
  background: rgba(27, 113, 191, 0.5);
  border-radius: 5px;
  cursor: pointer;
  padding: 22px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background .2s ease-out;
  overflow: hidden;
  @media screen and (max-width: 900px){
    padding: 20px 15px;
  }
  &.active, &:hover{
    background: rgba(27, 113, 191, 0.8);
  }
  &.disabled{
    opacity: 0.3;
    &:hover{
      background: rgba(27, 113, 191, 0.5);
    }
  }
  & + & {
    margin-top: 12px;
    @media screen and (max-width: 900px){
      margin-top: 20px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 30px;
  &.two-btn{
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export const BtnVideoIcon = styled.svg`
  margin-right: 10px;
  &.reverse{
    margin-right: 0;
    margin-left: 10px;
    transform: rotate(180deg);
  }
`;

export const BtnVideo = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 20px;
  color: ${({theme}: any) => theme.colors.gray6};
  background-color: transparent;
  padding: 0;
  &:hover{
    font-weight: 500;
  }
  &.transparent{
    opacity: 0;
  }
  &.disabled{
    color: ${({theme}: any) => theme.colors.gray4};
    cursor: not-allowed;
    ${BtnVideoIcon}{
      path {
        fill: ${({theme}: any) => theme.colors.gray4};
      }
    }
  }
`;

export const ListTitle = styled.h3`
  color: ${({theme}: any) => theme.colors.white};
  font-weight: 500;
  font-size: 19px;
  line-height: 25px;
  padding-left: 25px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({theme}: any) => theme.colors.blue};
  margin: 7px 0;
`;

export const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const VideoIframeWrapper = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-top: 55.75%;
  position: relative;
`;

export const FinishButton = styled(Button)`
  max-width: 200px;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  padding: 14px 12px;
  margin-top: 20px;
  @media screen and (max-width: 600px){
    max-width: 220px;
  }
`;

export const FinishedButton = styled(Button)`
  max-width: 180px;
  cursor: default;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  padding: 8px 12px;
  margin-top: 20px;
  &:before{display: none;}
  &:after{display: none;}
  &:hover{color: ${({theme}: any) => theme.colors.white}!important;}
`;

export const FinishedButtonIcon = styled.img`
  width: 24px;
  margin-right: 10px;
`;

export const TrackPlayerStyled = styled(TrackPlayer)`
  width: 100%;
  /* margin-bottom: 5px; */
`;

export const BackIcon = styled.svg`
  width: 25px;
  margin-right: 7px;
`;

export const BackLink = styled.a`
  color: ${({theme}: any) => theme.colors.gray6};
  font-size: 17px;
  line-height: 22px;
  text-decoration: none;
  @media screen and (max-width: 900px){
    font-size: 13px;
    line-height: 17px;
  }
`;

export const BackContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  /* margin-top: 35px; */
  position: absolute;
  top: 20px;
  left: 20px;
  transition: font-weight .2s ease-out;
  @media screen and (max-width: 900px){
    width: 138px;
    background-color: ${({theme}: any) => theme.colors.lightBlue};
    margin-top: 0;
    height: 53px;
    top: 0;
    left: 0;
    padding-left: 8px;
  }
  @media screen and (max-width: 600px){
    font-size: 14px;
    line-height: 18px;
  }
  &:hover{
    ${BackLink}{
      font-weight: 500;
    }
  }
`;

