import { createTheme } from "@vanilla-extract/css"
import { colors, commonVars, vars } from "./themes.css"

export const darkThemeClass = createTheme(vars, {
  colors: {
    primary: colors.blue400,
    body: colors.gray300,
    background: colors.gray800,
    link: colors.blue200,
    linkHover: colors.blue400,
    ...colors,
  },
  ...commonVars,
})
