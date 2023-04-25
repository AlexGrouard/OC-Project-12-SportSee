import axios from "axios"
import {
	UserActivity,
	UserAverage,
	UserPerformance,
	UserType,
} from "../type/Types"

const url = "http://localhost:3000/"

/**
 * fetch global user data form mockup Data
 *
 * @param id - user id
 * @returns - return a promise of user data
 */
export async function getUserByID(id: string): Promise<UserType> {
	try {
		const {
			data: { data },
		} = await axios.get(`${url}user/${id}`)
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
		const {
			data: { data },
		} = await axios.get(`${url}user/${id}/activity`)
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
		const {
			data: { data },
		} = await axios.get(`${url}user/${id}/average-sessions`)
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
		const {
			data: { data },
		} = await axios.get(`${url}user/${id}/performance`)
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}
