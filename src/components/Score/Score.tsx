import {
	Legend,
	RadialBar,
	RadialBarChart,
	ResponsiveContainer,
} from "recharts"
import styles from "./Score.module.scss"

type ScoreProps = {
	todayScore: number
}

function Score({ todayScore }: ScoreProps): JSX.Element {
	//formatting
	const scoreInPercent = todayScore * 100
	const data = [
		{
			todayScore: scoreInPercent,
		},
	]
	//text
	const insideText = (
		<div className={styles.insideText}>
			<div className={styles.percent}>{scoreInPercent}%</div>
			<div>de votre </div>
			<div> objectif</div>
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
					<RadialBar dataKey='todayScore' fill='#FF0101' />
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
