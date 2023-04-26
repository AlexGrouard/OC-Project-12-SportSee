/* import React from "react"
import ReactDOM from "react-dom/client"
import  "./style/index.scss"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
 */

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./style/index.scss"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
