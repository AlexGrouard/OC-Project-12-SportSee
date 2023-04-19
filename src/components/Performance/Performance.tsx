import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from "recharts"
import { PerfData } from "../../type/Types"
import styles from "./Performance.module.scss"
type PerfProps = {
	data: PerfData[]
}

function Performance({ data }: PerfProps): JSX.Element {
	//console.log(data)
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart data={data}>
					<PolarGrid gridType='polygon' radialLines={false} />
					<PolarAngleAxis />
					<Radar dataKey='value' fill='#FF0101' fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Performance
