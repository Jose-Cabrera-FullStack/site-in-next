import styled from '@emotion/styled'

import { Button } from '../button'

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding-top: 100px;
  @media screen and (max-width: 600px){
    height: auto;
    min-height: 100vh;
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

export const Title = styled.h1`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: bold;
  font-size: 27px;
  line-height: 32px;
  text-align: center;
  @media screen and (max-width: 600px){
    font-size: 22px;
    line-height: 27px;
  }
`;

export const TopContent = styled.div`
  width: 88%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 55px auto 0;
`;

export const Label = styled.div`
  align-items: center;
  background: ${({theme}: any) => theme.colors.lightOrange};
  border-radius: 0px 0px 9px 9px;
  color: ${({theme}: any) => theme.colors.white};
  display: flex;
  font-weight: normal;
  font-size: 12px;
  justify-content: center;
  line-height: 14px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  right: 20px;
`;

export const LabelIcon = styled.svg`
`;


export const List = styled.div`
  width: 88%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 30px auto 10px;
`;

export const ListItem = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme}: any) => theme.colors.gray2};
  position: relative;
  padding-left: 23px;
  &:before{
    width: 17px;
    height: 17px;
    content: '';
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/images/check.svg');
    position: absolute;
    left: 0;
    top: -1px;
  }
  & + & {
    margin-top: 20px;
  } 
`;

export const PlanName = styled.h4`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
`;

export const CurrentPrice = styled.h3`
  color: ${({theme}: any) => theme.colors.lightBlue};
  font-weight: bold;
  font-size: 33px;
  line-height: 39px;

`;

export const OldPrice = styled.h6`
  color: ${({theme}: any) => theme.colors.gray3};
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  margin-left: 5px;
`;

export const Discount = styled.h3`
  color: ${({theme}: any) => theme.colors.lightOrange};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

export const Divider = styled.div`
  width: 205px;
  border: 1px solid ${({theme}: any) => theme.colors.gray6};
  margin-top: 15px;
`;

export const ButtonWrapper = styled.div`
  width: 88%;
  margin: 20px auto 0;
`;

export const StyledButton = styled(Button)`
  min-width: 145px;
  height: 49px;
  font-size: 18px;
  line-height: 21px;
`;

export const Disclaimer = styled.p`
  max-width: 500px;
  color: ${({theme}: any) => theme.colors.gray3};
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.03em;
  line-height: 19px;
  margin: 50px auto;
  text-align: center;
  @media screen and (max-width: 1024px){
    margin-top: 40px;
  }
  @media screen and (max-width: 600px){
    margin-top: 10px;
  }
`;

export const DisclaimerLink = styled.a`
  color: ${({theme}: any) => theme.colors.lightBlue};
  text-decoration: underline;
`;

export const SubscriptionsContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 40px auto;
`;

export const SubscriptionBox = styled.div`
  width: 340px;
  /* height: 531px; */
  align-items: flex-start;
  background: ${({theme}: any) => theme.colors.gray5};
  box-shadow: 0px 0px 8px rgba(5, 32, 56, 0.2);
  border-radius: 7px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  z-index: 2;
  padding-bottom: 25px;
  @media screen and (max-width: 812px) and (orientation: landscape){
    width: 340px;
    &.active{
      display: flex;
    }
  }
  @media screen and (max-width: 600px){
    width: 92%;
    padding: 0 0 30px;
    &.active{
      display: flex;
    }
  }
  @media screen and (max-width: 360px){
    /* height: 545px ; */
  }
  &.alternative{
    background: ${({theme}: any) => theme.colors.gray6};
    z-index: 1;
    @media screen and (max-width: 812px) and (orientation: landscape){
      width: 340px;
      &.active{
        display: flex;
      }
    }
    @media screen and (max-width: 600px){
      width: 92%;
      &.active{
        display: flex;
      }
    }
    ${Divider}{
      border-color: ${({theme}: any) => theme.colors.gray5};
    }
    ${TopContent}{
      margin-top: 50px;
    }
  }
`;

export const SubscriptionsMenu = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: -10px;
  display: none;
  @media screen and (max-width: 600px), screen and (max-width: 812px) and (orientation: landscape){
    display: flex;
  }
`;

export const MenuItem = styled.div`
  font-size: 13px;
  line-height: 29px;
  color: ${({theme}: any) => theme.colors.lightBlue};
  margin: 0 10px;
  &.active{
    text-decoration: underline;
    font-weight: 600;
  }
`;
