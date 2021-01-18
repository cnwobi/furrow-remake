import * as React from 'react'
import MediaQuery from 'react-responsive'

import * as screenSizes from '~/components/GlobalStyles/screenSizes'

// Code of interest.
// Typing defined below is a subset of props defined in react-responsive

interface Props {
  children: React.ReactNode
  minWidth?: string | number
  maxWidth?: string | number
}

export const Large = (props: Props) => (
  <MediaQuery {...props} minWidth={screenSizes.large} />
)
export const Desktop = (props: Props) => (
  <MediaQuery {...props} minWidth={screenSizes.small} />
)
export const Tablet = (props: Props) => (
  <MediaQuery {...props} maxWidth={screenSizes.large} />
)
export const Mobile = (props: Props) => (
  <MediaQuery {...props} maxWidth={screenSizes.small} />
)

export const mediaDesktop = `@media (min-width: ${screenSizes.small})`
export const mediaTabletAndLarger = `@media (min-width: ${screenSizes.medium})`
export const mediaHuge = `@media (min-width: ${screenSizes.huge})`
