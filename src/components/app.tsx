import * as React from "react"
import { Stats, StatsItem } from "./stats"
import { useColorScheme } from "../hooks/use-color-scheme"

const App: React.FC = () => {
  const scheme = useColorScheme()
  const schemeClass = scheme === `dark` ? `$darkThemeClass` : `$lightThemeClass`
  const [variant, setVariant] = React.useState<"default" | "invert">(`default`)

  return (
    <div className={schemeClass}>
      <main>
        <div>
          <div>Last 30 Days</div>
          <button type="button" onClick={() => (variant === `default` ? setVariant(`invert`) : setVariant(`default`))}>
            Toggle Variant
          </button>
        </div>
        <Stats variant={variant}>
          <StatsItem label="Total Subscribers" from={70.946} to={71.897} percentage={12} />
          <StatsItem label="Avg. Open Rate" from={56.14} to={58.16} percentage={2.02} />
          <StatsItem label="Avg. Click Rate" from={28.62} to={24.57} percentage={-4.05} />
        </Stats>
        <div>Design by Tailwind UI. Built with vanilla-extract for educational purposes.</div>
      </main>
    </div>
  )
}

export default App
