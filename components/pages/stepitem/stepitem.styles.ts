import styled from '@emotion/styled'

export const Step = styled.a`
  width: 300px;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  cursor: pointer;
  @media screen and (max-width: 900px){
    width: 30%;
  }
  @media screen and (max-width: 600px){
    width: 260px;
    margin: 0 auto;
  }
  & + & {
    @media screen and (max-width: 600px){
      margin-top: 40px;
    }
  }
`;

export const StepImage = styled.img`
  width: 100%;
  max-width: 245px;
`;

export const ImageWrapper = styled.div`
  min-height: 220px;
  align-items: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px){
    width: 100%;
  }
`

export const StepContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 20px;
  margin-top: -15px;
  @media screen and (max-width: 600px){
    margin-left: 0;
  }
`

export const StepNumber = styled.span`
  color: ${({theme}: any) => theme.colors.lightOrange};
  font-size: 49px;
  font-weight: bold;
  line-height: 65px;
`;

export const StepTitle = styled.h6`
  color: ${({theme}: any) => theme.colors.blue};
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  margin-top: 5px;
  @media screen and (max-width: 600px){
    font-size: 17px;
    line-height: 21px;
  }
`;

export const StepText = styled.p`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  margin-top: 10px;
  @media screen and (max-width: 600px){
    font-size: 15px;
    line-height: 19px;
  }
`;