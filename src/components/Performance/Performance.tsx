import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from "recharts"
import styles from "./Performance.module.scss"

const data = [
	{
		value: 80,
		kind: 1,
	},
	{
		value: 120,
		kind: 2,
	},
	{
		value: 140,
		kind: 3,
	},
	{
		value: 50,
		kind: 4,
	},
	{
		value: 200,
		kind: 5,
	},
	{
		value: 90,
		kind: 6,
	},
]

function Performance(): JSX.Element {
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart data={data}>
					<PolarGrid gridType='polygon' radialLines={false} />
					<PolarAngleAxis />
					<Radar dataKey='kind' fill='#FF0101' fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Performance
