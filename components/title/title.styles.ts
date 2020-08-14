import styled from '@emotion/styled'
import { css } from '@emotion/core'

const titleStyle = css`
  max-width: 779px;
  font-size: 37px;
  font-weight: bold;
  letter-spacing: -0.02em;
  line-height: 42px;
  margin: 0 auto;
  text-align: center;
  &.blue{
    color: #3671b9;
  }
  &.white{
    color: #ffffff;
  }
  @media screen and (max-width: 812px) and (orientation: landscape){
    font-size: 33px;
    line-height: 39px;
  }
  @media screen and (max-width: 600px){
    font-size: 21px;
    line-height: 24px;
  }
`;

export const TitleH1 = styled.h1`
  ${titleStyle}
`

export const TitleH2 = styled.h2`
  ${titleStyle}
`

export const TitleH3 = styled.h3`
  ${titleStyle}
`