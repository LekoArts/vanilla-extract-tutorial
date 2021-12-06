import * as React from "react"
import { stats } from "./recipes.css"

interface IStatsItemProps {
  label: string
  from: number
  to: number
  percentage: number
}

interface IStatsProps {
  variant?: "default" | "invert" | "ghost"
}

const StatsContext = React.createContext<IStatsProps["variant"]>(`default`)

export const Stats: React.FC<IStatsProps> = ({ children, variant = `default` }) => (
  <StatsContext.Provider value={variant}>
    <div className={stats({ style: variant })}>{children}</div>
  </StatsContext.Provider>
)

export const StatsItem: React.FC<IStatsItemProps> = ({ label, from, to, percentage }) => {
  const variant = React.useContext(StatsContext)

  return (
    <div>
      <div>{label}</div>
      <div>
        <div>
          <span>{to}</span> from <span>{from}</span>
        </div>
        <div>{percentage}</div>
      </div>
    </div>
  )
}
