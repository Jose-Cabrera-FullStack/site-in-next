import styled from '@emotion/styled';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 50px;
  .mt{
    margin-top: 15px;
  }
  @media screen and (max-width: 600px){
    padding: 20px;
  }
`;

export const BackIcon = styled.svg`
  margin-right: 5px;
`;

export const BackButton = styled.button`
  color: ${({theme}: any) => theme.colors.gray2};
  background-color: transparent;
  margin-bottom: 25px;
  font-size: 14px;
  line-height: 19px;
  transition: transform .2s ease-out, font-weight .2s ease-out;
  &:hover{
    transform: translate(-5px, 0);
  }
`;

export const Header = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  &.pay{
    margin-bottom: 10px;
  }
`;

export const HeaderImage = styled.img`
  width: 83px;
  height: 83px;
`;

export const TextWrapper = styled.div`
  width: calc(100% - 93px);
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const Title = styled.h4`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 23px;
  line-height: 29px;
`;

export const Subtitle = styled.p`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  @media screen and (max-width: 380px){
    font-size: 15px;
    line-height: 20px;
  }
  &.second{
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 18px;
  }
  &.third{
    margin-top: -10px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 21px;
  }
`;

export const ButtonIcon = styled.svg`
  margin-right: 15px;
`;

export const ShareButton = styled.button`
  width: 100%;
  height: 46px;
  align-items: center;
  border-radius: 5px;
  display: flex;
  font-size: 17px;
  line-height: 24px;
  justify-content: flex-start;
  padding: 8px 40px;
  transition: background-color .2s ease-out;
  @media screen and (max-width: 380px){
    font-size: 16px;
    line-height: 22px;
  }
  & + & {
    margin-top: 15px;
  }
  &.facebook{
    background-color: #1B71BF;
    color: ${({theme}: any) => theme.colors.white};
    &:hover{
      background-color: #0258A6;
    }
  }
  &.google{
    background-color: ${({theme}: any) => theme.colors.gray5};
    color: ${({theme}: any) => theme.colors.gray2};
    &:hover{
      background-color: #C7C7C7;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

export const UserForm = styled.form`
  width: 100%;
`;


export const InputContainer = styled.div`
  width: 100%;
  & + & {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const GoToOther = styled.p`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 13px;
  line-height: 18px;
  margin-top: 20px;
`

export const GoToOtherLink = styled.a`
  color: ${({theme}: any) => theme.colors.orange};
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  margin-left: 5px;
  transition: color .2s ease-out;
  &:hover{
    color: ${({theme}: any) => theme.colors.orangeDarken};
  }
`

export const Logo = styled.img`
  max-width: 155px;
  display: block;
  margin: 0 auto 15px;
  @media screen and (max-height: 800px) {
    max-width: 100px;
    margin-bottom: 10px;
  }
`;

export const StyledBox = styled.div`
  width: 409px;
  background: ${({theme}: any) => theme.colors.gray6};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.isModal{
    box-shadow: 0px 0px 10px rgba(10, 52, 90, 0.25);
  }
  &.pay{
    ${Container}{
      padding-top: 45px;
    }
  }
`;


export const LogoLink = styled.a`
  width: 100%;
`;

export const ForgotPassword = styled.a`
  font-style: italic;
  font-size: 14px;
  line-height: 17px;
  color: ${({theme}: any) => theme.colors.gray3};
  display: flex;
  margin-top: -5px;
  margin-bottom: 20px;
  transition: color .2s ease-out;
  &:hover{
    color: ${({theme}: any) => theme.colors.gray2};
  }
`;

export const StyledModal = styled.div`
  max-width: 400px;
  padding: 30px 50px;
  background: ${({theme}: any) => theme.colors.gray6};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 600px){
    padding: 30px;
  }
  &.isModal{
    box-shadow: 0px 0px 10px rgba(10, 52, 90, 0.25);
  }
  ${Title}{
    margin-bottom: 10px;
  }
  ${Subtitle}{
    margin-bottom: 25px;
  }
  ${UserForm}{
    margin-bottom: 25px;
  }
  .button-top{
    margin-top: 20px;
  }
  ${GoToOther}{
    margin-top: 0;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  @media screen and (max-width: 600px){
    width: 100%;
    justify-content: center;
  }
`;

export const StepTitle = styled.h3`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  @media screen and (max-width: 600px){
    font-size: 15px;
    line-height: 20px;
  }
  @media screen and (max-width: 350px){
    font-size: 13px;
    line-height: 17px;
  }
`;

export const StepSubtitle = styled.h6`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 15px;
  line-height: 20px;
  @media screen and (max-width: 600px){
    font-size: 14px;
    line-height: 17px;
  }
  @media screen and (max-width: 350px){
    font-size: 13px;
    line-height: 17px;
  }
`;

export const StepArrow = styled.svg`
  margin: 0 5px;
  @media screen and (max-width: 600px){
    /* margin: 8px 0; */
  }
`;

export const StepItem = styled.div`
  display: flex;
  align-items: center;
  &.grey{
    ${StepTitle}, ${StepSubtitle}{
      color: ${({theme}: any) => theme.colors.gray4};
    }
  }
`;