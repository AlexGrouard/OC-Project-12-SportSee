import styles from "./Header.module.scss"
import logo from "../../assets/logo.svg"

function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={logo} alt='logo'></img>
			</div>
			<nav>
				<span>Accueil</span>
				<span>Profil</span>
				<span>Réglage</span>
				<span>Communauté</span>
			</nav>
		</header>
	)
}

export default Header
