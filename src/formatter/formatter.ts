import { UserActivity } from "../type/Types"

export function todayFormatter({ id, sessions }: UserActivity[]) {
	let sessionFormatted = []

	const twoDigitDay = day.substring(9, 10)
	if (twoDigitDay.substring(0) === "0") {
		const oneDigitDay = twoDigitDay.substring(1)
		sessionFormatted.push(oneDigitDay)
	} else {
		sessionFormatted.push(twoDigitDay)
	}
	sessionFormatted.push(kilogram)
	sessionFormatted.push(calories)

	return sessionFormatted
	//get data from the api
	//use subtring to keep on the 9-10th caracter
	//if the first caracter is 0 remove it
	//then return the data to the graph module
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
