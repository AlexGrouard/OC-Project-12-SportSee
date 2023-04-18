import { TitleProps } from "../../type/Types"
import styles from "./Title.module.scss"

function Title({ userName, todayScore }: TitleProps) {
	let perfMessage
	if (todayScore < 0.2) {
		perfMessage = "Belle performance ! On ne lache rien 💪"
	} else {
		perfMessage = "Félicitation ! Vous avez explosé vos objectifs hier 👏"
	}
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<h1>
					Bonjour <span className={styles.name}>{userName}</span>
				</h1>
				<div className={styles.message}>{perfMessage}</div>
			</div>
		</div>
	)
}

export default Title
