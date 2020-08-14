import styled from '@emotion/styled';

export const MobileNavButton = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding: 0;
`;

export const MobileButtonBar = styled.span`
  width: 18px;
  height: 2px;
  background: #C4C4C4;
  & + & {
    margin-top: 3px;
  }
`;

export const MobileNavLogo = styled.img`
  max-height: 30px;
  margin-left: 15px;
`;

export const MobileNavSuscribeButton = styled.button`
  width: 108px;
  height: 100%;
  background-color: ${({theme}: any) => theme.colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: ${({theme}: any) => theme.colors.white};
  padding: 0;
  &.orange{
    /* background-color: ${({theme}: any) => theme.colors.orange}; */
    color: ${({theme}: any) => theme.colors.orange};
    background-color: transparent;
    width: 90px;
  }
  &.blue{
    /* background-color: ${({theme}: any) => theme.colors.orange}; */
    color: ${({theme}: any) => theme.colors.blue};
    background-color: transparent;
    width: 90px;
  }
`;

export const MobileLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const MobileNavMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  &.mtop{
    margin-top: 80px;
  }
`;

export const MobileNavItem = styled.div`
  width: 100%;
  & + & {
    margin-top: 10px;
  }
`;

export const MobileNavLink = styled.a`
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  color: ${({theme}: any) => theme.colors.white};
`;

export const MobileNavLogButton = styled.button`
  width: 139px;
  height: 47px;
  background: #2B84E0;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #2B84E0;
  &.sign{
    background: transparent;
    border: 1px solid white;
  }
  & + & {
    margin-top: 15px;
  }
  &.subscribe{
    background-color: ${({theme}: any) => theme.colors.orange};
  }
`;

export const TextLog = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: ${({theme}: any) => theme.colors.white};
  margin-bottom: 10px;
`;

export const NavDropdown = styled.div`
  /* margin: 15px 0; */
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  &.open{
    max-height: 100vh;
  }
`;

export const NavDropdownTitle = styled.h5`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #FFFFFF;
  padding-left: 20px;
  position: relative;
  & + & {
    margin-top: 15px;
  }
  &:before{
    content: '+';
    position: absolute;
    top: 0;
    left: 0;
  }
  &.open{
    &:before{
      content: '-';
    }
  }
  &.mtop{
    margin-top: 10px;
  }
`;

export const NavSubDropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  margin-top: 5px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  margin-bottom: 10px;
  &.open{
    max-height: 100vh;
  }
`;

export const NavSubDropdownItem = styled.a`
  font-size: 15px;
  line-height: 23px;
  color: ${({theme}: any) => theme.colors.gray6};
`;







export const MobileNav = styled.nav`
  display: none;
  &.active{
    @media screen and (max-width: 600px) {
      position: fixed;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}: any) => theme.colors.white};
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
  }
  &.open {
    background-color: ${({theme}: any) => theme.colors.blue};
  }
`;

export const MobileNavContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  max-height: 0;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({theme}: any) => theme.colors.blue};
  z-index: 1000;
  padding: 0 35px 0 35px;
  overflow: scroll;
  transition: max-height 0.2s ease-out;
  &.open{
    max-height: 100vh;
    ${MobileNav}{
      display: flex;
    }
  }
  ${MobileNav}{
    display: none;
    @media screen and (max-width: 600px) {
      background-color: ${({theme}: any) => theme.colors.blue};
    }
  }
  ${MobileButtonBar}{
    &:nth-of-type(1){
      transform: rotate(45deg);
      position: relative;
      top: 5px;
    }
    &:nth-of-type(2){
      transform: rotate(-45deg);
    }
  }
  ${MobileNavLogo}{
    margin-left: 0;
    margin-right: 20px;
  }
  ${MobileLeft}{
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    &.bottom{
      margin-top: 200px;
    }
  }
`;

export const MobileProfile = styled.div`
  width: 100%;
  height: 274px;
  background: ${({theme}: any) => theme.colors.lightBlue};
  border-radius: 12px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
`;

export const ProfileName = styled.div`
  color: ${({theme}: any) => theme.colors.gray6};
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  margin-top: 10px;
`;

export const ProfileLink = styled.a`
  color: ${({theme}: any) => theme.colors.gray6};
  font-size: 16px;
  line-height: 19px;
  margin-top: 8px;
  text-decoration: none;
  &.logout{
    color: #0A345A;
  }
  &.mtop{
    margin-top: 20px;
  }
`;