import { css } from '@emotion/core'

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap');
  html {
    padding: env(safe-area-inset);
  }
  body {
    white-space: pre-line;
    .swiper-container{
      width: 100%;
    }
    .mt-1{
      margin-top: 5px;
    }
    * {
      box-sizing: border-box;
      font-family: 'Rubik', sans-serif;
      font-weight: normal;
      letter-spacing: -0.02em;
    }
    #nprogress {
      .bar{
        background: #E8833F;
        height: 5px;
      }
      .peg {
        box-shadow: 0 0 10px #E8833F, 0 0 5px #E8833F;
      }
      .spinner-icon{
        display: none;
      }
    }
  }
`