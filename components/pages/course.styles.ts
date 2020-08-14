import styled from '@emotion/styled';

import { SubscribeBox } from '../subscribebox';
import { Button } from '../button';


export const Section = styled.section`
  padding: 95px 0 25px;
  &.no-space{
    padding: 0;
    margin: 0;
  }
  &.smaller-space{
    padding: 25px 0;
  }
`;

export const BackContainer = styled.div`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 17px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 600px){
    font-size: 14px;
    line-height: 18px;
    padding-left: 10px;
  }
`;

export const BackIcon = styled.svg`
  width: 25px;
  margin-right: 7px;
`;

export const BackLink = styled.a`
  text-decoration: none;
  color: ${({theme}: any) => theme.colors.gray2};
`;

export const Title = styled.h1`
  max-width: 480px;
  color: ${({theme}: any) => theme.colors.lightOrange};
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  margin: 35px 0 25px;
  @media screen and (max-width: 600px){
    max-width: 100%;
    padding-left: 10px;
  }
`;

export const Subtitle = styled.a`
  color: ${({theme}: any) => theme.colors.gray3};
  font-size: 17px;
  display: inline-flex;
  line-height: 20px;
  margin-bottom: 15px;
  text-decoration: none;
  transition: color .2s ease-out;
  &:hover{
    color: ${({theme}: any) => theme.colors.gray2};
  }
  @media screen and (max-width: 600px){
    padding-left: 10px;
  }
`;

export const Video = styled.div`
`;

export const VideoIcon = styled.img`
  width: 66px;
  transition: transform .2s ease-out;
`;

export const VideoContainer = styled.div`
  width: 577px;
  // padding-bottom: 55%;
  height: 363px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px){
    width: 487px;
    height: 323px;
  }
  @media screen and (max-width: 900px){
    width: 100%;
    height: 363px;
  }
  @media screen and (max-width: 900px){
    height: 245px;
  }
  
  &:hover{
    ${VideoIcon}{
      transform: scale(1.1);
    }
  }
`;

export const SuscribeBoxStyled = styled(SubscribeBox)`
  padding: 40px 0;
  background-position: right;
`;

export const BoxLeft = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${({theme}: any) => theme.colors.gray4};
  @media screen and (max-width: 900px){
    width: 100%;
    border-right: 0;
    border-bottom: 1px solid ${({theme}: any) => theme.colors.gray4};
    padding-bottom: 10px;
  }
`;

export const BoxRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px){
    width: 100%;
    padding-top: 20px;
  }
`;

export const RightTop = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px){
    width: 70%;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TopIcon = styled.svg`
  width: 21px;
  height: 21px;
  margin-right: 5px;
`;

export const TopText = styled.span`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 14px;
  line-height: 17px;
`;

export const RightBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const BottomIcon = styled.svg`
  width: 11px;
`;

export const BottomText = styled.span`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 14px;
  line-height: 17px;
  margin-left: 5px;
`;

export const LeftImage = styled.img`
  width: 100px;
  transform: rotate(-45deg);
  position: relative;
  top: -11px;
  @media screen and (max-width: 900px){
    width: 70px;
    top: -18px;
  }  
`;

export const LeftTitle = styled.h4`
  max-width: 95px;
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  margin-left: 5px;
  position: relative;
  left: -10px;
  @media screen and (max-width: 900px){
    max-width: 100%;
    top: -8px;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 127px;
  background: ${({theme}: any) => theme.colors.gray6};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 12px;
  @media screen and (max-width: 900px){
    height: auto;
    flex-direction: column;
    padding: 35px 15px;
  }
  @media screen and (max-width: 600px){
    border-radius: 0;
  }
  &.full-width{
    width: 658px;
    height: 91px;
    @media screen and (max-width: 1100px){
      width: 100%;
    }
    @media screen and (max-width: 900px){
      height: auto;
      flex-direction: column;
      padding: 35px 15px;
    }
    @media screen and (max-width: 600px){
      border-radius: 0;
    }
    ${LeftImage}{
      width: 80px;
      top: -9px;
      @media screen and (max-width: 900px){
        width: 70px;
        top: -18px;
      }  
    }
    ${LeftTitle}{
      max-width: auto;
      margin-left: 10px;
      left: -5px;
      @media screen and (max-width: 900px){
        max-width: 100%;
        top: -8px;
      }
    }
    ${BoxLeft}{
      width: 40%;
      @media screen and (max-width: 900px){
        width: 100%;
        border-right: 0;
        border-bottom: 1px solid ${({theme}: any) => theme.colors.gray4};
        padding-bottom: 10px;
      }
    }
    ${BoxRight}{
      width: 58%;
      flex-direction: row;
      align-items: center;
      @media screen and (max-width: 900px){
        width: 100%;
        padding-top: 20px;
      }
    }
    ${RightTop}{
      width: auto;
      @media screen and (max-width: 900px){
        width: 70%;
      }
      @media screen and (max-width: 600px){
        width: 50%;
      }
    }
    ${RightBottom}{
      margin-top: 0;
      margin-left: 10px;
    }
    ${TopWrapper}{
      margin-left: 10px;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme}: any) => theme.colors.gray4};
  margin: 20px 0;
  @media screen and (max-width: 900px){

  }
`;

export const SectionTitle = styled.h2`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 25px;
  line-height: 33px;
`;

export const SectionSubtitle = styled.p`
  max-width: 633px;
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 13px;
  line-height: 18px;
  margin-top: 20px;
`;

export const ClassList = styled.div`
  width: 760px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  @media screen and (max-width: 900px){
    width: 100%;
  }

`;

export const ItemHeader = styled.div`
  background-color: ${({theme}: any) => theme.colors.gray5};
  border-radius: 6px;
  padding: 18px 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemText = styled.span`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
`;

export const ItemIcon = styled.svg`
  @media screen and (max-width: 600px){
    position: absolute;
    right: 15px;
  }
`;

export const ContentText = styled.p`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 13px;
  line-height: 17px;
  padding: 18px 0;
`;

export const ItemContent = styled.div`
  background-color: ${({theme}: any) => theme.colors.gray6};
  max-height: 0;
  overflow: hidden;
  padding: 0 25px;
  transition: max-height 0.2s ease-out;
`;

export const LearnList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

export const LearnItem = styled.div`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 13px;
  line-height: 20px;
  padding-left: 30px;
  position: relative;
  & + & {
    margin-top: 20px;
  }
  &:before {
    content: '';
    width: 9px;
    height: 9px;
    position: absolute;
    left: 3px;
    top: 5px;
    background-image: url(/images/list-item.svg);
  }
`;

export const ContentBox = styled.div`
  width: 431px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 900px){
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
  }
  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`;

export const TextNumber = styled.span`
  color: ${({theme}: any) => theme.colors.blue};
`;

export const CompletedCheck = styled.svg`
  margin-right: 8px;
  display: none;
  @media screen and (max-width: 600px){
    width: 15px;
    position: absolute;
    left: 5px;
    margin: 0;
  }
`;

export const PlayBtn = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  cursor: pointer;
  left: -43px;
  top: 10px;
  bottom: 0;
  background-image: url(/images/playgrey.svg);
`;

export const ClassItem = styled.div`
  margin-left: 45px;
  position: relative;
  &:before{
    /* content: ''; */
    width: 30px;
    height: 30px;
    position: absolute;
    cursor: pointer;
    left: 3px;
    top: 10px;
    bottom: 0;
    background-image: url(/images/playgrey.svg);

    &:hover{
      transform: scale(1.1);
    }
  }
  & + & {
    margin-top: 10px;
  }
  &.active{
    ${ItemContent}{
      max-height: 200px;
    }
    ${ItemIcon}{
      transform: rotate(180deg);
    }
  }
  &.free{
    ${PlayBtn} {
      background-image: url(/images/playblue.svg);
    }
    ${CompletedCheck}{
      display: inline-flex;
    }
  }
  &.complete {
    ${ItemHeader}{
      background-color: ${({theme}: any) => theme.colors.gray6};
    }
    ${ItemText}{
      color: ${({theme}: any) => theme.colors.gray3};
    }
    ${TextNumber}{
      color: ${({theme}: any) => theme.colors.gray3};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const CompletedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 45px;
`;

export const CompletedText = styled.span`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
`;

export const CompletedBarFull = styled.div`
  width: 375px;
  height: 25px;
  background: #C4C4C4;
  border-radius: 3px;
  position: relative;
`;

export const CompletedBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #E8833F 0%, #D16115 100%);
  position: absolute;
  top: 0;
  left: 0;
`;

export const AfinadorButton = styled(Button)`
  min-width: 116px;
  height: 37px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  margin: 30px 0;
  padding: 8px 25px;
  &.desktop{
    @media screen and (max-width: 600px){
      display: none;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px){
    flex-direction: column;
  }
  &.logged{
    margin-top: 20px;
    ${VideoContainer}{
      width: 540px;
      height: 340px;
      @media screen and (max-width: 600px){
        width: 100%;
        height: 300px;
      }
    }
    ${Title}{
      margin-bottom: 40px;
      @media screen and (max-width: 900px){
        padding: 0;
        margin: 20px 0 25px;
      }
    }
    ${ContentBox}{
      width: 44%;
      @media screen and (max-width: 900px){
        width: 100%;
        align-items: flex-start;
        flex-direction: column;
      }
      @media screen and (max-width: 600px){
        padding: 0 10px;
        align-items: flex-start;
        margin-top: 0;
      }
    }
    ${CompletedWrapper}{
      margin-top: 0;
      margin-bottom: 20px;
      @media screen and (max-width: 600px){
        width: 100%;
      }
    }
    ${CompletedBarFull}{
      @media screen and (max-width: 600px){
        width: 100%;
      }
    }
    ${InfoBox}{
      margin-top: 25px;
      @media screen and (max-width: 900px){
        width: 500px;
        margin: 30px auto;
      }
      @media screen and (max-width: 600px){
        width: 100%;
      }
    }
    ${BoxRight}{
      width: 53%;
      @media screen and (max-width: 900px){
        width: 100%;
      }
    }
    /* ${VideoContainer}{
      width: 100%;
      height: 300px;
      border-radius: 0;
    } */
  }
`;