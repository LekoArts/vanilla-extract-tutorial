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
  default: [bs, sprinkles({ ...bws, borderColor: { light: `gray200`, dark: `gray700` } })],
  invert: [bs, sprinkles({ ...bws, borderColor: { light: `blue400`, dark: `blue600` } })],
})

export const toValue = styleVariants({
  default: [sprinkles({ color: { light: `primary`, dark: `primary` } })],
  invert: [sprinkles({ color: { light: `white`, dark: `white` } })],
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
