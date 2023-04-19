import axios from "axios"
import {
	UserActivity,
	UserAverage,
	UserPerformance,
	UserType,
} from "../type/Types"

const url = "http://localhost:3000/"

export async function getUserByID(id: string | undefined): Promise<UserType> {
	try {
		const {
			data: { data },
		} = await axios.get(`${url}user/${id}`)
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}

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
