import {
	AverageSession,
	PerfData,
	UserActivity,
	UserAverage,
	UserPerformance,
	UserSessions,
} from "../type/Types"

//get data from the api
//use subtring to keep on the 9-10th caracter
//if the first caracter is 0 remove it
//then return the data to the graph module
export async function todayFormatter({
	id,
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

//change the day from a number to a letter
export async function averageFormatter({
	id,
	sessions,
}: UserAverage): Promise<AverageSession[] | undefined> {
	try {
		let averageFormatted: AverageSession[] = []
		sessions.forEach((session) => {
			switch (session.day) {
				case 1:
					const Lformatted: AverageSession = {
						day: "L",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Lformatted)
					break
				case 2:
				case 3:
					const Mformatted: AverageSession = {
						day: "M",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Mformatted)
					break
				case 4:
					const Jformatted: AverageSession = {
						day: "J",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Jformatted)
					break
				case 5:
					const Vformatted: AverageSession = {
						day: "V",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Vformatted)
					break
				case 6:
					const Sformatted: AverageSession = {
						day: "S",
						sessionLength: session.sessionLength,
					}
					averageFormatted.push(Sformatted)
					break
				case 7:
					const Dformatted: AverageSession = {
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

export async function performanceFormatter({
	id,
	kind,
	data,
}: UserPerformance): Promise<PerfData[] | undefined> {
	try {
		let dataFormatted: PerfData[] = []
		data.forEach((el) => {
			switch (el.kind) {
				case 1:
					const cardio: PerfData = {
						value: el.value,
						kind: kind[1],
					}
					dataFormatted.push(cardio)
					break
				case 2:
					const energy: PerfData = {
						value: el.value,
						kind: kind[2],
					}
					dataFormatted.push(energy)
					break
				case 3:
					const endurance: PerfData = {
						value: el.value,
						kind: kind[3],
					}
					dataFormatted.push(endurance)
					break
				case 4:
					const strength: PerfData = {
						value: el.value,
						kind: kind[4],
					}
					dataFormatted.push(strength)
					break
				case 5:
					const speed: PerfData = {
						value: el.value,
						kind: kind[5],
					}
					dataFormatted.push(speed)
					break
				case 6:
					const intensity: PerfData = {
						value: el.value,
						kind: kind[6],
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
