import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts"
import styles from "./Average.module.scss"

const sessions = [
	{
		day: 1,
		sessionLength: 30,
	},
	{
		day: 2,
		sessionLength: 40,
	},
	{
		day: 3,
		sessionLength: 50,
	},
	{
		day: 4,
		sessionLength: 30,
	},
	{
		day: 5,
		sessionLength: 30,
	},
	{
		day: 6,
		sessionLength: 50,
	},
	{
		day: 7,
		sessionLength: 50,
	},
]

function Average(): JSX.Element {
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<LineChart data={sessions}>
					<XAxis dataKey='day' stroke='#FFFFFF' />
					<Tooltip />
					<Legend />
					<Line
						type='natural'
						stroke='#FFFFFF'
						dataKey='sessionLength'
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Average
