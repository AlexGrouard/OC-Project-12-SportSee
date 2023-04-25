import { USER_MAIN_DATA } from "../__mock__/data"
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
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}

/**
 * fetch global user data form mockup Data
 *
 * @param {string} id - user id
 * @returns {Promise<UserActivity>} - return a promise of id and sessions for the main graph
 */
export async function getTodayActivity(
	id: string | undefined
): Promise<UserActivity> {
	try {
		const {
			data: { data },
		} = await axios.get(`${url}user/${id}/activity`)
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}

export async function getAverage(id: string | undefined): Promise<UserAverage> {
	try {
		const {
			data: { data },
		} = await axios.get(`${url}user/${id}/average-sessions`)
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}

export async function getPerformance(
	id: string | undefined
): Promise<UserPerformance> {
	try {
		const {
			data: { data },
		} = await axios.get(`${url}user/${id}/performance`)
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}
