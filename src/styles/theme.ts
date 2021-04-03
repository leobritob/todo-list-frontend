import color from 'color'

const breakpoints: any = ['576px', '768px', '992px', '1200px']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const fontSizes: any = [10, 12, 14, 16, 18, 20]
fontSizes.smaller = fontSizes[0]
fontSizes.small = fontSizes[1]
fontSizes.medium = fontSizes[2]
fontSizes.big = fontSizes[3]
fontSizes.bigger = fontSizes[4]
fontSizes.biggest = fontSizes[5]

const primary = '#069'

export const theme = {
  breakpoints,
  fontSizes,
  colors: {
    primary,
    primaryLighten: color(primary).lighten(0.5).hex(),
    primaryDarken: color(primary).darken(0.5).hex(),
    danger: '#900',
  },
  radii: {
    borderRadius: 4,
  },
}

export type ThemeType = typeof theme
