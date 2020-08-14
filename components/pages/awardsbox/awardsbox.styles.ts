import styled from '@emotion/styled'

export const AwardsContainer = styled.div`
  @media screen and (max-width: 900px){
    width: 100%;
    overflow: scroll;
  }
`;;

export const StyledAwards = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  @media screen and (max-width: 900px){
    justify-content: flex-start;
    width: 900px;
  }
  @media screen and (max-width: 600px){
    width: 840px;
  }
`;

export const ItemContent = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
`;

export const ItemImage = styled.img`
  height: 150px;
  margin-bottom: 10px;
  transition: transform .2s ease-out;
  @media screen and (max-width: 900px){
    width: 110px;
  }
  @media screen and (max-width: 900px){
    width: 104px;
  }
`;

export const ItemStar = styled.svg`
  margin-bottom: 3px;
`;

export const ItemTitle = styled.h6`
  min-height: 34px;
  color: ${({theme}: any) => theme.colors.lightOrange};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ItemDescription = styled.p`
  min-height: 30px;
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
`;

export const ItemYear = styled.p`
  color: ${({theme}: any) => theme.colors.lightBlue};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

export const AwardItem = styled.a`
  width: calc((100% / 3) - 80px);
  height: 340px;
  background: ${({theme}: any) => theme.colors.gray6};
  border-radius: 12px;
  &:hover{
    ${ItemImage}{
      transform: scale(1.05)
    }
  }
  @media screen and (max-width: 900px){
    width: 200px;
    height: 275px;
  }
  @media screen and (max-width: 600px){
    width: 275px;
  }
  & + & {
    margin-left: 15px;
  }
`;