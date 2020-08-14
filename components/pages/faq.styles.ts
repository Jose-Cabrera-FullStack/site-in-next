import styled from '@emotion/styled'

export const Section = styled.section`
  padding: 50px 0;
  margin-top: 50px;
`;

export const Content = styled.div`
  width: 541px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;
  @media screen and (max-width: 900px){
    width: 100%;
  }
`;

export const FaqBox = styled.div`
  width: 100%;
  & + & {
    margin-top: 25px;
  }
`;

export const FaqTitle = styled.h4`
  color: ${({theme}: any) => theme.colors.lightBlue};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 15px;
`;

export const FaqButton = styled.div`
  align-items: center;
  background-color: ${({theme}: any) => theme.colors.gray5};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 18px 30px 18px 20px;
`;

export const FaqContent = styled.div`
  max-height: 0;
  background: ${({theme}: any) => theme.colors.gray6};
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;

export const FaqText = styled.p`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 13px;
  line-height: 17px;
  padding: 25px 22px;
`

export const FaqButtonText =  styled.span`
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 13px;
  line-height: 16px;
  @media screen and (max-width: 600px){
    width: 90%;
  }
`;

export const FaqButtonIcon =  styled.svg`
`;

export const FaqItem = styled.div`
  width: 100%;
  &.active{
    ${FaqContent}{
      max-height: 200px;
      @media screen and (max-width: 600px){
        max-height: 400px;
      }
    }
    ${FaqButtonIcon}{
      transform: rotate(180deg)
    }
  }
  & + & {
    margin-top: 8px;
  }
`;

export const DisclaimerWrapper = styled.div`
  width: 361px;
  margin-top: 25px;
`;