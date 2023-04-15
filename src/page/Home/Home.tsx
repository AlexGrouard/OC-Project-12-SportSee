import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Activity from "../../components/ActivityType/Activity"
import Average from "../../components/AvgGraph/Average"
import Card from "../../components/Card/Card"
import Score from "../../components/Score/Score"
import { Title } from "../../components/Title/Title"
import Today from "../../components/Today/Today"
//import { activityFormatter } from "../../formatter/formatter"
import { UserActivity, UserType } from "../../type/Types"
import {
	getActivity,
	// getAverage,
	// getPerformance,
	getUserByID,
} from "../../utils/getApiData"
import styles from "./Home.module.scss"

function Home(): JSX.Element {
	const [user, setUser] = useState<UserType>()
	const [activity, setActivity] = useState<UserActivity>()
	// const [average, setAverage] = useState<UserAverage>()
	// const [performance, setPerformance] = useState<UserPerformance>()
	const { id } = useParams()

	useEffect(() => {
		async function loadData() {
			const userLoaded = await getUserByID(id)
			const activity = await getActivity(id)
			// const average = await getAverage(id)
			// const performance = await getPerformance(id)
			setUser(userLoaded)
			setActivity(activity)
			//setAverage(average)
			//setPerformance(performance)
		}
		loadData()
	}, [id])

	if (!user) {
		return <div>Chargement en cours</div>
	} else {
		if (!activity) {
			return <div>Chargement en cours</div>
		} else {
			//const todayGraph = <Today formattedData={activityFormatter(activity)} />
			//)
			Object.entries(activity.sessions).map(
				(session) => console.log(session)
				//console.log(activityFormatter(session))
			)
			//console.log(activity)
		}

		return (
			<div className={styles.main}>
				<section className={styles.section}>
					<Title
						userName={user.userInfos.firstName}
						todayScore={user.todayScore}
					/>
					<div className={styles.today}>
						<Today />
					</div>
					<div className={styles.graphs}>
						<Average />
						<Activity />
						<Score />
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
