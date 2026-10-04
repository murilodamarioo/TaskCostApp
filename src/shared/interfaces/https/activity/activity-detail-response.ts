import { ActivityExpense } from './activity-expense'
import { Participant } from '../participant/participant'

export interface ActivityDetailResponse {
  id: string
  name: string
  activityDate: string
  totalAmountInCents: number
  expenses: ActivityExpense[]
  participants: Participant[]
}