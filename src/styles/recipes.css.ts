import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles } from "./sprinkles.css"
import { vars } from "./themes.css"

export const stats = recipe({
  base: sprinkles({
    borderRadius: `md`,
    boxShadow: `md`,
    display: `flex`,
    justifyContent: `space-between`,
    flexDirection: [`column`, `column`, `row`],
  }),
  variants: {
    color: {
      default: {
        color: vars.colors.body,
      },
      invert: sprinkles({ color: { light: `blue200`, dark: `blue200` } }),
    },
    background: {
      default: sprinkles({ background: { light: `white`, dark: `gray900` } }),
      invert: sprinkles({
        background: { light: `blue600`, dark: `blue900` },
      }),
    },
  },
  defaultVariants: {
    background: `default`,
    color: `default`,
  },
})

export const trend = recipe({
  base: sprinkles({
    display: `flex`,
    alignItems: `center`,
    borderRadius: `md`,
    px: `xs`,
    fontSize: `xs`,
    fontWeight: 500,
  }),
  variants: {
    background: {
      defaultUp: sprinkles({ background: { light: `green100`, dark: `green900` } }),
      defaultDown: sprinkles({ background: { light: `red100`, dark: `red900` } }),
      invertUp: {},
      invertDown: {},
    },
    color: {
      defaultUp: sprinkles({ color: { light: `green600`, dark: `green100` } }),
      defaultDown: sprinkles({ color: { light: `red600`, dark: `red100` } }),
      invertUp: sprinkles({ color: { light: `green100`, dark: `green200` } }),
      invertDown: sprinkles({ color: { light: `red100`, dark: `red200` } }),
    },
  },
})

export type StatsVariants = RecipeVariants<typeof stats>
