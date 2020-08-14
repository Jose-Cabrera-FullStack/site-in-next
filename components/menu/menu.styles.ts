import styled from '@emotion/styled'

export const Nav = styled.nav`
  width: 100%;
  background-color: #3671b9;
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
  @media screen and (max-width: 600px){
    height: 50px;
    display: none;
  }
  &.active{
    /* opacity: 1; */
    position: fixed;
  }
`

export const Row = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.a`
  width: 67px;
  display: flex;
  margin-left: 100px;
  position: relative;
  @media screen and (max-width: 1280px){
    margin-left: 5%;
  }
  @media screen and (max-width: 1024px){
    margin-left: 20px;
  }
  @media screen and (max-width: 600px){
    display: none;
  }
`

export const LogoImage = styled.img`
  width: 100%;
  position: absolute;
  top: -15px;
`

export const MenuList = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 600px){
    display: none;
  }
`

export const ItemText = styled.a`
  color: ${({theme}: any) => theme.colors.white};
  cursor: pointer;
  font-size: 13px;
  line-height: 15px;
  padding: 20px 15px;
  text-decoration: none;
  &:hover{
    /* font-weight: 500; */
  }
`

export const MenuItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  &.has-orange-hover{
    &:hover{
      ${ItemText}{
        color: ${({theme}: any) => theme.colors.lightOrange};
      }
    }
  }
  &.login{
    background-color: #4484d9;
    margin-left: 10px;
    &:hover{
      > ${ItemText}{
        font-weight: 500;
      }  
    }
    ${ItemText}{
      width: 115px;
      padding: 20px 25px;
      text-align: center;
    }
    &.nologged{
      .submenu {
        display: none;
      }
    }
  }
  &.subscribe{
    background-color: ${({theme}: any) => theme.colors.lightOrange};
    &:hover{
      ${ItemText}{
        font-weight: 500;
      }  
    }
    ${ItemText}{
      width: 124px;
      padding: 20px 25px;
      text-align: center;
    }
  }
  &.has-dropdown{
    &.cursos-has-dropdown{
      @media screen and (max-width: 900px){
        position: static;
      }
    }
    .submenu{
      ${ItemText}{
        padding: 7px 0;
        color: white!important;
        &:hover{
          color: white;
          font-weight: 500;
        }
      }
    }
    &:hover{
      .submenu{
        max-height: 100vh;
        transition: max-height .1s linear;
      }
    }
  }
  &.bold{
    ${ItemText}{
      font-weight: bold!important;
    }
  }
`

export const Submenu = styled.div`
  width: 100%;
  max-height: 0;
  background-color: #3671b9;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  transition: max-height .1s linear;
  ${MenuItem}{
    width: 100%;
    border-bottom: 1px solid #FFFFFF;
    &:last-of-type{
      border-bottom: 0;
    }
  }
  &.cursos-menu{
    width: 1000px;
    align-items: flex-start;
    background-color: rgba(68,132,217,.9);
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
    left: auto;
    right: 0;
    @media screen and (max-width: 900px){
      width: 100vw;
    }
    ${MenuItem}{
      border: 0;
      ${ItemText}{
        padding: 0!important;
        line-height: 14px;
        margin-bottom: 10px;
      }
    }
  }
`

export const SubmenuTitle = styled.h4`
  color: #FFFFFF;
  margin: 0;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  margin-bottom: 15px;
`

export const SubmenuGroup = styled.div`
  width: 15%;
  margin: 30px 0;
  & > & {
    margin-top: 0;
  }

  ${MenuItem}{
    align-items: flex-start;
    border: none;
    justify-content: flex-start;
    ${ItemText}{
      font-size: 11px;
      line-height: 16px;
      padding: 0;
    }
  }
`
