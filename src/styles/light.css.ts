import { createTheme } from "@vanilla-extract/css"
import { colors, commonVars, vars } from "./themes.css"

export const lightThemeClass = createTheme(vars, {
  colors: {
    primary: colors.blue500,
    body: colors.gray700,
    background: colors.gray100,
    link: colors.blue800,
    linkHover: colors.blue600,
    ...colors,
  },
  ...commonVars,
})
