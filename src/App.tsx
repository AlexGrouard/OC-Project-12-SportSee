import React from "react"
import styles from "./style/App.module.scss"
import Layout from "./layout/Layout"

function App(): JSX.Element {
	return (
		<div className={styles.app}>
			<Layout />
		</div>
	)
}

export default App
