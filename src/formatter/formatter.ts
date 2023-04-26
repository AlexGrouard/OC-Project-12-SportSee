import {
	AverageSessionFormatted,
	FormattedPerfData,
	UserActivity,
	UserAverage,
	UserPerformance,
	UserSessions,
} from "../type/Types"

/** send formatted data for today graph
 * remove the most of the date and keep only the day without 0
 * @params  {number} id - not in use at the moment
 * @params {Array} sessions - raw data from the API
 * @return {Promise} - formatted data array for today graph
 */
export async function todayFormatter({
	userId,
	sessions,
}: UserActivity): Promise<UserSessions[] | undefined> {
	try {
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
	} catch (e) {
		console.log(e)
	}
}

/** send formatted data for today graph
 * change the day from a number to a letter
 * @params  {number} id - not in use at the moment
 * @params {Array} sessions - raw data from the API
 * @return {Promise} - formatted data array for average graph
 */
export async function averageFormatter({
	userId,
	sessions,
}: UserAverage): Promise<AverageSessionFormatted[] | undefined> {
	try {
		let averageFormatted: AverageSessionFormatted[] = []
		sessions.forEach((session) => {
			switch (session.day) {
				case 1:
					const Lformatted: AverageSessionFormatted = {
						day: "L",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Lformatted)
					break
				case 2:
				case 3:
					const Mformatted: AverageSessionFormatted = {
						day: "M",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Mformatted)
					break
				case 4:
					const Jformatted: AverageSessionFormatted = {
						day: "J",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Jformatted)
					break
				case 5:
					const Vformatted: AverageSessionFormatted = {
						day: "V",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Vformatted)
					break
				case 6:
					const Sformatted: AverageSessionFormatted = {
						day: "S",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Sformatted)
					break
				case 7:
					const Dformatted: AverageSessionFormatted = {
						day: "D",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Dformatted)
					break
				default:
					break
			}
		})
		return averageFormatted
	} catch (e) {
		console.log(e)
	}
}

/** send formatted data for today graph
 * change the kind from a number to the corresponding category
 * @params  {number} id - not in use at the moment
 *  * @params  {number} kind - not in use at the moment
 * @params {Array} data - raw data from the API
 * @return {Promise} - formatted data array for Performance graph
 */
export async function performanceFormatter({
	userId,
	kind,
	data,
}: UserPerformance): Promise<FormattedPerfData[] | undefined> {
	try {
		let dataFormatted: FormattedPerfData[] = []
		data.forEach((el) => {
			switch (el.kind) {
				case 1:
					const cardio: FormattedPerfData = {
						value: el.value,
						kind: "Cardio",
					}
					dataFormatted.push(cardio)
					break
				case 2:
					const energy: FormattedPerfData = {
						value: el.value,
						kind: "Energie",
					}
					dataFormatted.push(energy)
					break
				case 3:
					const endurance: FormattedPerfData = {
						value: el.value,
						kind: "Endurance",
					}
					dataFormatted.push(endurance)
					break
				case 4:
					const strength: FormattedPerfData = {
						value: el.value,
						kind: "Force",
					}
					dataFormatted.push(strength)
					break
				case 5:
					const speed: FormattedPerfData = {
						value: el.value,
						kind: "Vitesse",
					}
					dataFormatted.push(speed)
					break
				case 6:
					const intensity: FormattedPerfData = {
						value: el.value,
						kind: "Intensité",
					}
					dataFormatted.push(intensity)
					break
				default:
					break
			}
		})
		return dataFormatted
	} catch (e) {
		console.log(e)
	}
}
