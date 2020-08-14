import styled from '@emotion/styled';

export const TunerStyled = styled.div`
  width: 675px;
  height: 392px;
  align-items: center;
  background: ${({theme}: any) => theme.colors.gray6};
  border-radius: 7px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 99999;
  @media screen and (max-width: 700px) {
    width: 335px;
    height: auto;
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  align-items: flex-end;
  display: flex;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 300px;
  }
`;

export const GuitarImage = styled.svg`
  position: relative;
  top: 11px;
  @media screen and (max-width: 700px) {
    width: 190px;
    top: 8px;
  }
`;

export const RightBox = styled.div`
  width: 50%;
  height: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #FFFBFB;
  border-radius: 0px 7px 7px 0px;
  padding: 75px 40px 0;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 25px 35px;
  }
`;

export const Logo = styled.img`
  width: 160px;
  margin-bottom: 20px;
`;

export const Title = styled.h4`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-style: italic;
  font-size: 14px;
  line-height: 23px;
  color: ${({theme}: any) => theme.colors.gray2};
  &.disclaimer{
    color: ${({theme}: any) => theme.colors.blue};
    font-style: normal;
    font-weight: 500;
    margin-top: 25px;
  }
`;

export const VolumeContainer = styled.div`
  width: 100%;
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  @media screen and (max-width: 700px) {
    margin-top: 20px;
  }
`;

export const VolText = styled.span`
  color: ${({theme}: any) => theme.colors.blue};
  font-weight: 500;
  font-size: 12px;
  line-height: 9px;
  text-transform: uppercase;
  margin-right: 10px;
`;

export const VolList = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const VolItem = styled.div`
  width: 4px;
  background: #0A345A;
  border-radius: 32px;
  cursor: pointer;
  &:nth-of-type(1){
    height: 10px;
  }
  &:nth-of-type(2){
    height: 15px;
  }
  &:nth-of-type(3){
    height: 18px;
  }
  &:nth-of-type(4){
    height: 21px;
  }
  &.active{
    background: #2B84E0;
  }
  & + & {
    margin-left: 3px;
  }
`;

export const TunerOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(5,32,56, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: opacity .2s ease-out;
  &.out{
    opacity: 0;
  }
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${({theme}: any) => theme.colors.lightOrange};
  color: ${({theme}: any) => theme.colors.white};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform .2s ease-out;
  position: absolute;
  @media screen and (max-width: 700px) {
    width: 26px;
    height: 26px;
    font-size: 16px;
  }
  &:hover{
    transform: scale(1.2);
  }
  &.uno{
    right: 50px;
    top: 211px;
    @media screen and (max-width: 700px) {
      right: 75px;
      top: 163px;
    }
  }
  &.dos{
    right: 50px;
    top: 150px;
    @media screen and (max-width: 700px) {
      right: 75px;
      top: 115px;
    }
  }
  &.tres{
    right: 50px;
    top: 88px;
    @media screen and (max-width: 700px) {
      right: 75px;
      top: 70px;
    }
  }
  &.cuatro{
    left: 44px;
    top: 88px;
    @media screen and (max-width: 700px) {
      left: 72px;
      top: 70px;
    }
  }
  &.cinco{
    left: 44px;
    top: 150px;
    @media screen and (max-width: 700px) {
      left: 72px;
      top: 115px;
    }
  }
  &.seis{
    left: 44px;
    top: 211px;
    @media screen and (max-width: 700px) {
      left: 72px;
      top: 163px;
    }
  }
`;

export const TunerCloseZone = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(5,32,56, 0.8);
  position: absolute;
  left: 0;
  top: 0;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 700px) {
    align-items: center;
    justify-content: center;
  }
`;