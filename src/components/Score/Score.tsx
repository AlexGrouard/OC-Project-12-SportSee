import {
	Legend,
	RadialBar,
	RadialBarChart,
	ResponsiveContainer,
} from "recharts"
import styles from "./Score.module.scss"

const data = [
	{
		todayScore: 0.3,
		max: 10,
	},
]

function Score(): JSX.Element {
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<RadialBarChart
					innerRadius='80%'
					barSize={12}
					startAngle={90}
					data={data}
				>
					<RadialBar dataKey='todayScore' fill='#FF0101' radius={10}/>
					<Legend
						iconSize={0}
						layout='vertical'
						verticalAlign='top'
						align='left'
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Score
