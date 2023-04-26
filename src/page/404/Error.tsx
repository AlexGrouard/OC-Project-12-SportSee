/** Render a 404 error page
 * display a waiting message if timeout then display error
 * @returns {JSX}
 */
function Error(): JSX.Element {
	const timer: ReturnType<typeof setTimeout> = setTimeout(() => {}, 2000)

	if (!timer) {
		clearTimeout(timer)
		return <div>ERREUR 404 : La page demandée n'existe pas</div>
	} else return <div>Chargement...</div>
}
export default Error
