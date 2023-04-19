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
	score: number
	keyData: KeyData
}

export type UserScore = {
	score: number
}

export type UserSessions = {
	day: string
	kilogram: number
	calories: number
}

export type UserActivity = {
	id: number
	sessions: [
		{
			day: string
			kilogram: number
			calories: number
		}
	]
}
export type UserAverage = {
	id: number
	sessions: [
		{
			day: number
			sessionLength: number
		}
	]
}

export type AverageSession = {
	day: string
	sessionLength: number
}

export type UserPerformance = {
	id: number
	kind: { 1: string; 2: string; 3: string; 4: string; 5: string; 6: string }
	data: [
		{
			value: number
			kind: number
		}
	]
}

export type PerfData = {
	value: number
	kind: string
}

export type TitleProps = {
	userName: string
	todayScore: number
}

export type CardProps = {
	count: number
	type: string
}

