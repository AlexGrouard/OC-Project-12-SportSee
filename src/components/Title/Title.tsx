import { TitleProps } from "../../type/Types"
import styles from "./Title.module.scss"
/** Render the Title component
 * @params  {string} userName - take the user name to display
 * @params {number} todayScore - Use for variyng the message of performance
 * @return {JSX}
 */
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
				Bonjour <span className={styles.name}>{userName}</span>
			</div>
			<div className={styles.message}>{perfMessage}</div>
		</div>
	)
}

export default Title
