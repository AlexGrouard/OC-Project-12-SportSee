import { useEffect, useState } from "react"
/** Render a 404 error page
 * display a waiting message if timeout then display error
 * @returns {JSX}
 */
function Error(): JSX.Element {
	const duration = 1500
	const [isTimedOut, setIsTimedOut] = useState(false)
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsTimedOut(true)
		}, duration)
		return () => {
			clearTimeout(timer)
		}
	}, [])

	if (isTimedOut) {
		return <div>ERREUR 404 : La page demandée n'existe pas</div>
	} else return <div>Chargement...</div>
}
export default Error
