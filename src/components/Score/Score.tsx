import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts"
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
		{
			todayScore: 100 - scoreInPercent,
		},
	]
	const renderLegend = () => {
		return <div className={styles.title}>Score</div>
	}
	//text
	const insideText = (
		<div className={styles.insideText}>
			<div className={styles.percent}>{scoreInPercent}%</div>
			<div>de votre </div>
			<div>objectif</div>
		</div>
	)
	const COLORS = ["#FF0101", "#FBFBFB"]
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<PieChart>
					<Pie
						cx={30}
						cy={120}
						data={data}
						innerRadius={70}
						outerRadius={80}
						startAngle={90}
						paddingAngle={5}
						stroke='none'
						dataKey='todayScore'
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Legend
						iconSize={0}
						layout='vertical'
						verticalAlign='top'
						align='left'
						fill='#20253A'
						content={renderLegend}
					/>
				</PieChart>
			</ResponsiveContainer>
			{insideText}
		</div>
	)
}

export default Score
