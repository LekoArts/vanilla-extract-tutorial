import { style } from "@vanilla-extract/css"
import { vars } from "../styles/themes.css"

export const wrapper = style({
  fontFamily: vars.font.body,
  backgroundColor: vars.colors.background,
  color: vars.colors.body,
  height: `100vh`,
  width: `100%`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  fontSize: vars.fontSize.md,
})

export const innerWrapper = style({
  maxWidth: `1200px`,
  width: `100%`,
  padding: vars.space.lg,
})

export const topBar = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  marginBottom: vars.space.lg,
})

export const button = style({
  border: `none`,
  background: `none`,
  color: vars.colors.link,
  borderWidth: `1px`,
  borderStyle: `solid`,
  borderColor: `transparent`,
  transition: `all 0.3s ease-in-out`,
  borderRadius: vars.radii.sm,
  paddingLeft: vars.space.sm,
  paddingRight: vars.space.sm,
  selectors: {
    "&:hover": {
      color: vars.colors.linkHover,
      cursor: `pointer`,
      borderColor: vars.colors.linkHover,
    },
  },
})
