import React from 'react'
import { rootContext } from '../contexts'

export const useStores = () => React.useContext(rootContext)