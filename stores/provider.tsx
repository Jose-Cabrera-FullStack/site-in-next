import { FC, useState } from 'react'
import {
  SnapshotInOf,
} from 'mobx-keystone'

import { RootStore } from './rootStore'

import { StoreContext, initStore } from './'

export const StoreProvider: FC<{ snapshot?: SnapshotInOf<RootStore> }> = ({
  children,
  snapshot,
}) => {
  const [ctxStore] = useState(() => initStore(snapshot))
  return (
    <StoreContext.Provider value={ctxStore}>{children}</StoreContext.Provider>
  )
}