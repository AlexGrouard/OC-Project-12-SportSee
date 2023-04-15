import { ActivitySession } from "../type/Types"

export function activityFormatter({
	day,
	kilogram,
	calories,
}: ActivitySession) {
	//const formattedData: Array = []
	const formattedDay = day.toString().substring(9, 10)
	console.log(formattedDay)
	/* Object.entries(sessions).map((session) => {
		//console.log(session[1])
		const formattedDay = session
		console.log(formattedDay)
	})
		let index: keyof typeof sessions
	for (index in sessions) {
		console.log(sessions[index])
		
	} */
}
