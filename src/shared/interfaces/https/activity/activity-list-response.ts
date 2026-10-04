import { Participant } from '../participant/participant'

export interface ActivityListItem {
  id: string
  name: string
  activityDate: Date
  participants: Participant[]
  participantsAmount: number
  totalAmountInCents: number
  expensesAmount: number
}

export interface ActivityListResponse {
  activities: ActivityListItem[]
}