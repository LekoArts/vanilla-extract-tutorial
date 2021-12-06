import { createVar } from "@vanilla-extract/css"
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles"
import { breakpoints, vars } from "./themes.css"

const { space, colors, fontSize, radii, boxShadow } = vars
const bgAlpha = createVar()

function transformBreakpoints<Output>(input: Record<string, any>) {
  let responsiveConditions!: Output

  Object.entries(input).forEach(([key, value]) => {
    if (value === 0) {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {},
      }
    } else {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {
          "@media": `screen and (min-width: ${value}px)`,
        },
      }
    }
  })

  return responsiveConditions
}

const responsiveProperties = defineProperties({
  conditions: transformBreakpoints<{ mobile: {}; tablet: {}; desktop: {} }>(breakpoints),
  defaultCondition: `mobile`,
  responsiveArray: [`mobile`, `tablet`, `desktop`],
  properties: {
    position: [`relative`],
    display: [`none`, `block`, `inline`, `inline-block`, `flex`],
    alignItems: [`flex-start`, `center`, `flex-end`],
    justifyContent: [`flex-start`, `center`, `flex-end`, `space-between`],
    flexDirection: [`row`, `row-reverse`, `column`, `column-reverse`],
    flexWrap: [`wrap`, `nowrap`],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
  },
  shorthands: {
    p: [`paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`],
    px: [`paddingLeft`, `paddingRight`],
    py: [`paddingTop`, `paddingBottom`],
    m: [`marginTop`, `marginBottom`, `marginLeft`, `marginRight`],
    mx: [`marginLeft`, `marginRight`],
    my: [`marginTop`, `marginBottom`],
  },
})

const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      "@media": `(prefers-color-scheme: light)`,
    },
    darkMode: { "@media": `(prefers-color-scheme: dark)` },
    default: {},
    hover: { selector: `&:hover` },
    focus: { selector: `&:focus` },
  },
  defaultCondition: [`lightMode`, `default`],
  properties: {
    color: colors,
    background: colors,
    ghostBackground: {
      primary: {
        vars: { [bgAlpha]: `0.5` },
        background: `rgba(37, 99, 235, ${bgAlpha})`,
      },
    },
    ghostBackgroundOpacity: {
      1: { vars: { [bgAlpha]: `1` } },
      0.5: { vars: { [bgAlpha]: `0.5` } },
      0.25: { vars: { [bgAlpha]: `0.25` } },
    },
  },
})

const unresponsiveProperties = defineProperties({
  properties: {
    fontSize,
    textAlign: [`center`, `left`, `right`],
    textTransform: [`lowercase`, `uppercase`],
    fontWeight: [400, 500, 600, 700, 800],
    textDecoration: [`none`, `underline`],
    borderRadius: radii,
    boxShadow,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties, unresponsiveProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
