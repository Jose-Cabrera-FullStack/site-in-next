import styled from '@emotion/styled';

export const BoxTitle = styled.h3`
  width: 560px;
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;
  line-height: 37px;
  letter-spacing: -0.02em;
  margin-right: 20px;
  @media screen and (max-width: 900px){
    width: 420px;
  }
  @media screen and (max-width: 600px){
    width: 100%;
    font-size: 23px;
    line-height: 23px;
    margin-bottom: 15px;
  }
`;

export const StyledBox = styled.div`
  width: 100%;
  align-items: center;
  background-color: ${({theme}: any) => theme.colors.lightOrange};
  background-image: url('/images/bg-guitar.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center left;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 80px 0;
  @media screen and (max-width: 900px){
    padding: 60px 0;
  }
  @media screen and (max-width: 600px){
    align-items: flex-start;
    background-size: cover;
    flex-direction: column;
    justify-content: flex-start;
    padding: 60px 25px;
  }
  &.center{
    flex-direction: column;
    @media screen and (max-width: 900px){
      padding: 40px 0;
      margin-top: 0;
    }
    @media screen and (max-width: 600px){
      border-radius: 0;
      align-items: center;
    }
    ${BoxTitle}{
      width: 100%;
      font-size: 25px;
      text-align: center;
      line-height: 28px;
      margin-bottom: 15px;
      @media screen and (max-width: 900px){
        margin-right: 0;
      }
    }
  }
`;