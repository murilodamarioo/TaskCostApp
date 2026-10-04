import { isValid, parse } from 'date-fns'

export const formatDateInput = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 8)

  if (digits.length <= 2) return digits
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`

  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
}

export const parseDateInput = (value: string): Date | null => {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return null

  const date = parse(value, 'dd/MM/yyyy', new Date())
  return isValid(date) ? date : null
}