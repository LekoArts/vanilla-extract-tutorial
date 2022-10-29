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
      invert: sprinkles({ color: { lightMode: `blue200`, darkMode: `blue200` } }),
    },
    background: {
      default: sprinkles({ background: { lightMode: `white`, darkMode: `gray900` } }),
      invert: sprinkles({
        background: { lightMode: `blue600`, darkMode: `blue900` },
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
      defaultUp: sprinkles({ background: { lightMode: `green100`, darkMode: `green900` } }),
      defaultDown: sprinkles({ background: { lightMode: `red100`, darkMode: `red900` } }),
      invertUp: {},
      invertDown: {},
    },
    color: {
      defaultUp: sprinkles({ color: { lightMode: `green600`, darkMode: `green100` } }),
      defaultDown: sprinkles({ color: { lightMode: `red600`, darkMode: `red100` } }),
      invertUp: sprinkles({ color: { lightMode: `green100`, darkMode: `green200` } }),
      invertDown: sprinkles({ color: { lightMode: `red100`, darkMode: `red200` } }),
    },
  },
})

export type StatsVariants = RecipeVariants<typeof stats>
