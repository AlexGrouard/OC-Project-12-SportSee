import styles from "./Home.module.scss"
import Title from "../../components/Title/Title"
import Today from "../../components/Today/Today"
import Activity from "../../components/ActivityType/Activity"
import Average from "../../components/AvgGraph/Average"
import Score from "../../components/Score/Score"
import Card from "../../components/Card/Card"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import fetchData from "../../utils/getApiData"

type getProp = {
	id: number
	UserInfos: {}
	todayScore: number
	keyData: {}
}

function Home(): JSX.Element {
	const [loadedData, setloadedData] = useState({})
	const user = useParams()

	useEffect(() => {
		async function loadData() {
			const loaded = await fetchData()
			setloadedData(loaded)
		}
		loadData()
	}, [])
	console.log(loadedData)
	return (
		<div className={styles.main}>
			{/*<Title userName={data.userInfos.firstName} todayScore={data.todayScore} />*/}
			<Today />
			<div className={styles.graphs}>
				<Activity />
				<Average />
				<Score />
			</div>
			<div className={styles.sideCard}>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	)
}

export default Home
