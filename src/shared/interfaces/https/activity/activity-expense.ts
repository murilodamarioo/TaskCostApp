import { ExpenseParticipant } from '../exepense/expense-participant'

export interface ActivityExpense {
  id: string
  name: string
  amountInCents: number
  paymentStatus: string
  payerName?: string | null
  payerId?: string | null
  participants: ExpenseParticipant[]
}