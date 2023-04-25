import {
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_MAIN_DATA,
	USER_PERFORMANCE,
} from "../__mock__/data"
import {
	UserActivity,
	UserAverage,
	UserPerformance,
	UserType,
} from "../type/Types"
/**
 * fetch global user data form mockup Data
 *
 * @param {string} id - user id
 * @returns {Promise<UserType>} - return user data
 */
export async function getUserByID(id: string): Promise<UserType> {
	try {
		const data = USER_MAIN_DATA.find((user) => user.id === parseInt(id))
		console.log(data)
		//return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}

/**
 * fetch global user data form mockup Data
 *
 * @param {string} id - user id
 * @returns {Promise<UserActivity>} - return a promise of id and an array of sessions data for the main graph
 */

export async function getTodayActivity(id: string): Promise<UserActivity> {
	try {
		const data = USER_ACTIVITY.find((user) => user.userId === parseInt(id))
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}

export async function getAverage(id: string): Promise<UserAverage> {
	try {
		const data = USER_AVERAGE_SESSIONS.find(
			(user) => user.userId === parseInt(id)
		)
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}

export async function getPerformance(id: string): Promise<UserPerformance> {
	try {
		const data = USER_PERFORMANCE.find((user) => user.userId === parseInt(id))
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}
