import axios from "axios"
import { UserType } from "../type/Types"

const url = "http://localhost:3000/"

export async function getUserByID(id: any): Promise<UserType> {
	try {
		const {
			data: { data },
		} = await axios.get(`${url}user/${id}`)
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}
