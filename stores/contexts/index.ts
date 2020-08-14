import React from 'react';

import { RootStore } from '../'
import { createContext } from 'mobx-keystone';

export const rootContext = React.createContext({
  rootStore: new RootStore({})
})

export const rootCtx = createContext<any>()
