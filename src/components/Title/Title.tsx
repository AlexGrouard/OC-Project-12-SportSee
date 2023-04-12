import styles from "./Title.module.scss"

function Title(userName: string, todayScore: number) {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				{/*Recuperer le nom depuis l'API*/}
				<h1>
					Bonjour <span className={styles.name}>{userName}</span>
				</h1>
				{/*Recuperer le todayScore depuis l'API puis generer un message en fonction de son resultat du jour
					if (todayScore < 0.2) {return (<div className={styles.message}> Belle performance ! On ne lache rien :flex  </div>)}
					else {return (<div className={styles.message}>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>}
				
				*/}
			</div>
		</div>
	)
}

export default Title
