import {
	Legend,
	RadialBar,
	RadialBarChart,
	ResponsiveContainer,
} from "recharts"
import { ScoreProps } from "../../type/Types"
import styles from "./Score.module.scss"

function Score({ todayScore }: ScoreProps): JSX.Element {
	const scoreInPercent = todayScore * 100
	const data = [
		{
			todayScore: scoreInPercent,
		},
	]
	const insideText = (
		<div className={styles.insideText}>
			<h3>{scoreInPercent}%</h3>
			<div>de votre objectif</div>
		</div>
	)
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<RadialBarChart
					innerRadius='80%'
					barSize={12}
					startAngle={90}
					data={data}
				>
					<RadialBar dataKey='todayScore' fill='#FF0101' radius={10} />
					<Legend
						iconSize={0}
						layout='vertical'
						verticalAlign='top'
						align='left'
						fill='#20253A'
					/>
				</RadialBarChart>
			</ResponsiveContainer>
			{insideText}
		</div>
	)
}

export default Score
