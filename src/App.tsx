import * as React from "react"
import { Stats, StatsItem } from "./stats"
import { lightThemeClass, darkThemeClass } from "./themes.css"
import useColorScheme from "./use-color-scheme"
import * as styles from "./app.css"
import { sprinkles } from "./sprinkles.css"
import "./global.css"

const App: React.FC = () => {
  const scheme = useColorScheme()
  const schemeClass = scheme === `dark` ? darkThemeClass : lightThemeClass

  return (
    <div className={[schemeClass, styles.wrapper].join(` `)}>
      <main className={styles.innerWrapper}>
        <div
          className={sprinkles({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            marginBottom: `lg`,
          })}
        >
          <div
            className={sprinkles({ fontSize: `lg`, fontWeight: 700, color: { lightMode: `black`, darkMode: `white` } })}
          >
            Last 30 Days
          </div>
          <a
            href="https://www.google.com"
            className={sprinkles({ color: { hover: `linkHover`, default: `link` }, textDecoration: `none` })}
          >
            Download CSV
          </a>
        </div>
        <Stats variant="default">
          <StatsItem label="Total Subscribers" from={70.946} to={71.897} percentage={12} />
          <StatsItem label="Avg. Open Rate" from={56.14} to={58.16} percentage={2.02} />
          <StatsItem label="Avg. Click Rate" from={28.62} to={24.57} percentage={-4.05} />
        </Stats>
        <div className={styles.footer[scheme]}>
          Design by Tailwind UI. Built with vanilla-extract for educational purposes.
        </div>
      </main>
    </div>
  )
}

export default App
