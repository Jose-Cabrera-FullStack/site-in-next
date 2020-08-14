import styled from '@emotion/styled'

export const Section = styled.section`
  background: ${({theme}: any) => theme.colors.gray6};
  &.bgImage{
    background-image: url('/images/bg-home.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &.hauto{
    min-height: auto;
  }
`;