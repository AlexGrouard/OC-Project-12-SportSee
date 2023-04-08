import styles from "./Home.module.scss"
import Title from "../../components/Title/Title"
import Today from "../../components/Today/Today"
import Activity from "../../components/ActivityType/Activity"
import Average from "../../components/AvgGraph/Average"
import Score from "../../components/Score/Score"
import Card from "../../components/Card/Card"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

//async call to axios to get data
async function getData(user: Object) {
	//console.log(user)
	try {
		const { data } = await axios.get("http://localhost:3000/user/12")
		return data
	} catch (error) {
		return (
			<div className={styles.main}>
				{" "}
				Une erreur c'est produit merci de recharger la page{" "}
			</div>
		)
	}
}

function Home(): JSX.Element {
	const [rawData, setrawData] = useState([])
	const user = useParams()
	useEffect(() => {
		async function getDataLoader() {
			const datas = await getData(user)
			setrawData(datas)
		}
		getDataLoader()
	})

	return (
		<div className={styles.main}>
			<Title userInfos={rawData} />
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
