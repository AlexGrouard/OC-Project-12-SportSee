import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from "recharts"
import { FormattedPerfData } from "../../type/Types"
import styles from "./Performance.module.scss"
type PerfProps = {
	data: FormattedPerfData[]
}
/** Render the Performance graphs
 * @params  {Object} data - Take an Array of object formatted by the formatter
 * @return {JSX}
 */
function Performance({ data }: PerfProps): JSX.Element {
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart data={data} outerRadius={90}>
					<PolarGrid gridType='polygon' radialLines={false} />
					<PolarAngleAxis
						dataKey='kind'
						tick={{ fontSize: 12, fill: "white" }}
					/>
					<Radar dataKey='value' fill='#FF0101' fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Performance
