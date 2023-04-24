import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import styles from "./Header.module.scss"

function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link to='/'>
					<img src={logo} alt='logo'></img>
				</Link>
			</div>
			<nav>
				<Link to='/'>
					<span>Accueil</span>
				</Link>
				<span>Profil</span>
				<span>Réglage</span>
				<span>Communauté</span>
			</nav>
		</header>
	)
}

export default Header
