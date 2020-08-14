import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(5,32,56,0.7);
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
  width: 440px;
  background: #F2F2F2;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 20px 50px;
`;

export const TopImage = styled.img`
  width: 300px;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  color: #4F4F4F;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 15px;
`;

export const RewardImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const RewardImage = styled.img`
  max-width: 60px;
  max-height: 100px;
  & + & {
    margin-left: 20px
  }
`;

export const NextText = styled.span`
  width: 100%;
  text-align: center;
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
  margin-top: 20px;
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