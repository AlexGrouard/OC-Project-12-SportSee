import styles from "./Home.module.scss"
import Today from "components/Today/Today"
import Activity from "components/ActivityType/Activity"
import Average from "components/AvgGraph/Average"
import Score from "components/Score/Score"
import Card from "components/Card/Card"

function Home() {
	return (
		<div className={styles.main}>
			{/*Recuperer le nom depuis l'API*/}
			<h1> Bonjour Thomas</h1>
			<span>message</span>
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
