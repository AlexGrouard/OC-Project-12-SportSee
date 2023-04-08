import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import styles from "./Layout.module.scss"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import Home from "../page/Home/Home"

function Layout(): JSX.Element {
	return (
		<Router>
			<Header />
			<Sidebar />
			<div className={styles.container}>
				<Routes>
					<Route path='/:id' element={<Home />} />
				</Routes>
			</div>
		</Router>
	)
}

export default Layout
