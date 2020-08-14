import styled from '@emotion/styled';

export const IframeContainer = styled.div`
  width: 100%;
  padding-top: 55.25%;
  position: relative;
  iframe{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  transition: opacity .2s ease-out;
  &.out{
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  width: 800px;
`