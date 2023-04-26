/** Type List for all my app
 *
 */

/** User Info Type
 *
 */
export type UserInfo = {
	firstName: string
	lastName: string
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
	score?: number
	keyData: KeyData
}

/** Activity Type
 *
 */
export type UserSessions = {
	day: string
	kilogram: number
	calories: number
}
export type UserActivity = {
	userId: number
	sessions: UserSessions[]
}

/** Average Type
 *
 */
export type AverageSession = {
	day: number
	sessionLength: number
}
export type AverageSessionFormatted = {
	day: string
	sessionLength: number
}
export type UserAverage = {
	userId: number
	sessions: AverageSession[] | AverageSessionFormatted[]
}

/** Performance Type
 *
 */
export type KindList = {
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
export type FormattedPerfData = {
	value: number
	kind: string
}
export type UserPerformance = {
	userId: number
	kind: KindList
	data: PerfData[] | FormattedPerfData[]
}

/** Props Type
 *
 */
export type TitleProps = {
	userName: string
	todayScore: number
}

export type CardProps = {
	count: number
	type: string
}
