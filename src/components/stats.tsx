import * as React from "react"

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
    <section>{children}</section>
  </StatsContext.Provider>
)

export const Trend: React.FC<{ percentage: number }> = ({ percentage }) => {
  const variant = React.useContext(StatsContext)
  const isPositive = Math.sign(percentage) === 1
  const variantPostfix = isPositive ? `Up` : `Down`

  return (
    <div>
      <span />
      <span>{Math.abs(percentage)}%</span>
    </div>
  )
}

export const StatsItem: React.FC<IStatsItemProps> = ({ label, from, to, percentage }) => {
  const variant = React.useContext(StatsContext)

  return (
    <div>
      <div>{label}</div>
      <div>
        <div>
          <span>{to.toFixed(2)}%</span>
          {` `}
          from{` `}
          <span>{from.toFixed(2)}%</span>
        </div>
        <Trend percentage={percentage} />
      </div>
    </div>
  )
}
