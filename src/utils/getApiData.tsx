import axios from "axios"

async function fetchData() {
	try {
		const { data } = await axios.get("http://localhost:3000/user/12")
		return data
	} catch (e) {
		throw new Error(`${e}`)
	}
}
export default fetchData
