import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Average from "../../components/AvgGraph/Average"
import Card from "../../components/Card/Card"
import Performance from "../../components/Performance/Performance"
import Score from "../../components/Score/Score"
import Title from "../../components/Title/Title"
import Today from "../../components/Today/Today"
import { todayFormatter } from "../../formatter/formatter"
import { UserActivity, UserAverage, UserType } from "../../type/Types"
import {
	getAverage,
	getTodayActivity,
	// getPerformance,
	getUserByID,
} from "../../utils/getApiData"
import styles from "./Home.module.scss"

function Home(): JSX.Element {
	const [user, setUser] = useState<UserType>()
	const [todayActivity, setTodayActivity] = useState<UserActivity>()
	const [average, setAverage] = useState<UserAverage>()
	// const [performance, setPerformance] = useState<UserPerformance>()
	const { id } = useParams()

	useEffect(() => {
		async function loadData() {
			const userLoaded = await getUserByID(id)
			const todayActivity = await getTodayActivity(id)
			const average = await getAverage(id)
			// const performance = await getPerformance(id)
			setUser(userLoaded)
			setTodayActivity(todayActivity)
			setAverage(average)
			//setPerformance(performance)
		}
		loadData()
	}, [id])

	if (!user || !todayActivity || !average) {
		return <div>Chargement en cours</div>
	} else {
		//console.log(todayActivity)
		const sessionsFormatted = todayFormatter(todayActivity)
		//console.log(sessionsFormatted)
		//console.log(average)
		return (
			<div className={styles.main}>
				<section className={styles.section}>
					<Title
						userName={user.userInfos.firstName}
						todayScore={user.todayScore}
					/>
					<div className={styles.today}>
						<Today sessions={sessionsFormatted} />
					</div>
					<div className={styles.graphs}>
						<Average id={average.id} sessions={average.sessions}/>
						<Performance />
						<Score todayScore={user.todayScore} />
					</div>
				</section>
				<aside className={styles.sideCard}>
					<Card count={user.keyData.calorieCount} type='Calories' />
					<Card count={user.keyData.proteinCount} type='Proteines' />
					<Card count={user.keyData.carbohydrateCount} type='Glucides' />
					<Card count={user.keyData.lipidCount} type='Lipides' />
				</aside>
			</div>
		)
	}
}

export default Home
