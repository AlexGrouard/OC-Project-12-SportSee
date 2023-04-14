import styles from "./Home.module.scss"
import { Title } from "../../components/Title/Title"
import Today from "../../components/Today/Today"
import Activity from "../../components/ActivityType/Activity"
import { Average } from "../../components/AvgGraph/Average"
import Score from "../../components/Score/Score"
import Card from "../../components/Card/Card"
import { activityFormatter } from "../../formatter/formatter"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {
	getActivity,
	getAverage,
	getPerformance,
	getUserByID,
} from "../../utils/getApiData"
import {
	UserType,
	UserActivity,
	UserAverage,
	UserPerformance,
} from "../../type/Types"

function Home(): JSX.Element {
	const [user, setUser] = useState<UserType>()
	const [activity, setActivity] = useState<UserActivity>()
	const [average, setAverage] = useState<UserAverage>()
	const [performance, setPerformance] = useState<UserPerformance>()
	const { id } = useParams()

	useEffect(() => {
		async function loadData() {
			const userLoaded = await getUserByID(id)
			const activity = await getActivity(id)
			const average = await getAverage(id)
			const performance = await getPerformance(id)
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
			//const title = <Today formattedData={activityFormatter(activity)} />
		} else {
			const test = activityFormatter(activity)
			console.log(test)
		}

		return (
			<div className={styles.main}>
				<Title
					userName={user.userInfos.firstName}
					todayScore={user.todayScore}
				/>

				<div className={styles.graphs}>
					{/*	<Activity />
					<Average />
					<Score /> */}
				</div>
				<div className={styles.sideCard}>
					<Card count={user.keyData.calorieCount} type='Calories' />
					<Card count={user.keyData.proteinCount} type='Proteines' />
					<Card count={user.keyData.carbohydrateCount} type='Glucides' />
					<Card count={user.keyData.lipidCount} type='Lipides' />
				</div>
			</div>
		)
	}
}

export default Home
