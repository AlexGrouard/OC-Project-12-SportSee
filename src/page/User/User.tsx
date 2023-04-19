import { Link } from "react-router-dom"
import styles from "./User.module.scss"

function User(): JSX.Element {
	return (
		<div className={styles.main}>
			<h1>Merci de selectionner un Utilisateur:</h1>
			<div className={styles.link}>
				<Link to='/18'>
					<button>Cecilia</button>
				</Link>
				<Link to='/12'>
					<button>Karl</button>
				</Link>
			</div>
		</div>
	)
}

export default User
