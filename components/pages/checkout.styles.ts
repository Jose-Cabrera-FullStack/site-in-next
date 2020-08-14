import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 50px 0;
  @media screen and (max-width: 900px){
    padding: 75px 0 0;
  }
`;

export const Content = styled.div`
  width: 537px;
  @media screen and (max-width: 600px){
    width: 100%;
  }
`;

export const BackContainer = styled.div`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 17px;
  line-height: 22px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  margin-top: 35px;
  @media screen and (max-width: 600px){
    font-size: 14px;
    line-height: 18px;
  }
`;

export const BackIcon = styled.svg`
  width: 25px;
  margin-right: 7px;
  @media screen and (max-width: 600px){
    width: 17px;
  }
`;

export const BackLink = styled.a`
  text-decoration: none;
  color: ${({theme}: any) => theme.colors.gray2};
`;

export const LeftPlanName = styled.h6`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 20px;
  line-height: 24px;
`;

export const LeftPlanPrice = styled.h6`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: bold;
  font-size: 33px;
  line-height: 39px;
`;

export const PriceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: wrap;
  margin-top: 35px;
`;

export const Currency = styled.span`
  font-weight: normal;
`;

export const BottomPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0 0;
`;

export const PriceBefore = styled.span`
  color: ${({theme}: any) => theme.colors.gray3};
  font-size: 15px;
  line-height: 20px;
  margin-right: 10px;
  margin-left: 10px;
  position: relative;
  top: 3px;
`;

export const Discount = styled.span`
  color: ${({theme}: any) => theme.colors.lightOrange};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

export const Divider = styled.div`
  width: 100%;
  border: 0.5px solid ${({theme}: any) => theme.colors.gray3};
  margin: 20px 0;
`;

export const Text = styled.p`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 13px;
  line-height: 17px;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const TabsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TabItem = styled.div`
  width: 33.333333333%;
  background: ${({theme}: any) => theme.colors.gray6};
  border-radius: 9px 9px 0px 0px;
  color: ${({theme}: any) => theme.colors.blue};
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  transition: background .2s ease-out;
  @media screen and (max-width: 600px){
    &:nth-of-type(1){
      width: 40%;
    }
    &:nth-of-type(2){
      width: 29%;
    }
    &:nth-of-type(3){
      width: 30%;
    }
  }
  &.active, &:hover{
    background: ${({theme}: any) => theme.colors.gray5};
  }
`;

export const TabContent = styled.div`
  background: ${({theme}: any) => theme.colors.gray5};
  padding: 30px 20px;
  flex-direction: column;
  display: none;
  &.active{
    display: flex;
  }
`;

export const CardWrapper = styled.div`
  width: 95%;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
  @media screen and (max-width: 600px){
    width: 100%;
  }
  .customCardElement{
    background: ${({theme}: any) => theme.colors.white};
    border: 1px solid ${({theme}: any) => theme.colors.gray4};
    border-radius: 5px;
    padding: 6px 10px;
  }
`;

export const WrapperTitle = styled.h4`
  max-width: 283px;
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  &.with-m{
    margin-bottom: 10px;
  }
`;

export const HalfWrapper = styled.div`
  width: 48%;
  margin: 15px 0;
  position: relative;
  &.l-m{
    margin: 5px;
  }
`;

export const FullWrapper = styled.div`
  width: 95%;
  position: relative;
  @media screen and (max-width: 600px){
    width: 100%;
  }
  &.full{
    @media screen and (max-width: 600px){
      width: 90%;
    }
  }
`;

export const LogoImage = styled.img`
  max-width: 129px;
  max-height: 55px;
  margin-bottom: 25px;
`;

export const ButtonWrapper = styled.div`
  max-width: 103px;
  margin-top: 32px;
`;

export const Disclaimer = styled.div`
  width: 100%;
  color: ${({theme}: any) => theme.colors.gray3};
  font-size: 14px;
  line-height: 19px;
  margin-top: 10px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  @media screen and (max-width: 600px){
    position: relative;
  }
`;

export const LogoList = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px){
    position: absolute;
    right: 0;
    top: -55px;
  }
`;

export const ListItem = styled.img`
  max-width: 45px;
  & + & {
    margin-left: 10px;
  }
`;

export const DisclaimerWrapper = styled.div`
  max-width: 450px;
  margin-top: 20px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.div`
  color: ${({theme}: any) => theme.colors.gray3};
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

export const FormDisclaimer = styled.div`
  font-style: italic;
  color: ${({theme}: any) => theme.colors.gray3};
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
`;

export const Modal = styled.div`
  max-width: 400px;
  background-color: ${({theme}: any) => theme.colors.white};
  box-shadow: 0px 0px 10px rgba(10, 52, 90, 0.25);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 35px 40px 55px;
  @media screen and (max-width: 600px){
    max-width: 95%;
  }
  /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 5; */
`;

export const ModalOverlay = styled.div`
  position: fixed;
  background: rgba(255,255,255,0.9);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const ModalText = styled.div`
  max-width: 263px;
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 14px;
  line-height: 19px;
  text-align: center;
`;

export const NextWrapper = styled.div`
  width: 100%;
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 15px;
  bottom: 15px;
  transition: transform .2s ease-out;
  cursor: pointer;
  &:hover{
    transform: translateX(5px);
  }
`;

export const NextIcon = styled.svg`
  margin-left: 3px;
`;

export const IconInput = styled.svg`
  position: absolute;
  bottom: 7px;
  right: -30px;
`;

export const SaveCardWrapper = styled.label`
  width: 100%;
  color: ${({theme}: any) => theme.colors.gray2};
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 19px;
  margin: 25px 0 0;
  user-select: none;
  cursor: pointer;
`;

export const SaveIcon = styled.svg`
  width: 17px;
  height: 17px;
  opacity: 0;
  &.bigger{
    width: 22px;
    height: 22px;
    margin-right: 5px;
  }
`;

export const SaveSpan = styled.span`
  width: 17px;
  height: 17px;
  background-color: white;
  border-radius: 100%;
  border: 1px solid #BDBDBD;
  margin-right: 5px;
`;

export const SaveInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked{
    &~ ${SaveSpan}{
      border: 0;
      ${SaveIcon} {
        opacity: 1;
      }
    }
  }
`;

export const SaveIcon2 = styled.svg`
  height: 100%;
  position: absolute;
  right: -60px;
  top: 0;
  &.pointer{
    cursor: pointer;
  }
`;

export const ModalImage = styled.img`
  width: 335px;
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  @media screen and (max-width: 600px){
    /* flex-direction: column; */
  }
`;

export const StepTitle = styled.h3`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  @media screen and (max-width: 600px){
    font-size: 13px;
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
    font-size: 11px;
    line-height: 15px;
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