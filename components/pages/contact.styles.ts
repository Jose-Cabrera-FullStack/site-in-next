import styled from '@emotion/styled';

import { Button } from '../button';

export const Section = styled.section`
  padding: 50px 0;
  margin-top: 50px;
`;

export const FormContainer = styled.form`
  width: 600px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-flow: wrap;
  margin-top: 40px;
  @media screen and (max-width: 900px){
    width: 100%;
  }
`;

export const HalfContainer = styled.div`
  width: 48%;
  @media screen and (max-width: 600px){
    width: 100%;
  }
  & + & {
    @media screen and (max-width: 600px){
      margin-top: 25px;
    }
  } 
`;

export const FullContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
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

export const Submit = styled(Button)`
  min-width: 176px;
  height: 49px;
`;

export const DisclaimerLink = styled.a`
  color: ${({theme}: any) => theme.colors.lightBlue};
  text-decoration: underline;
`;


export const SubmitResponse = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const ResponseIcon = styled.svg`
`

export const ResponseText = styled.p`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  margin-left: 5px;
`