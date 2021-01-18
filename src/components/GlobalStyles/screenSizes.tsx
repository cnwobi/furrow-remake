const smallPixelCount = 576
const mediumPixelCount = 768
const largePixelCount = 992
const hugePixelCount = 1200
const widePixelCount = 1366

// Small devices (landscape phones, 576px and up)
export const small = `${smallPixelCount}px`

// Medium devices (tablets, 768px and up)
export const medium = `${mediumPixelCount}px`

// Large devices (desktops, 992px and up)
export const large = `${largePixelCount}px`

// Extra large devices (large desktops, 1200px and up)ß
export const huge = `${hugePixelCount}px`

// Wide screens devices (large desktops, 1366px and up)
export const wide = `${widePixelCount}px`

//only specifying max-widths because existing code already has the pattern which
//works: @media (min-width: ${screenSizes.small}).
//max-width needs 1 less than above numbers.
export const mediaMaxWidthXtraSmall = `@media (max-width: ${smallPixelCount -
  1}px)`
export const mediaMaxWidthSmall = `@media (max-width: ${mediumPixelCount -
  1}px)`
export const mediaMaxWidthMedium = `@media (max-width: ${largePixelCount -
  1}px)`
export const mediaMaxWidthLarge = `@media (max-width: ${hugePixelCount - 1}px)`
