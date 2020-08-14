import styled from '@emotion/styled';

export const List = styled.div`
  width: 100%;
  margin-top: 30px;
  @media screen and (max-width: 900px){
    overflow: auto;
  }
`;

export const Item = styled.div`
  /* width: 200px;
  height: 250px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  &.opacity{
    opacity: 0.7;
  }
  & + & {
    margin-left: 10px;
  }
`;

export const ItemImage = styled.img`
  &.guitar{
    width: 66px;
  }
  &.amplificador{
    width: 89px;
  }
`;

export const ItemAmount = styled.div`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: bold;
  font-size: 31px;
  line-height: 41px;
  margin: 0 0 10px;
`;

export const ItemTitle = styled.h4`
  border-radius: 4px;
  background-color: ${({theme}: any) => theme.colors.gray6};
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 12px;
  line-height: 14px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
`;

export const ItemTitleStar = styled.svg`
  width: 17px;
  margin-right: 7px;
`;

export const ItemImageWrapper = styled.div`
  /* height: 160px; */
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;