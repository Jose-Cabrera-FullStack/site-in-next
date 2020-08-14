import styled from '@emotion/styled';
import css from '@emotion/css';

const styles = css`
  align-items: center;
  color: #FFF;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  float: left;
  font-size: 18px;
  justify-content: center;
  line-height: 21px;
  overflow: hidden;
  padding: 12px 25px;
  transition: color .3s ease-out;
  vertical-align: middle;
  z-index: 1;
  position: relative;
  &:hover{
    &:before{
      opacity: .7;
      transform: translate3d(0, 100%, 0);
    }
    &:after{
      transform: translate3d(0, 100%, 0);
      transition-delay: 0.175s;
    }
  }
  @media screen and (max-width: 600px){
    font-size: 15px;
    line-height: 18px;
  }
  &:after, &:before{
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 100%;
    left: 0;
    z-index: -1;
    transition: transform 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
`;

export const StyledButton = styled.button`
  ${styles}
  &.orange{
    background-color: ${({theme}: any) => theme.colors.orange};
    &:hover{
      color: ${({theme}: any) => theme.colors.orange};
    }
    &:before{background-color: ${({theme}: any) => theme.colors.white};}
    &:after{background-color: ${({theme}: any) => theme.colors.white};}
  }
  &.blue{
    background-color: ${({theme}: any) => theme.colors.blue};
    &:hover{
      color: ${({theme}: any) => theme.colors.blue};
      &:before{background-color: ${({theme}: any) => theme.colors.white};}
      &:after{background-color: ${({theme}: any) => theme.colors.white};}
    }
    &:disabled{
      color: ${({theme}: any) => theme.colors.white};
    }
  }
  &.lightBlue{
    background-color: ${({theme}: any) => theme.colors.lightBlue};
    &:before{background-color: ${({theme}: any) => theme.colors.white};}
    &:after{background-color: ${({theme}: any) => theme.colors.white};}
    &:hover{
      color: ${({theme}: any) => theme.colors.lightBlue};
    }
  }
  &.lightOrange{
    background-color: ${({theme}: any) => theme.colors.lightOrange};

    &:before{background-color: ${({theme}: any) => theme.colors.lightOrangeDarken};}
    &:after{background-color: ${({theme}: any) => theme.colors.lightOrangeDarken};}
  }
  &.darkBlue{
    background-color: ${({theme}: any) => theme.colors.lightBlue};
    &:hover{
      &:before{background-color: ${({theme}: any) => theme.colors.blue};}
      &:after{background-color: ${({theme}: any) => theme.colors.blue};}
    }
  }
  &.loading{
    cursor: not-allowed;
    opacity: 0.7;
    &:before{background-color: transparent}
    &:after{background-color: transparent}
    &:hover{
      &:before{background-color: transparent}
      &:after{background-color: transparent}
    }
  }
  &:disabled{
    cursor: not-allowed!important;
    opacity: 0.8!important;
    &:before, &:after{
      display: none!important;
    }
  }
`;

export const StyledLink = styled.a`
  ${styles}
  text-decoration: none;
  &.orange{
    background-color: ${({theme}: any) => theme.colors.orange};
    &:hover{
      color: ${({theme}: any) => theme.colors.orange};
    }
    &:before{background-color: ${({theme}: any) => theme.colors.white};}
    &:after{background-color: ${({theme}: any) => theme.colors.white};}
  }
  &.blue{
    background-color: ${({theme}: any) => theme.colors.blue};
    &:hover{
      color: ${({theme}: any) => theme.colors.blue};
    }
    &:hover{
      &:before{background-color: ${({theme}: any) => theme.colors.white};}
      &:after{background-color: ${({theme}: any) => theme.colors.white};}
    }
  }
  &.lightBlue{
    background-color: ${({theme}: any) => theme.colors.lightBlue};
    &:before{background-color: ${({theme}: any) => theme.colors.white};}
    &:after{background-color: ${({theme}: any) => theme.colors.white};}
    &:hover{
      color: ${({theme}: any) => theme.colors.lightBlue};
    }
  }
  &.lightOrange{
    background-color: ${({theme}: any) => theme.colors.lightOrange};

    &:before{background-color: ${({theme}: any) => theme.colors.lightOrangeDarken};}
    &:after{background-color: ${({theme}: any) => theme.colors.lightOrangeDarken};}
  }
  &.darkBlue{
    background-color: ${({theme}: any) => theme.colors.lightBlue};
    &:hover{
      &:before{background-color: ${({theme}: any) => theme.colors.blue};}
      &:after{background-color: ${({theme}: any) => theme.colors.blue};}
    }
  }
`;