import styles from "./Title.module.scss"
import { TitleProps } from "../../type/Types"

export function Title({ userName, todayScore }: TitleProps) {
	if (todayScore < 0.2) {
		return (
			<div className={styles.main}>
				<div className={styles.title}>
					<h1>
						Bonjour <span className={styles.name}>{userName}</span>
					</h1>
					<div className={styles.message}>
						Belle performance ! On ne lache rien 💪
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.main}>
				<div className={styles.title}>
					<h1>
						Bonjour <span className={styles.name}>{userName}</span>
					</h1>
					<div className={styles.message}>
						Félicitation ! Vous avez explosé vos objectifs hier 👏
					</div>
				</div>
			</div>
		)
	}
}