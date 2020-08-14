import styled from '@emotion/styled';

export const OverlayFixed = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  transition: opacity .2s ease-out;
  &.out{
    opacity: 0;
  }
`;

export const OverlayBlack = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
`;

export const Modal = styled.div`
  width: 577px;
  background: #052038;
  border-radius: 12px;
  padding: 33px 65px 50px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 700px){
    width: 100%;
    padding: 30px;
  }
`;

export const ModalClose = styled.div`
  color: ${({theme}: any) => theme.colors.gray4};
  cursor: pointer;
  font-size: 14px;
  line-height: 19px;
  transition: font-weight .2s ease-out;
  &:hover{
    font-weight: 500;
  }
`;

export const ModalCloseIcon = styled.svg`
  margin-right: 5px;
`;

export const Title = styled.h2`
  color: ${({theme}: any) => theme.colors.white};
  font-weight: bold;
  font-size: 33px;
  line-height: 34px;
  margin-top: 25px;
  @media screen and (max-width: 700px){
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #1B71BF;
  margin: 20px 0;
`;

export const ModalBottom = styled.div`
  width: 100%;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 700px){
    flex-direction: column;
    align-items: center;
  }
`;

export const BottomLeft = styled.div`
  @media screen and (max-width: 700px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BottomRight = styled.div`
  @media screen and (max-width: 700px){
    margin-top: 20px;
  }
  .button {
      
    }
  }
`;

export const LeftPlanName = styled.h6`
  color: ${({theme}: any) => theme.colors.white};
  font-size: 20px;
  line-height: 24px;
  @media screen and (max-width: 700px){
    font-size: 15px;
    line-height: 18px;
  }
`;

export const LeftPlanPrice = styled.h6`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: bold;
  font-size: 33px;
  line-height: 39px;
  @media screen and (max-width: 700px){
    /* font-size: 24px;
    line-height: 28px; */
  }
`;

export const BottomPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* margin: 15px 0 0; */
`;

export const PriceBefore = styled.span`
  color: ${({theme}: any) => theme.colors.gray3};
  font-size: 15px;
  line-height: 20px;
  margin-right: 10px;
`;

export const Disccount = styled.span`
  color: ${({theme}: any) => theme.colors.orange};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;