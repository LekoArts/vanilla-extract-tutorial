import { style, styleVariants } from "@vanilla-extract/css"
import { sprinkles, Sprinkles } from "../styles/sprinkles.css"
import { breakpoints, vars } from "../styles/themes.css"

const bs = style({
  width: `100%`,
  selectors: {
    "&:first-child": {
      borderRightWidth: `1px`,
      borderRightStyle: `solid`,
    },
    "&:last-child": {
      borderLeftWidth: `1px`,
      borderLeftStyle: `solid`,
    },
  },
  "@media": {
    [`screen and (max-width: ${breakpoints.desktop}px)`]: {
      selectors: {
        "&:first-child": {
          borderRightWidth: `0px`,
        },
        "&:last-child": {
          borderLeftWidth: `0px`,
        },
      },
    },
  },
})

const bws: Sprinkles = {
  px: `lg`,
  py: `md`,
}

export const wrapper = styleVariants({
  default: [bs, sprinkles({ ...bws, borderColor: { lightMode: `gray200`, darkMode: `gray700` } })],
  invert: [bs, sprinkles({ ...bws, borderColor: { lightMode: `blue400`, darkMode: `blue600` } })],
})

export const toValue = styleVariants({
  default: [sprinkles({ color: { lightMode: `primary`, darkMode: `primary` } })],
  invert: [sprinkles({ color: { lightMode: `white`, darkMode: `white` } })],
})

export const arrowUp = style({
  height: 0,
  width: 0,
  borderLeft: `5px solid transparent`,
  borderRight: `5px solid transparent`,
  borderBottom: `5px solid ${vars.colors.green400}`,
})

export const arrowDown = style({
  height: 0,
  width: 0,
  borderLeft: `5px solid transparent`,
  borderRight: `5px solid transparent`,
  borderTop: `5px solid ${vars.colors.red500}`,
})
