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
import { UserSessions } from "../../type/Types"
import styles from "./Today.module.scss"
type TodayProps = { sessions: UserSessions[] }

function Today({ sessions }: TodayProps): JSX.Element {
	return (
		<div className={styles.main}>
			<span className={styles.title}>Activité quotidienne</span>
			<ResponsiveContainer height='90%'>
				<BarChart data={sessions} barCategoryGap={30}>
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
