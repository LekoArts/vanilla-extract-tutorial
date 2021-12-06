import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from "./themes.css"

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

const footerBase = style({
  fontSize: vars.fontSize.sm,
  textAlign: `center`,
  marginTop: vars.space.xl,
})

export const footer = styleVariants({
  light: [
    footerBase,
    {
      color: vars.colors.gray600,
    },
  ],
  dark: [
    footerBase,
    {
      color: vars.colors.gray400,
    },
  ],
})
