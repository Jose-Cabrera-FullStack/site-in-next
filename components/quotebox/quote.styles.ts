import styled from '@emotion/styled'

export const QuoteItem = styled.div`
  width: 100%;
  height: 220px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 900px){
    justify-content: flex-start;
  }
  @media screen and (max-width: 812px) and (orientation: landscape){
    justify-content: center;
  }
  @media screen and (max-width: 600px){
    width: 280px;
    height: auto;
    background-color: ${({theme}: any) => theme.colors.gray6};
    flex-direction: column;
    padding: 25px 20px;
  }
  & + & {
    margin-left: 15px;
  }
`;

export const QuoteLeft = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px){
    width: 45%;
  }
  @media screen and (max-width: 600px){
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
`;

export const QuoteRight = styled.div`
  width: 50%;
  position: relative;
  &:before{
    width: 1px;
    height: 107px;
    background-color: ${({theme}: any) => theme.colors.gray3};
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    @media screen and (max-width: 900px){
      height: 117px;
    }
    @media screen and (max-width: 600px){
      display: none;
    } 
  }
  @media screen and (max-width: 900px){
    width: 45%;
  }
  @media screen and (max-width: 812px) and (orientation: landscape){
    width: 40%;
  }
  @media screen and (max-width: 600px){
    width: 100%;
  }
`;

export const QuoteImage = styled.img`
  width: 140px;
  border-radius: 100%;
  @media screen and (max-width: 900px){
    width: 115px;
    height: 115px;
    background-color: ${({theme}: any) => theme.colors.gray5};
  }
  @media screen and (max-width: 600px){
    margin-bottom: 10px;
  }
`;

export const QuoteContent = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (max-width: 900px){
    margin-left: 10px;
  }
  @media screen and (max-width: 600px){
    margin-left: 0;
  }
`;

export const QuoteTitle = styled.h5`
  max-width: 150px;
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 5px;
  @media screen and (max-width: 900px){
    font-size: 16px;
    line-height: 19px;
  }
`;

export const QuoteSubtitle = styled.h6`
  color: ${({theme}: any) => theme.colors.lightBlue};
  font-size: 14px;
  font-weight: normal;
  line-height: 17px;
  @media screen and (max-width: 900px){
    font-size: 13px;
    line-height: 15px;
  }
`;

export const QuoteText = styled.div`
  color: ${({theme}: any) => theme.colors.gray2};
  width: 400px;
  font-size: 14px;
  font-style: italic;
  font-weight: normal;
  line-height: 23px;
  margin: 0 auto;
  @media screen and (max-width: 812px) and (orientation: landscape){
    max-height: 120px;
    overflow-y: scroll;
  }
  @media screen and (max-width: 900px){
    width: 80%;
  }
  @media screen and (max-width: 600px){
    width: 100%;
  }
`;