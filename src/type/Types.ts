export type UserInfo = {
	firstName: string
	lastNumber: string
	age: number
}
export type KeyData = {
	calorieCount: number
	proteinCount: number
	carbohydrateCount: number
	lipidCount: number
}

export type UserType = {
	id: number
	userInfos: UserInfo
	todayScore: number
	keyData: KeyData
}

export type TitleProps = {
	userName: string
	todayScore: number
}

export type CardProps = {
	count: number
	type: string
}
