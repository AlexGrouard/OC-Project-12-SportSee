import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts"
import { AverageSessionFormatted } from "../../type/Types"
import styles from "./Average.module.scss"

type AverageProps = {
	sessions: AverageSessionFormatted[]
}

/** Render the Average graphs
 * @params  {Object} sessions - Take an Array of object formatted by the formatter
 * @return {JSX}
 */

function Average({ sessions }: AverageProps): JSX.Element {
	// custom legend and tooltip for the graph
	const renderLegend = () => {
		return <div className={styles.title}>Durée moyenne des sessions</div>
	}
	const CustomTooltip = ({ payload }: any) => {
		if (payload && payload.length) {
			return (
				<div className={styles.tooltip}>
					<p className={styles.minutes}>{`${payload[0].value} min`}</p>
				</div>
			)
		}
		return null
	}

	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<LineChart data={sessions}>
					<XAxis
						dataKey='day'
						stroke='#FFFFFF'
						opacity={0.5}
						axisLine={false}
						tickLine={false}
						padding={{ left: 10, right: 10 }}
					/>
					<Legend content={renderLegend} verticalAlign='top' width={160} />
					<Line
						type='natural'
						stroke='#FFFFFF'
						dataKey='sessionLength'
						opacity={0.5}
						dot={false}
					/>
					<Tooltip content={CustomTooltip} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Average
