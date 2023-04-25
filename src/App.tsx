import React from "react"
import Layout from "./layout/Layout"
import styles from "./style/App.module.scss"

function App(): JSX.Element {
	return (
		<div className={styles.app}>
			<Layout />
		</div>
	)
}

export default App
