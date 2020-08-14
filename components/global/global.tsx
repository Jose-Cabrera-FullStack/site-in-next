import { Global as GlobalStyling } from '@emotion/core'

import {
  GlobalStyles,
} from './global.styles'

export const Global = () => (
  <>
    <GlobalStyling styles={GlobalStyles} />
  </>
)