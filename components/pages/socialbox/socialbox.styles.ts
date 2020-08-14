import styled from '@emotion/styled';

import { Button } from '../../button';

export const SocialBoxContainer = styled.div`
`;

export const FacebookBox = styled.div`
  background-color: ${({theme}: any) => theme.colors.gray5};
  background-image: url('/images/bg-fb.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 75%;
  border-radius: 12px 12px 0 0;
  padding: 45px 125px;
  @media screen and (max-width: 900px){
    padding: 40px 60px;
  }
  @media screen and (max-width: 600px){
    padding: 40px 35px;
  }
`;

export const YoutubeBox = styled.div`
  background-color: ${({theme}: any) => theme.colors.blue};
  background-image: url('/images/bg-yt.png');
  background-size: 400px;
  background-repeat: no-repeat;
  background-position: left top;
  border-radius: 0 0 12px 12px;
  padding: 50px 125px;
  @media screen and (max-width: 900px){
    padding: 40px 60px;
  }
  @media screen and (max-width: 600px){
    padding: 40px 35px;
  }
`;

export const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`

export const Title = styled.h3`
  width: 100%;
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  margin-bottom: 10px;
  &.white{
    color: ${({theme}: any) => theme.colors.white};
  }
`

export const Number = styled.h6`
  color: ${({theme}: any) => theme.colors.lightOrange};
  display: inline-block;
  font-weight: bold;
  font-size: 58px;
  line-height: 70px;
  &.gray{
    color: ${({theme}: any) => theme.colors.gray4};
  }
  @media screen and (max-width: 900px){
    font-size: 62px;
    line-height: 70px;
  }
  @media screen and (max-width: 812px) and (orientation: landscape){
    font-size: 40px;
    line-height: 40px;
  }
`

export const Star = styled.svg`
  width: 39px;
  height: 39px;
  display: inline-block;
  margin-left: 15px;
`

export const LeftContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 600px){
    width: 100%;
  }
`

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 600px){
    width: 100%;
    justify-content: flex-start;
    margin-top: 20px;
  }
`

export const Text = styled.p`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  margin-top: 10px;
  &.lighter{
    width: 100%;
    text-align: center;
    color: ${({theme}: any) => theme.colors.gray6};
  }
`

export const StyledButton = styled(Button)`
  min-width: 145px;
  height: 49px;
  background-color: #2B84E0;
  font-size: 18px;
  line-height: 21px;
  &:hover{
    background-color: #126BC7;
  }
`

export const NumbersList = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`;

export const ListItem = styled.div`
  width: 220px;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  ${Number}{
    width: 100%;
    text-align: center;
  }
  ${Text}{
    margin-top: 10px;
    text-align: center;
  }
  @media screen and (max-width: 600px){
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  & + & {
    @media screen and (max-width: 600px){
      margin-top: 15px;
    }
  }
`;

export const SubscribeButton = styled(Button)`
  min-width: 204px;
  height: 49px;
  font-size: 18px;
  line-height: 21px;
  margin-top: 50px;
  @media screen and (max-width: 600px){
    margin-top: 35px;
  }
`