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
export type UserActivity = {
	id: number
	sessions: {
		day: string
		kilogram: number
		calories: number
	}
}

export type UserAverage = {
	id: number
	sessions: AverageSession
}

export type AverageSession = {
	day: number
	sessionLength: number
}

export type UserPerformance = {
	id: number
	kind: PerfKind
	data: PerfData
}

export type PerfKind = {
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
}

export type PerfData = {
	value: number
	kind: number
}

export type FormattedActivityData = {
	day: number
	kilograms: number
	calories: number
}

export type TitleProps = {
	userName: string
	todayScore: number
}

export type CardProps = {
	count: number
	type: string
}

export type ScoreProps = {
	//scoreChartData: TodayScoreFormatted
	todayScore: number
}
