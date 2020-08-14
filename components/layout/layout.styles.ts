import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: auto;
  position: relative;
  @media screen and (max-width: 1040px){
    max-width: 95%;
  }
  &.full-height{
    height: 100%;
  }
  &.full-viewheight{
    min-height: 100vh;
    @media screen and (max-width: 600px){
      min-height: auto;
    }
  }
  &.fullwidth{
    @media screen and (max-width: 1040px){
      max-width: 100%;
    }
  }
  &.fullwidth-m{
    @media screen and (max-width: 600px){
      max-width: 100%;
    }
  }
`;

export const SmallTitle = styled.h2`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: bold;
  font-size: 23px;
  line-height: 27px;
  margin-bottom: 10px;
  &.orange{
    color: ${({theme}: any) => theme.colors.lightOrange};
  }
`;

export const SmallSubtitle = styled.h4`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  &.smaller{
    max-width: 500px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  a {

  }
`;

export const DisclaimerLink = styled.a`
  color: ${({theme}: any) => theme.colors.lightBlue};
  text-decoration: underline;
`;

export const Disclaimer = styled.p`
  width: 100%;
  color: ${({theme}: any) => theme.colors.gray3};
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.03em;
  line-height: 19px;
  margin-top: 35px;
`;