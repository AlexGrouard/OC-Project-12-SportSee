import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Average from "../../components/AvgGraph/Average"
import Card from "../../components/Card/Card"
import Performance from "../../components/Performance/Performance"
import Score from "../../components/Score/Score"
import Title from "../../components/Title/Title"
import Today from "../../components/Today/Today"
import Error from "../404/Error"
import {
	averageFormatter,
	performanceFormatter,
	todayFormatter,
} from "../../formatter/formatter"
import {
	AverageSession,
	PerfData,
	UserSessions,
	UserType,
} from "../../type/Types"
import {
	getAverage,
	getPerformance,
	getTodayActivity,
	getUserByID,
} from "../../utils/getApiData"
/* import {
	getAverage,
	getPerformance,
	getTodayActivity,
	getUserByID,
} from "../../utils/getMockData" */

import styles from "./Home.module.scss"

function Home(): JSX.Element {
	const [user, setUser] = useState<UserType>()
	const [todayActivity, setTodayActivity] = useState<UserSessions[]>()
	const [average, setAverage] = useState<AverageSession[]>()
	const [performance, setPerformance] = useState<PerfData[]>()
	const { id } = useParams()

	useEffect(() => {
		async function loadData() {
			const userLoaded = await getUserByID(id)
			const todayActivityLoaded = await getTodayActivity(id)
			const averageLoaded = await getAverage(id)
			const performanceLoaded = await getPerformance(id)
			setUser(userLoaded)
			setTodayActivity(await todayFormatter(todayActivityLoaded))
			setAverage(await averageFormatter(averageLoaded))
			setPerformance(await performanceFormatter(performanceLoaded))
		}
		loadData()
	}, [id])

	if (!user || !todayActivity || !average || !performance) {
		return <Error />
	} else {
		let userScore
		if (!user.todayScore) {
			userScore = <Score todayScore={user.score} />
		} else {
			userScore = <Score todayScore={user.todayScore} />
		}
		return (
			<div className={styles.main}>
				<section className={styles.section}>
					<Title
						userName={user.userInfos.firstName}
						todayScore={user.todayScore}
					/>
					<div className={styles.today}>
						<Today sessions={todayActivity} />
					</div>
					<div className={styles.graphs}>
						<Average sessions={average} />
						<Performance data={performance} />
						{userScore}
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
