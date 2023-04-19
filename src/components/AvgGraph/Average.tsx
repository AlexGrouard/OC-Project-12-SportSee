import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts"
import { AverageSession } from "../../type/Types"
import styles from "./Average.module.scss"

type AverageProps = {
	sessions: AverageSession[]
}

function Average({ sessions }: AverageProps): JSX.Element {
	const renderLegend = () => {
		return <div className={styles.title}>Durée moyenne des sessions</div>
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
					/>
					<Tooltip />
					<Legend content={renderLegend} verticalAlign='top' width={160} />
					<Line
						type='natural'
						stroke='#FFFFFF'
						dataKey='sessionLength'
						opacity={0.5}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Average
