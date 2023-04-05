import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import styles from "./Layout.module.scss"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import Home from "page/Home/Home"

function Layout() {
	return (
		<Router>
			<Header />
			<Sidebar />
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</Router>
	)
}

export default Layout
