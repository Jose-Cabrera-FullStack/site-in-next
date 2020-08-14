import styled from '@emotion/styled';

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
  transition: opacity .2s ease-out;
  &.out{
    opacity: 0;
  }
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
  max-width: 330px;
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