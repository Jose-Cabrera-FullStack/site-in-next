import styled from '@emotion/styled'

import { Button } from '../button'

export const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  @media screen and (max-width: 600px){
    width: 80%;
    flex-flow: column;
    margin: auto;
  }
`;

export const FooterLeft = styled.div`
  width: 50%;
  @media screen and (max-width: 600px){
    width: 100%;
    order: 2;
  }
`;

export const FooterRight = styled.div`
  width: 50%;
  @media screen and (max-width: 600px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    order: 1;
  }
`;

export const LeftMenuList = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
`;

export const ListItem = styled.a`
  color: ${({theme}: any) => theme.colors.white};
  cursor: pointer;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 5px;
  transition: font-weight .1s ease-out;
  &:hover{
    font-weight: 500;
  }
`;

export const ListHeader = styled.h4`
  color: ${({theme}: any) => theme.colors.white};
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const FooterLogo = styled.img`
  width: 389px;
  @media screen and (max-width: 900px){
    width: 100%;
  }
  @media screen and (max-width: 600px){
    margin-bottom: 30px;
  }
`;

export const SocialList = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

export const SocialItem = styled.a`
  width: 50px;
  height: 50px;
  min-width: 0;
  background-color: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  &:hover{
    svg path {
      /* fill: ${({theme}: any) => theme.colors.lightOrange}; */
    }
   &:before{
    box-shadow: inset 0 0 0 2px ${({theme}: any) => theme.colors.lightOrange};
    transform: scale3d(1, 1, 1);
   } 
  }
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    z-index: -1;
    box-shadow: inset 0 0 0 35px ${({theme}: any) => theme.colors.lightOrange};
    transform: scale3d(0.9, 0.9, 1);
    transition: box-shadow 0.3s, transform 0.3s;
  }
  & + & {
    margin-left: 10px;
  }
`;

export const StyledButton = styled(Button)`
  min-width: 116px;
  height: 37px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  margin: 30px 0;
  padding: 8px 25px;
`;

export const FooterLow = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  @media screen and (max-width: 600px){
    flex-direction: column;
    margin-top: 0;
    order: 3;
  }
  ${FooterLeft}{
    order: 1;
  }
  ${FooterRight}{
    order: 2;
    @media screen and (max-width: 600px){
      margin-top: 25px;
    }
  }
`;

export const FooterCopyright = styled.p`
  color: ${({theme}: any) => theme.colors.gray5};
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-align: left;
`;


export const BackToTop = styled.svg`
  cursor: pointer;
  position: absolute;
  top: -75px;
  right: 0;
  @media screen and (max-width: 600px){
    top: -70px;
  }
  &:hover{
    path {
      fill: white;
    }
  }
  path {
    transition: fill .2s ease-out;
    @media screen and (max-width: 600px){
      fill: white; 
    }
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  background: linear-gradient(180deg, #1B71BF 19.79%, #2B84E0 100%);
  padding: 60px 0 20px;
  @media screen and (max-width: 600px){
    padding-top: 50px;
  }
  &.noFooter{
    padding: 0;
    ${BackToTop}{
      top: 0;
      left: 0;
      margin: 20px auto;
      @media screen and (max-width: 600px){
        display: none;
      }
      path { 
        fill: white;
      }
    }
  }
`;