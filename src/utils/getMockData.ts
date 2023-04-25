/* export{} */
import {
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_MAIN_DATA,
	USER_PERFORMANCE,
} from "../__mock__/data.json"
import {
	UserActivity,
	UserAverage,
	UserPerformance,
	UserType,
} from "../type/Types"
/**
 * fetch global user data form mockup Data
 *
 * @param id - user id
 * @returns - return a promise of user data
 */
export async function getUserByID(id: string): Promise<UserType> {
	try {
		const data = USER_MAIN_DATA.find((user) => user.id === parseInt(id))
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}

/**
 * fetch activity data form mockup Data
 *
 * @param id - user id
 * @returns - return a promise of id and an array of sessions data for the main graph
 */

export async function getTodayActivity(id: string): Promise<UserActivity> {
	try {
		const data = USER_ACTIVITY.find((user) => user.userId === parseInt(id))
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}

/**
 * fetch Average score form mockup Data
 *
 * @param id - user id
 * @returns - return a promise of id and an array of sessions data for the average graph
 */
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

/**
 * fetch Performance score form mockup Data
 *
 * @param id - user id
 * @returns - return a promise of id and an array of sessions data for the Performance graph
 */
export async function getPerformance(id: string): Promise<UserPerformance> {
	try {
		const data = USER_PERFORMANCE.find((user) => user.userId === parseInt(id))
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}
