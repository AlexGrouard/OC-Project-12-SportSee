import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts"
import { UserAverage } from "../../type/Types"
import styles from "./Average.module.scss"

/* const sessions = [
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
] */

function Average({ id, sessions }: UserAverage): JSX.Element {
	console.log(sessions)
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<LineChart data={sessions}>
					<XAxis dataKey='day' stroke='#FFFFFF' opacity={0.5} />
					<Tooltip />
					<Legend />
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
