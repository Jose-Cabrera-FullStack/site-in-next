import styled from '@emotion/styled';

export const SongsBox = styled.div`

`;

export const FilterBox = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-left: 10px;
  @media screen and (max-width: 1024px){
    margin-bottom: 15px;
  }
  @media screen and (max-width: 900px){
    flex-flow: wrap;
    padding-left: 0;
    padding: 0 0 10px;
  }
`;

export const FilterItem = styled.span`
  color: ${({theme}: any) => theme.colors.lightBlue};
  cursor: pointer;
  font-size: 13px;
  line-height: 15px;
  text-decoration: underline;
  &:hover, &.active{
    color: ${({theme}: any) => theme.colors.lightOrange};
  }
  & + & {
    margin-left: 10px;
    @media screen and (max-width: 900px){
      margin-left: 0;
    }
  }
  @media screen and (max-width: 900px){
    margin-top: 10px;
    margin-right: 15px;
    font-size: 15px;
    line-height: 17px;
  }

  @media screen and (max-width: 900px){
    margin-top: 15px;
    margin-right: 15px;
    font-size: 13px;
    line-height: 15px;
  }
`;

export const SongsTable = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (max-width: 600px){
    width: 700px;
  }
`;

export const TableHeader = styled.h4`
  color: ${({theme}: any) => theme.colors.gray2};
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
`;

export const Row = styled.div`
  width: 100%;
  height: 36px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  & + & {
    margin-top: 15px;
  }
`;

export const Column = styled.div`
  height: 100%;
  align-items: center;
  background: ${({theme}: any) => theme.colors.gray5};
  border-radius: 4px;
  color: ${({theme}: any) => theme.colors.gray3};
  display: flex;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  overflow: hidden;
  padding: 0 15px;
  @media screen and (max-width: 600px){
    padding: 0 10px;
  }
  &:nth-of-type(1){
    width: 335px;
    @media screen and (max-width: 1024px){
      width: 32%;
    }
    @media screen and (max-width: 600px){
      width: 180px;
    }
  }
  &:nth-of-type(2){
    width: 195px;
    @media screen and (max-width: 1024px){
      width: 18%;
    }
    @media screen and (max-width: 600px){
      width: 125px;
    }
  }
  &:nth-of-type(3){
    width: 134px;
    clear: both;
    white-space: nowrap;
    overflow: auto;
    @media screen and (max-width: 1024px){
      width: 15%;
    }
    @media screen and (max-width: 600px){
      width: 125px;
    }
  }
  &:nth-of-type(4){
    width: 133px;
    @media screen and (max-width: 1024px){
      width: 10%;
    }
    @media screen and (max-width: 600px){
      width: 100px;
    }
  }
  &:nth-of-type(5){
    width: 115px;
    @media screen and (max-width: 1024px){
      width: 14%;
    }
    @media screen and (max-width: 600px){
      /* display: none; */
    }
  }
  &:nth-of-type(6){
    width: 60px;
    justify-content: center;
    @media screen and (max-width: 1024px){
      width: 40px;
    }
    @media screen and (max-width: 600px){
      /* display: none; */
    }
  }
  &.transparent{
    background-color: transparent;
  }
  &.no-padding{
    padding: 0;
  }
`;

export const TableContent = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
`;

export const SongPlay = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 10px;
  transition: transform .2s ease-out;
  &:hover{
    transform: scale(1.05);
  }
  @media screen and (max-width: 1024px){
    width: 28px;
    height: 28px;
  }
`;

export const GuitarImage = styled.img`
  width: 40px;
`;

export const SongsTableContainer = styled.div`
  @media screen and (max-width: 600px){
    width: 100%;
    overflow: auto;
  }
`;