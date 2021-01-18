import * as React from 'react'
// @ts-ignore
import { GlobalProvider } from '~/context/context'

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)
