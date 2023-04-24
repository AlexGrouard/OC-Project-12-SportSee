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
import blackDot from "../../assets/blackDot.svg"
import redDot from "../../assets/redDot.svg"
import { UserSessions } from "../../type/Types"
import styles from "./Today.module.scss"

type TodayProps = { sessions: UserSessions[] }

function Today({ sessions }: TodayProps): JSX.Element {
	//modify tooltip with the right data
	const CustomTooltip = ({ payload }: any) => {
		if (payload && payload.length) {
			return (
				<div className={styles.tooltip}>
					<p className={styles.kilo}>{`${payload[0].value}kg`}</p>
					<p className={styles.calories}>{`${payload[1].value}kCal`}</p>
				</div>
			)
		}
		return null
	}
	//Custom Legend with title
	const renderLegend = ({ payload }: any) => {
		return (
			<div className={styles.legendContainer}>
				<span className={styles.title}>Activité quotidienne</span>
				<ul className={styles.legend}>
					<img src={redDot} alt='poids' />
					<li key={`${payload[0].value}`}>Poids (kg)</li>
					<img src={blackDot} alt='poids' />
					<li key={`${payload[1].value}`}>Calories brulées (kCal)</li>
				</ul>
			</div>
		)
	}

	return (
		<div className={styles.main}>
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
						content={renderLegend}
					/>
					<Tooltip content={CustomTooltip} />
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
