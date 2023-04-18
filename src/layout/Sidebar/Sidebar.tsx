import Activity1 from "../../assets/activity1.svg"
import Activity2 from "../../assets/activity2.svg"
import Activity3 from "../../assets/activity3.svg"
import Activity4 from "../../assets/activity4.svg"
import styles from "./Sidebar.module.scss"

function Header(): JSX.Element {
	return (
		<div className={styles.main}>
			<div className={styles.logos}>
				<img src={Activity1} alt='meditate'></img>
				<img src={Activity2} alt='swimming'></img>
				<img src={Activity3} alt='bike'></img>
				<img src={Activity4} alt='workout'></img>
			</div>
			<p className={styles.copyright}>Copyright, SportSee 2020</p>
		</div>
	)
}

export default Header
