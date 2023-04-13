import styles from "./Home.module.scss"
import Title from "../../components/Title/Title"
import Today from "../../components/Today/Today"
import Activity from "../../components/ActivityType/Activity"
import Average from "../../components/AvgGraph/Average"
import Score from "../../components/Score/Score"
import Card from "../../components/Card/Card"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getUserByID } from "../../utils/getApiData"
import { UserType } from "../../type/Types"

function Home(): JSX.Element {
	const [user, setUser] = useState<UserType>()
	const { id } = useParams()

	useEffect(() => {
		async function loadData() {
			const loaded = await getUserByID(id)
			setUser(loaded)
		}
		loadData()
	}, [id])
	if (!user) {
		return <div>Chargement en cours</div>
	} else {
		return (
			<div className={styles.main}>
				<Title
					userName={user.userInfos.firstName}
					todayScore={user.todayScore}
				/>
				<Today />
				<div className={styles.graphs}>
					<Activity />
					<Average />
					<Score />
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
