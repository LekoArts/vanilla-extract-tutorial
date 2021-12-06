import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles } from "./sprinkles.css"

export const stats = recipe({
  base: sprinkles({
    borderRadius: `md`,
    boxShadow: `md`,
    display: `flex`,
    justifyContent: `space-between`,
    flexDirection: [`column`, `row`],
  }),
  variants: {
    style: {
      default: sprinkles({ background: { lightMode: `white`, darkMode: `gray700` } }),
      invert: sprinkles({ background: `primary` }),
      ghost: sprinkles({ background: `blue100` }),
    },
  },
  defaultVariants: {
    style: `default`,
  },
})

export type StatsVariants = RecipeVariants<typeof stats>
