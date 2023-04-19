import { UserActivity, UserSessions } from "../type/Types"

//get data from the api
//use subtring to keep on the 9-10th caracter
//if the first caracter is 0 remove it
//then return the data to the graph module
export function todayFormatter({ id, sessions }: UserActivity): UserSessions[] {
	let sessionFormatted: UserSessions[] = []
	sessions.forEach((session) => {
		const twoDigitDay = session.day.substring(8, 10)
		if (twoDigitDay.charAt(0) === "0") {
			const formatted: UserSessions = {
				day: twoDigitDay.charAt(1),
				kilogram: session.kilogram,
				calories: session.calories,
			}
			sessionFormatted.push(formatted)
		} else {
			const formatted: UserSessions = {
				day: twoDigitDay,
				kilogram: session.kilogram,
				calories: session.calories,
			}
			sessionFormatted.push(formatted)
		}
	})
	return sessionFormatted
}

export function scoreFormatter() {
	//get the today score
	//trnaform in percent
	//return to the graph module
}

export function performanceFormatter() {
	//get data
	// for every entries in data
	//replace the number by the name of the activity
}
