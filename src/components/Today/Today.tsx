import styles from "./Today.module.scss"
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts"

function Today({ formattedData }: any): JSX.Element {
	return (
		<div className={styles.main}>
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart data={formattedData}>
					<CartesianGrid />
					<Tooltip />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Today
