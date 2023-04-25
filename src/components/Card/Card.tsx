import caloriesIcon from "../../assets/calories-icon.svg"
import carbsIcon from "../../assets/carbs-icon.svg"
import fatIcon from "../../assets/fat-icon.svg"
import proteinIcon from "../../assets/protein-icon.svg"
import { CardProps } from "../../type/Types"
import styles from "./Card.module.scss"

/** Render the Average graphs
 * @params  {number} count - take the number to display
 * @params {string} type - take a string to define what style of icon to render
 * @return {JSX}
 */
function Card({ count, type }: CardProps): JSX.Element {
	// add the right unit to the count
	let typeVariant
	let icon
	const formattedCount = count.toLocaleString()

	if (type === "Calories") {
		icon = <img className={styles.icon} src={caloriesIcon} alt={type}></img>
		typeVariant = <div className={styles.number}>{formattedCount}kCal</div>
	} else {
		typeVariant = <div className={styles.number}>{formattedCount}g</div>
	}
	if (type === "Proteines") {
		icon = <img className={styles.icon} src={proteinIcon} alt={type}></img>
	}
	if (type === "Glucides") {
		icon = <img className={styles.icon} src={carbsIcon} alt={type}></img>
	}
	if (type === "Lipides") {
		icon = <img className={styles.icon} src={fatIcon} alt={type}></img>
	}

	return (
		<div className={styles.main}>
			{icon}
			<div className={styles.text}>
				{typeVariant}
				<div className={styles.type}>{type}</div>
			</div>
		</div>
	)
}

export default Card
