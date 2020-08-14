import styled from '@emotion/styled';


export const Section = styled.section`
  padding: 50px 0;
  @media screen and (max-width: 600px){
    padding: 30px 0;
  }
  &.no-space{
    padding: 0;
    margin: 0;
  }
  &.with-divider{ 
    position: relative;
    &:before{
      content: '';
      border: 1px solid #BDBDBD;
      width: 80%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  &.m-grey{
    @media screen and (max-width: 600px){
      background: #F2F2F2;
    }
  }
`;

export const TitleIcon = styled.svg`
  transition: transform .2s ease-out;
  position: absolute;
  right: 15px;
  &.open{
    transform: rotate(180deg)
  }
`;

export const HeaderSection = styled.section`
  background: linear-gradient(109.55deg, #2B84E0 5.41%, #1D73C3 82.55%), #C4C4C4;
  padding: 80px 0 40px;
  @media screen and (max-width: 600px){
    padding: 70px 0 20px;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 600px){
    /* flex-direction: column; */
    padding: 0 10px;
  }
`;

export const ContentImage = styled.img`
  width: 156px;
  @media screen and (max-width: 600px){
    width: 100px;
  }
`;

export const ContentText = styled.div`
  width: 100%;
  margin-left: 25px;
  @media screen and (max-width: 600px){
    margin-left: 10px;
  }
`;

export const ContentTitle = styled.h1`
  color: ${({theme}: any) => theme.colors.white};
  font-size: 32px;
  font-weight: bold;
  line-height: 36px;
  margin: 20px 0;
  @media screen and (max-width: 600px){
    font-size: 24px;
    line-height: 27px;
    margin: 5px 0 10px;
    &.mt{
      margin-top: 20px;
    }
  }
`;

export const ContentSubtitle = styled.p`
  color: ${({theme}: any) => theme.colors.white};
  font-size: 18px;
  font-weight: normal;
  line-height: 20px;
  margin-bottom: 25px;
  @media screen and (max-width: 600px){
    font-size: 16px;
    line-height: 18px;
  }
`;

export const FilterContainer = styled.div`
  background: ${({theme}: any) => theme.colors.gray6};
  border-radius: 0 0 12px 12px;
`;

export const FilterTitle = styled.h4`
  color: ${({theme}: any) => theme.colors.blue};
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 600px){
    padding: 15px 40px 15px 15px;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const FormContainer = styled.form`
  max-height: 0;
  align-items: center;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  padding: 0 40px;
  overflow: hidden;
  transition: max-height .2s ease-out;
  @media screen and (max-width: 600px){
    padding: 0 15px;
  }
  &.open{
    max-height: 300px;
  }
`;

export const Label = styled.label`
  color: ${({theme}: any) => theme.colors.gray3};
  cursor: pointer;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  margin-left: 5px;
  white-space: nowrap;
  @media screen and (max-width: 600px){
    overflow: scroll;
    max-width: 120px;
  }
`;

export const Input = styled.input`
  width: 13px;
  height: 13px;
  &:checked + ${Label}{
    color: ${({theme}: any) => theme.colors.lightOrange};
    font-weight: 500;
  }
`;

export const InputContainer = styled.div`
  width: 25%;
  align-items: center;
  display: flex;
  margin-bottom: 7px;
  @media screen and (max-width: 600px){
    width: 50%;
  }
  &:hover{
    ${Label}{
      color: ${({theme}: any) => theme.colors.lightOrange};
      font-weight: 500;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme}: any) => theme.colors.gray4};
  margin-top: 35px;
`;

export const PrizeImage = styled.img`
  width: 77px;
`;

export const PrizesList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PrizeItem = styled.div`
  width: 220px;
  display: flex;
  align-items: flex-end;
`;

export const PrizeDescription = styled.p`
  max-width: 143px;
  color: ${({theme}: any) => theme.colors.gray2};
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 20px;
`;