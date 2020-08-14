import styled from '@emotion/styled';

import { Button } from '../button';
import { SubscribeBox } from '../subscribebox';

export const Section = styled.div`
  margin-top: 50px;
  padding: 60px 0;
  min-height: 100vh;
  @media screen and (max-width: 600px){
    padding: 40px 0;
  }
`;

export const Content = styled.div`
  width: 691px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
  @media screen and (max-width: 700px){
    width: 96%;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  background: ${({theme}: any) => theme.colors.gray6};
  border-radius: 7px;
  & + & {
    margin-top: 20px;
  }
  &.blue{
    background: ${({theme}: any) => theme.colors.lightBlue};
  }
`;

export const BoxContainer = styled.div`
  align-items: center;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  &.no-padding{
    flex-direction: column;
    padding: 0;
  }
  &.column-m{
    @media screen and (max-width: 700px){
      flex-direction: column;
    }
  }
`;

export const BoxTextWrapper = styled.div`
  min-width: 220px;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (max-width: 700px){
    /* margin-top: 20px; */
  }
`;


export const BoxProfileWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`;

export const BoxProfile = styled.img`
  width: 127px;
  height: 127px;
  border-radius: 100%;
  margin-right: 15px;
  @media screen and (max-width: 600px){
    width: 110px;
    height: 110px;
    margin-bottom: 10px;
    margin-right: 20px;
  }
`;

export const BoxLabel = styled.label`
  color: ${({theme}: any) => theme.colors.blue};
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  transition: color .2s ease-out;
  &:hover{
    color: ${({theme}: any) => theme.colors.blueDarken};
  }
`;

export const BoxInput = styled.input`
  display: none;
`;

export const BoxHeader = styled.div`
  width: 100%;
  align-items: center;
  background-color: ${({theme}: any) => theme.colors.gray5};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

export const BoxContent = styled.div`
  width: 100%;
  max-height: 0;
  background-color: ${({theme}: any) => theme.colors.gray6};
  border-radius: 0px 0px 7px 7px;
  padding: 0 25px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-flow: wrap;
  overflow: hidden;
  transition: all .2s ease-out;
  &.open{
    max-height: 200px;
    padding: 0 25px 30px;
    @media screen and (max-width: 600px){
      max-height: 300px;
    }
  }
`;


export const BoxTitle = styled.h2`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 3px;
`;

export const BoxSubtitle = styled.h4`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const BoxTags = styled.p`
  color: ${({theme}: any) => theme.colors.gray3};
  font-size: 13px;
  line-height: 15px;
`;

export const HeaderText = styled.p`
  color: ${({theme}: any) => theme.colors.gray3};
  font-size: 13px;
  line-height: 15px;
  @media screen and (max-width: 600px){
    font-size: 16px;
    line-height: 19px;
  }
`;

export const HeaderButton = styled.button`
  background: transparent;
  color: ${({theme}: any) => theme.colors.blue};
  font-size: 16px;
  line-height: 19px;
  @media screen and (max-width: 600px){
    font-weight: 500;
  }
  &:hover{
    color: ${({theme}: any) => theme.colors.blueDarken};
  }
`;

export const FormContent = styled.div`
  width: 48%;
  align-items: flex-start;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 20px;
  position: relative;
  @media screen and (max-width: 600px){
    width: 100%;
  }
  &.right-align{
    align-items: flex-end;
  }
`;

export const FormLabel = styled.label`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 5px;
  transition: color .2s ease-out;
`;

export const FormInput = styled.input`
  &&{
    width: 100%;
    border: 0;
    border-bottom: 1px solid #ccc;
    background-color: transparent;
    color: ${({theme}: any) => theme.colors.gray3};
    font-size: 13px;
    line-height: 15px;
    padding: 4px 0;
    &:focus{
      + ${FormLabel}{
        color: ${({theme}: any) => theme.colors.orange};
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
  @media screen and (max-width: 600px){
    margin-top: 20px;
  }
`;

export const BoxLeft = styled.div`
  width: 48%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  @media screen and (max-width: 600px){
    width: 100%;
  }
`;

export const BoxRight = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 600px){
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export const TextSpan = styled.span`
  width: 100%;
  display: block;
  color: ${({theme}: any) => theme.colors.white};
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  @media screen and (max-width: 600px){
    width: auto;
  }
  &.right{
    text-align: right;
    @media screen and (max-width: 600px){
      text-align: left;
    }
  }
  &.w100-m{
    @media screen and (max-width: 600px){
      width: 100%;
    }
  }
`;

export const TextPlan = styled.h4`
  color: ${({theme}: any) => theme.colors.white};
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

export const TextDisclimer = styled.span`
  color: ${({theme}: any) => theme.colors.gray5};
  font-size: 14px;
  line-height: 17px;
  margin-left: 10px;
  margin-top: 5px;
  @media screen and (max-width: 600px){
    margin-left: 20px;
  }
`;

export const RenovarButton = styled(Button)`
  font-weight: 500;
  @media screen and (max-width: 600px){
    font-size: 17px;
    line-height: 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;

export const InputEye = styled.svg`
  position: absolute;
  bottom: 5px;
  right: 2px;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 490px;
  height: 66px;
  background-color: ${({theme}: any) => theme.colors.gray6};
  box-shadow: 0px 0px 10px rgba(10, 52, 90, 0.25);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px){
    width: 94%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
  }
`;

export const ModalText = styled.span`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 15px;
  line-height: 20px;
  margin-left: 20px;
`;

export const NextText = styled.span`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
  margin-right: 25px;
  transition: transform .2s ease-out;
  @media screen and (max-width: 600px){
    margin-right: 0;
    margin-top: 10px;
  }
  &:hover{
    transform: translateX(10px);
  }
`;

export const NextTextIcon = styled.svg`
  margin-left: 5px;
`;

export const SuscriptionStyled = styled(SubscribeBox)`
  padding: 50px 30px;
`;

export const ButtonContainer = styled.div`
  display: none;
  @media screen and (max-width: 600px){
    width: 100%;
    align-items: center;
    display: flex;
    margin-top: 30px;
    justify-content: flex-end;
  }
`;