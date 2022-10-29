import * as React from "react"
import { stats, trend } from "../styles/recipes.css"
import { sprinkles as s } from "../styles/sprinkles.css"
import { wrapper, toValue, arrowUp, arrowDown } from "./stats.css"

interface IStatsItemProps {
  label: string
  from: number
  to: number
  percentage: number
}

interface IStatsProps {
  variant: "default" | "invert"
}

const StatsContext = React.createContext<IStatsProps["variant"]>(`default`)

export const Stats: React.FC<React.PropsWithChildren<IStatsProps>> = ({ children, variant = `default` }) => (
  <StatsContext.Provider value={variant}>
    <section className={stats({ background: variant, color: variant })}>{children}</section>
  </StatsContext.Provider>
)

export const Trend: React.FC<{ percentage: number }> = ({ percentage }) => {
  const variant = React.useContext(StatsContext)
  const isPositive = Math.sign(percentage) === 1
  const variantPostfix = isPositive ? `Up` : `Down`

  return (
    <div className={trend({ background: `${variant}${variantPostfix}`, color: `${variant}${variantPostfix}` })}>
      <span className={isPositive ? arrowUp : arrowDown} />
      <span className={s({ marginLeft: `xs` })}>{Math.abs(percentage)}%</span>
    </div>
  )
}

export const StatsItem: React.FC<IStatsItemProps> = ({ label, from, to, percentage }) => {
  const variant = React.useContext(StatsContext)

  return (
    <div className={wrapper[variant]}>
      <div className={s({ fontWeight: 600 })}>{label}</div>
      <div className={s({ display: `flex`, alignItems: `center`, justifyContent: `space-between`, marginTop: `md` })}>
        <div className={s({ display: `flex`, alignItems: `baseline` })}>
          <span
            className={[
              s({ fontSize: `xl`, fontWeight: 600, marginRight: `sm`, lineHeight: `xl` }),
              toValue[variant],
            ].join(` `)}
          >
            {to.toFixed(2)}%
          </span>
          {` `}
          from{` `}
          <span className={s({ marginLeft: `sm`, fontWeight: 500 })}>{from.toFixed(2)}%</span>
        </div>
        <Trend percentage={percentage} />
      </div>
    </div>
  )
}
