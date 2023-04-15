import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from "recharts"
import styles from "./Activity.module.scss"

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

function Activity(): JSX.Element {
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
					<PolarGrid />
					<PolarAngleAxis />
					<Radar
						name='Mike'
						dataKey='kind'
						stroke='#FFFFFF'
						fill='#FF0101'
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Activity
