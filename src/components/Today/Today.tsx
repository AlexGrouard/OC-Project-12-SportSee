import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"
import { UserActivity } from "../../type/Types"
import styles from "./Today.module.scss"

function Today({ sessions }: UserActivity): JSX.Element {
	console.log(sessions)
	const data = [
		{
			day: "2020-07-01",
			kilogram: 70,
			calories: 240,
		},
		{
			day: "2020-07-02",
			kilogram: 69,
			calories: 220,
		},
		{
			day: "2020-07-03",
			kilogram: 70,
			calories: 280,
		},
		{
			day: "2020-07-04",
			kilogram: 70,
			calories: 500,
		},
		{
			day: "2020-07-05",
			kilogram: 69,
			calories: 160,
		},
		{
			day: "2020-07-06",
			kilogram: 69,
			calories: 162,
		},
		{
			day: "2020-07-07",
			kilogram: 69,
			calories: 390,
		},
	]
	return (
		<div className={styles.main}>
			<span className={styles.title}>Activité quotidienne</span>
			<ResponsiveContainer height='90%'>
				<BarChart data={data} barCategoryGap={30}>
					<CartesianGrid strokeDasharray='3 3' vertical={false} />
					<XAxis dataKey='day' />
					<YAxis
						dataKey='calories'
						tickCount={3}
						fillOpacity={0}
						axisLine={false}
						tickSize={0}
					/>
					<YAxis
						dataKey='kilogram'
						yAxisId='right'
						orientation='right'
						tickSize={0}
						tickCount={3}
						axisLine={false}
						type='number'
						domain={["dataMin", "dataMax"]}
					/>
					<Legend
						verticalAlign='top'
						align='right'
						iconType='circle'
						iconSize={10}
						height={100}
					/>
					<Tooltip />
					<Bar
						dataKey='kilogram'
						fill='#020203'
						radius={[20, 20, 0, 0]}
						maxBarSize={10}
					/>
					<Bar
						dataKey='calories'
						fill='#FF0101'
						radius={[20, 20, 0, 0]}
						maxBarSize={10}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Today
